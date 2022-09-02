<script lang="ts">
	import { onMount, tick } from 'svelte';

	let txt = '';
	let isLoading = false;
	let isOutputControlAdded = false;
	let drawingBoard: any;
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let noiseTs: DOMHighResTimeStamp;
	let imageTs: DOMHighResTimeStamp;
	let drawNextImage: () => void;
	let interval: ReturnType<typeof setInterval>;
	let canvasSize = 400;
	let canvasContainerEl: HTMLDivElement;
	let fileInput: HTMLInputElement;
	let sketchEl: HTMLCanvasElement;
	let isShowSketch = false;
	let outputImgs: CanvasImageSource[] = [];

	const animImageDuration = 500 as const;
	const animNoiseDuration = 3000 as const;

	async function drawNoise() {
		if (!ctx) {
			return;
		}

		const imageData = ctx.createImageData(canvas.width, canvas.height);
		const pix = imageData.data;

		for (let i = 0, n = pix.length; i < n; i += 4) {
			const c = 7;
			pix[i] = 40 * Math.random() * c; // Set a random gray
			pix[i + 1] = 40 * Math.random() * c; // Set a random gray
			pix[i + 2] = 40 * Math.random() * c; // Set a random gray
			pix[i + 3] = 255; // 100% opaque
		}

		const bitmap = await createImageBitmap(imageData);

		const duration = performance.now() - noiseTs;
		ctx.globalAlpha = Math.min(duration, animNoiseDuration) / animNoiseDuration;
		ctx.drawImage(bitmap, 0, 0, canvasSize, canvasSize);

		if (isLoading) {
			window.requestAnimationFrame(drawNoise);
		}
	}

	function drawImage(image: CanvasImageSource) {
		if (!ctx) {
			return;
		}

		const duration = performance.now() - imageTs;
		ctx.globalAlpha = Math.min(duration, animImageDuration) / animImageDuration;
		ctx.drawImage(image, 0, 0, canvasSize, canvasSize);

		if (duration < animImageDuration) {
			window.requestAnimationFrame(() => drawImage(image));
		}
	}

	async function getCanvasSnapshot(
		canvas: HTMLCanvasElement
	): Promise<{ imgFile: File; imgBitmap: ImageBitmap }> {
		const canvasDataUrl = canvas.toDataURL('png');
		const res = await fetch(canvasDataUrl);
		const blob = await res.blob();
		const imgFile = new File([blob], 'canvas shot.png', { type: 'image/png' });
		const imgData = canvas.getContext('2d')!.getImageData(0, 0, canvasSize, canvasSize);
		const imgBitmap = await createImageBitmap(imgData);
		return { imgFile, imgBitmap };
	}

	async function submitRequest() {
		if (!txt) {
			return alert('Please add prompt');
		}

		if (!canvas || !ctx) {
			return;
		}

		if (interval) {
			clearInterval(interval);
		}
		isLoading = true;
		isShowSketch = false;
		copySketch();

		// start noise animation
		noiseTs = performance.now();
		drawNoise();

		const { imgFile, imgBitmap: initialSketchBitmap } = await getCanvasSnapshot(canvas);
		const form = new FormData();
		form.append('prompt', txt);
		form.append('strength', '0.85');
		form.append('image', imgFile);

		try {
			const response = await fetch('https://sdb.pcuenca.net/i2i', {
				method: 'POST',
				body: form
			});

			const json = JSON.parse(await response.text());

			const { images: imagesBase64Strs }: { images: string[] } = json;

			if (!imagesBase64Strs.length) {
				return alert(
					'All the results were flagged. Please try again with diffeerent sketch + prompt'
				);
			}

			outputImgs = (await Promise.all(
				imagesBase64Strs.map(async (imgBase64Str) => {
					const imgEl = new Image();
					imgEl.src = `data:image/png;base64, ${imgBase64Str}`;
					// await image.onload
					await new Promise((resolve, _) => {
						imgEl.onload = () => resolve(imgEl);
					});
					return imgEl;
				})
			)) as CanvasImageSource[];
			outputImgs.push(initialSketchBitmap);

			isShowSketch = true;
			let i = 0;
			imageTs = performance.now();
			drawImage(outputImgs[i % outputImgs.length]);
			drawNextImage = () => {
				if (interval) {
					clearInterval(interval);
				}
				imageTs = performance.now();
				i = i + 1;
				drawImage(outputImgs[i % outputImgs.length]);
			};
			interval = setInterval(() => {
				i = i + 1;
				imageTs = performance.now();
				drawImage(outputImgs[i % outputImgs.length]);
			}, 2500);

			if (!isOutputControlAdded) {
				addOutputControl();
			}
		} catch (err) {
			console.error(err);
			alert('Error happened, queue might be full. Please try again in a bit :)');
		} finally {
			isLoading = false;
		}
	}

	function addOutputControl() {
		const div = document.createElement('div');
		div.className = 'drawing-board-control';

		const btn = document.createElement('button');
		btn.innerHTML = '⏯';
		btn.onclick = drawNextImage;
		div.append(btn);

		const controlsEl = document.querySelector('.drawing-board-controls');
		if (controlsEl && outputImgs.length > 1) {
			controlsEl.appendChild(div);
			isOutputControlAdded = true;
			canvasContainerEl.onclick = () => {
				if (interval) {
					clearInterval(interval);
				}
			};
		}
	}

	function addClearCanvasControl() {
		const div = document.createElement('div');
		div.className = 'drawing-board-control';

		const btn = document.createElement('button');
		btn.innerHTML = '🧹';
		btn.onclick = () => {
			ctx?.clearRect(0, 0, canvasSize, canvasSize);
			outputImgs = [];
			isShowSketch = false;
		};
		div.append(btn);

		const controlsEl = document.querySelector('.drawing-board-controls');
		if (controlsEl) {
			controlsEl.appendChild(div);
		}
	}

	function addDownloadCanvasControl() {
		const div = document.createElement('div');
		div.className = 'drawing-board-control';

		const btn = document.createElement('button');
		btn.innerHTML = '⬇️';
		btn.onclick = () => {
			if (!canvas) {
				return;
			}
			const link = document.createElement('a');
			const imgId = Date.now() % 200;
			link.download = `diffuse-the-rest-${imgId}.png`;
			link.href = canvas.toDataURL();
			link.click();
		};
		div.append(btn);

		const controlsEl = document.querySelector('.drawing-board-controls');
		if (controlsEl) {
			controlsEl.appendChild(div);
		}
	}

	function copySketch() {
		const context = sketchEl.getContext('2d');

		//set dimensions
		sketchEl.width = canvas.width;
		sketchEl.height = canvas.height;

		//apply the old canvas to the new one
		context!.drawImage(canvas, 0, 0);
	}

	async function drawUploadedImg(file: File) {
		if (interval) {
			clearInterval(interval);
		}
		const imgEl = new Image();
		imgEl.src = URL.createObjectURL(file);
		// await image.onload
		await new Promise((resolve, _) => {
			imgEl.onload = () => resolve(imgEl);
		});
		const { width, height } = imgEl;
		ctx?.drawImage(imgEl, 0, 0, width, height, 0, 0, canvasSize, canvasSize);
	}

	function onfImgUpload() {
		const file = fileInput.files?.[0];
		if (file) {
			drawUploadedImg(file);
		}
	}

	function handleDrop(e: DragEvent) {
		if (!e.dataTransfer?.files) {
			return;
		}
		e.preventDefault();
		const files = Array.from(e.dataTransfer.files);
		const file = files[0];
		drawUploadedImg(file);
	}

	function handlePaste(e: ClipboardEvent) {
		if (!e.clipboardData) {
			return;
		}
		const files = Array.from(e.clipboardData.files);
		if (files.length === 0) {
			return;
		}
		e.preventDefault();
		const file = files[0];
		drawUploadedImg(file);
	}

	function onKeyDown(e: KeyboardEvent) {
		if (e.code === 'Enter') {
			e.preventDefault();
			submitRequest();
		}
	}

	// original: https://gist.github.com/MonsieurV/fb640c29084c171b4444184858a91bc7
	function polyfillCreateImageBitmap() {
		window.createImageBitmap = async function (data: ImageData): Promise<ImageBitmap> {
			return new Promise((resolve, _) => {
				const canvas = document.createElement('canvas');
				const ctx = canvas.getContext('2d');
				canvas.width = data.width;
				canvas.height = data.height;
				ctx!.putImageData(data, 0, 0);
				const dataURL = canvas.toDataURL();
				const img = document.createElement('img');
				img.addEventListener('load', () => {
					resolve(img as any as ImageBitmap);
				});
				img.src = dataURL;
			});
		};
	}

	function makeLinksTargetBlank() {
		const linkEls = document.querySelectorAll('a');
		for (const linkEl of linkEls) {
			linkEl.target = '_blank';
		}
	}

	onMount(async () => {
		if (typeof createImageBitmap === 'undefined') {
			polyfillCreateImageBitmap();
		}
		const { innerWidth: windowWidth } = window;
		canvasSize = Math.min(canvasSize, Math.floor(windowWidth * 0.75));
		canvasContainerEl.style.width = `${canvasSize}px`;
		canvasContainerEl.style.height = `${canvasSize}px`;
		sketchEl.style.width = `${canvasSize}px`;
		sketchEl.style.height = `${canvasSize}px`;
		await tick();
		drawingBoard = new window.DrawingBoard.Board('board-container', {
			size: 10,
			controls: ['Color', { Size: { type: 'dropdown' } }, { DrawingMode: { filler: false } }],
			webStorage: false,
			enlargeYourContainer: true
		});
		canvas = drawingBoard.canvas;
		ctx = canvas.getContext('2d');
		canvas.ondragover = function (e) {
			e.preventDefault();
			return false;
		};
		addClearCanvasControl();
		addDownloadCanvasControl();
		makeLinksTargetBlank();
	});
</script>

<svelte:head>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/drawingboard.js/0.4.2/drawingboard.css"
		rel="stylesheet"
	/>
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/drawingboard.js/0.4.2/drawingboard.min.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.contentWindow.min.js"></script>
</svelte:head>

<svelte:window on:drop|preventDefault|stopPropagation={handleDrop} on:paste={handlePaste} />

<div class="flex flex-wrap gap-x-4 gap-y-2 justify-center my-8">
	<canvas
		class="border-[1.2px] desktop:mt-[34px] {!isShowSketch ? 'hidden' : ''}"
		bind:this={sketchEl}
	/>
	<div class="flex flex-col items-center {isLoading ? 'pointer-events-none' : ''}">
		<div id="board-container" bind:this={canvasContainerEl} />
		<div>
			<div class="flex gap-x-2 mt-3 items-center justify-center {isLoading ? 'animate-pulse' : ''}">
				<input
					type="text"
					class="border-2 py-1"
					placeholder="Add prompt"
					maxlength="200"
					on:keydown={onKeyDown}
					bind:value={txt}
				/>
				<button
					on:click={submitRequest}
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4"
				>
					diffuse the f rest
				</button>
			</div>
			<div class="mt-4">
				<label class="inline border py-1 px-1.5 bg-slate-200 cursor-pointer">
					<input
						accept="image/*"
						bind:this={fileInput}
						on:change={onfImgUpload}
						style="display: none;"
						type="file"
					/>
					upload img
				</label>
				<p class="hidden desktop:inline mt-2 opacity-50">
					pro tip: upload img by dropping on the canvas
				</p>
			</div>
		</div>
	</div>
</div>

<article class="prose-sm px-4 md:px-12 lg:px-56 mb-8">

	<div class="text-center">

		Stable Diffusion model by [CompVis](https://huggingface.co/CompVis) and [Stability AI](https://huggingface.co/stabilityai) - Demo by 🤗 Hugging Face
		
		Powered by [🤗 Diffusers: State-of-the-art diffusion models for image and audio generation in PyTorch](https://github.com/huggingface/diffusers). Based on [notebook by @psuraj28](https://twitter.com/psuraj28/status/1562039265126670339)
		
		Check out [Stable Diffusion Gradio demo](https://huggingface.co/spaces/stabilityai/stable-diffusion)
	</div>

### LICENSE
The model is licensed with a [CreativeML Open RAIL-M](https://huggingface.co/spaces/CompVis/stable-diffusion-license) license. The authors claim no rights on the outputs you generate, you are free to use them and are accountable for their use which must not go against the provisions set in this license. The license forbids you from sharing any content that violates any laws, produce any harm to a person, disseminate any personal information that would be meant for harm, spread misinformation and target vulnerable groups. For the full list of restrictions please [read the license](https://huggingface.co/spaces/CompVis/stable-diffusion-license)

### Biases and content acknowledgment
Despite how impressive being able to turn text into image is, beware to the fact that this model may output content that reinforces or exacerbates societal biases, as well as realistic faces, pornography and violence. The model was trained on the [LAION-5B dataset](https://laion.ai/blog/laion-5b/), which scraped non-curated image-text-pairs from the internet (the exception being the removal of illegal content) and is meant for research purposes. You can read more in the [model card](https://huggingface.co/CompVis/stable-diffusion-v1-4)
</article>


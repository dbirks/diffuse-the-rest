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

	const animImageDuration = 500 as const;
	const animNoiseDuration = 3000 as const;
	let canvasSize = 400;
	let canvasContainerEl: HTMLDivElement;
	let fileInput: HTMLInputElement;
	let sketchEl: HTMLCanvasElement;
	let isShowSketch = false;

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

		isLoading = true;
		isShowSketch = false;
		copySketch();

		// start noise animation
		noiseTs = performance.now();
		drawNoise();

		const { imgFile, imgBitmap: initialSketchBitmap } = await getCanvasSnapshot(canvas);
		const form = new FormData();
		form.append('prompt', txt);
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

			const imgEls = (await Promise.all(
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

			isLoading = false;

			if (interval) {
				clearInterval(interval);
			}

			isShowSketch = true;
			let i = 0;
			imageTs = performance.now();
			drawImage(imgEls[i % imgEls.length]);
			drawNextImage = () => {
				if (interval) {
					clearInterval(interval);
				}
				imageTs = performance.now();
				i = i + 1;
				drawImage(imgEls[i % imgEls.length]);
			};
			interval = setInterval(() => {
				i = i + 1;
				imageTs = performance.now();
				drawImage(imgEls[i % imgEls.length]);
			}, 2500);

			if (!isOutputControlAdded) {
				addOutputControls();
			}
		} catch (err) {
			console.error(err);
			alert('Error happened, queue might be full. Please try again in a bit :)');
		}
	}

	function addOutputControls() {
		const div = document.createElement('div');
		div.className = 'drawing-board-control';

		const btn = document.createElement('button');
		btn.innerHTML = '⏯';
		btn.onclick = drawNextImage;
		div.append(btn);

		const controlsEl = document.querySelector('.drawing-board-controls');
		if (controlsEl) {
			controlsEl.appendChild(div);
			isOutputControlAdded = true;
			canvasContainerEl.onclick = () => {
				if (interval) {
					clearInterval(interval);
				}
			};
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

	onMount(async () => {
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
			<div class="flex gap-x-2 mt-4 items-center justify-center {isLoading ? 'animate-pulse' : ''}">
				<input type="text" class="border-2 " placeholder="Add prompt" bind:value={txt} />
				<button
					on:click={submitRequest}
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
				>
					diffuse the f rest
				</button>
			</div>
			<p class="no-hover:hidden mt-2 opacity-50">pro tip: upload img by pasting OR dropping on the canvas</p>
			<div class="mt-1">
				<label class="with-hover:hidden border py-1 px-1.5 bg-slate-200 cursor-pointer">
					<input
						accept="image/*"
						bind:this={fileInput}
						on:change={onfImgUpload}
						style="display: none;"
						type="file"
					/>
					upload img
				</label>
			</div>
		</div>
	</div>
</div>

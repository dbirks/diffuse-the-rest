<script lang="ts">
	import { onMount, tick } from 'svelte';

	let txt = '';
	let isLoading = false;
	let isOutputControlAdded = false;
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let noiseTs: DOMHighResTimeStamp;
	let imageTs: DOMHighResTimeStamp;
	let drawNextImage: () => void;
	let interval: ReturnType<typeof setInterval>;

	const animImageDuration = 500 as const;
	const animNoiseDuration = 3000 as const;
	let canvasSize = 400;
	let containerEl: HTMLDivElement;
	let canvasContainerEl: HTMLDivElement;
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

	onMount(async () => {
		const { innerWidth: windowWidth } = window;
		canvasSize = Math.min(canvasSize, Math.floor(windowWidth * 0.75));
		canvasContainerEl.style.width = `${canvasSize}px`;
		canvasContainerEl.style.height = `${canvasSize}px`;
		sketchEl.style.width = `${canvasSize}px`;
		sketchEl.style.height = `${canvasSize}px`;
		await tick();
		const drawingBoard = new window.DrawingBoard.Board('board-container', {
			size: 10,
			controls: ['Color', { Size: { type: 'dropdown' } }, { DrawingMode: { filler: false } }],
			droppable: true,
			webStorage: false,
			enlargeYourContainer: true
		});
		canvas = drawingBoard.canvas;
		ctx = canvas.getContext('2d');
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

<div bind:this={containerEl} class="flex flex-wrap gap-x-4 gap-y-2 justify-center my-8">
	<canvas class="border-2 {!isShowSketch ? 'hidden' : ''}" bind:this={sketchEl} />
	<div class="flex flex-col items-center {isLoading ? 'pointer-events-none' : ''}">
		<div id="board-container" bind:this={canvasContainerEl} />
		<div class="flex gap-x-2 mt-4 items-center justify-center {isLoading ? 'animate-pulse' : ''}">
			<input type="text" class="border-2 " placeholder="Add prompt" bind:value={txt} />
			<button
				on:click={submitRequest}
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
			>
				diffuse the f rest
			</button>
		</div>
		<p class="mt-2 opacity-50">pro tip: upload img by dropping on the canvas</p>
	</div>
</div>

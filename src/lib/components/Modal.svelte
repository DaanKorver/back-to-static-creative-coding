<script lang="ts">
	import { flipState, imageSrc, targetImage } from '$lib/state';

	let element: HTMLElement;

	flipState.subscribe((value) => {
		if (value.calculatedPos.scale) {
			const { x, y, scale } = value.calculatedPos;

			element.style.setProperty('--posX', `${x}px`);
			element.style.setProperty('--posY', `${y}px`);
			element.style.setProperty('--scale', `${scale}`);

			element.style.setProperty('visibility', 'visible');
			element.style.setProperty('opacity', '1');

			window.Lenis.stop();

			setTimeout(() => {
				element.querySelector('img')?.style.setProperty('transition', '300ms transform ease-out');
				setTimeout(() => {
					element.style.setProperty('--posX', `0px`);
					element.style.setProperty('--posY', `0px`);
					element.style.setProperty('--scale', `1`);
				}, 100);
			}, 50);
		}
	});

	function reset(e?: MouseEvent) {
		if (e?.target) {
			if (e.target !== e.currentTarget) return;
		}
		const { x, y, scale } = $flipState.calculatedPos;
		setTimeout(() => {
			element.style.setProperty('--posX', `${x}px`);
			element.style.setProperty('--posY', `${y}px`);
			element.style.setProperty('--scale', `${scale}`);
			setTimeout(() => {
				if ($targetImage) {
					($targetImage as HTMLElement).style.setProperty('opacity', '1');
				}
				element.querySelector('img')?.style.setProperty('transition', 'none');
				element.style.setProperty('opacity', '0');
				setTimeout(() => {
					element.style.setProperty('visibility', 'hidden');
					element.style.setProperty('--posX', `0px`);
					element.style.setProperty('--posY', `0px`);
					element.style.setProperty('--scale', `1`);
					window.Lenis.start();
				}, 350);
			}, 350);
		});
	}

	function escape(e: KeyboardEvent) {
		if (e.key !== 'Escape') return;
		reset();
	}
</script>

<svelte:window on:keydown={escape} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="modal" bind:this={element} on:click={reset}>
	<div>
		<img src={$imageSrc} alt="modal" />
	</div>
</div>

<style>
	.modal {
		position: fixed;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(10px);
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 10;
		top: 0;
		left: 0;
		visibility: hidden;
		opacity: 0;
		transition: 300ms opacity ease-out;
	}

	.modal div {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-size: 0;
	}

	.modal img {
		width: clamp(20rem, 50vw, 40rem);
		transform: translate(var(--posX), var(--posY)) scale(var(--scale));
		transform-origin: top left;
	}
</style>

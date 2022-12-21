<script lang="ts">
	import { cursorActive, flipState, imageSrc, targetImage } from '$lib/state';

	let element: HTMLElement;

	function onClick(e: MouseEvent) {
		const src = element.querySelector('img')?.src;
		if (!src) return;
		imageSrc.set(src);
		// Timeout because DOM change
		setTimeout(calc, 50);
		setTimeout(() => {
			targetImage.set(e.target);
			if (!e.target) return;
			(e.target as HTMLElement).style.setProperty('opacity', '0');
		}, 250);
	}

	function calc() {
		const initialPosition = element.getClientRects()[0];
		const desiredPosition = document.querySelector('.modal img')?.getClientRects()[0];

		if (!desiredPosition) return;
		const calculatedScale = initialPosition.width / desiredPosition?.width;
		const calculatedPosX = initialPosition.x - desiredPosition.x;
		const calculatedPosY = initialPosition.y - desiredPosition.y;

		const calculatedPos = {
			x: calculatedPosX,
			y: calculatedPosY,
			scale: calculatedScale
		};

		flipState.set({ calculatedPos });
	}

	function activeCursor() {
		cursorActive.set(true);
	}

	function defaultCursor() {
		cursorActive.set(false);
	}
</script>

<li bind:this={element} on:mouseenter={activeCursor} on:mouseleave={defaultCursor}>
	<button on:click={onClick}>
		<slot />
	</button>
</li>

<style>
	li {
		width: 100%;
	}

	button {
		outline: none;
		border: none;
		padding: 0;
		font-size: 0;
		background-color: transparent;
		cursor: pointer;
		transition: border 150ms ease-out;
	}

	button:focus-visible {
		border: 8px solid white;
	}
</style>

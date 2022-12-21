<script lang="ts">
	import { cursorActive } from '$lib/state';
	import { spring } from 'svelte/motion';

	let cursor: HTMLDivElement;

	const options = { damping: 0.35, stiffness: 0.1, precision: 0.001 };

	const posX = spring(-50, options);
	const posY = spring(-50, options);

	function handleMouseMove(e: MouseEvent) {
		posX.set(e.clientX - cursor.clientWidth / 2);
		posY.set(e.clientY - cursor.clientHeight / 2);
	}
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div
	class:active={$cursorActive}
	bind:this={cursor}
	style:--posX={`${$posX}px`}
	style:--posY={`${$posY}px`}
/>

<style>
	div {
		position: fixed;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background-color: rgba(255, 0, 255, 0.4);
		left: var(--posX);
		top: var(--posY);
		z-index: 999;
		pointer-events: none;
		transition: 150ms transform ease-out;
	}

	.active {
		transform: scale(1.3);
	}
</style>

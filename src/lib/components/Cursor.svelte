<script lang="ts">
	import { spring } from 'svelte/motion';

	let cursor: HTMLDivElement;

	// const options = {damping: }

	const posX = spring(-50, { damping: 0.35, stiffness: 0.1, precision: 0.001 });
	const posY = spring(-50);

	function handleMouseMove(e: MouseEvent) {
		posX.set(e.clientX - cursor.clientWidth / 2);
		posY.set(e.clientY - cursor.clientHeight / 2);
	}
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div bind:this={cursor} style:--posX={`${$posX}px`} style:--posY={`${$posY}px`} />

<style>
	div {
		position: absolute;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background-color: rgba(0, 0, 0, 0.25);
		left: var(--posX);
		top: var(--posY);
	}
</style>

<script lang="ts">
	import { onDestroy } from 'svelte';
	import WavyText from './WavyText.svelte';

	let visible = false;
	let finished = false;
	let shouldRender = true;
	const timeout = setTimeout(() => {
		visible = !visible;
		setTimeout(() => {
			finished = true;
			setTimeout(() => {
				shouldRender = false;
				window.Lenis.start();
			}, 650);
		}, 1200);
	}, 1600);

	onDestroy(() => {
		clearTimeout(timeout);
	});
</script>

{#if shouldRender}
	<div class:show={finished}>
		<WavyText>Creative Coding</WavyText>
		<p class:visible>By Daan Korver</p>
	</div>
{/if}

<style>
	div {
		background-color: #0d0d0d;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: clamp(1.2rem, 5vw, 3rem);
		transition: 600ms clip-path cubic-bezier(0.7, 0, 0.84, 0);
		clip-path: inset(0 0 0 0);
		z-index: 99;
	}

	div.show {
		clip-path: inset(100% 0 0 0);
	}

	p {
		text-transform: uppercase;
		font-weight: 400;
		font-size: 1rem;
		opacity: 0;
		transition: 300ms opacity ease-in;
	}

	p.visible {
		opacity: 1;
	}
</style>

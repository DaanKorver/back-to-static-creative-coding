<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	export let color = '#000';

	let windowHeight: number;
	let circleEl: SVGCircleElement;

	$: scrollHeight = browser ? document.body.scrollHeight - windowHeight : 0;
	$: strokeDash = circleEl ? circleEl.getTotalLength() + 1 : 0;

	onMount(() => {
		const length = circleEl.getTotalLength();
		circleEl.style.setProperty('--dash', `${Math.ceil(length) + 1}`);
		circleEl.style.setProperty('--offset', `${Math.ceil(length) + 1}`);
	});

	$: onScroll = () => {
		const scroll = (window.scrollY + 1) / scrollHeight;
		const offset = strokeDash - strokeDash * scroll + 0.5;
		console.log(scroll);

		circleEl.style.setProperty('--offset', `${offset}`);
	};
</script>

<svelte:window on:scroll={onScroll} bind:innerHeight={windowHeight} />

<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
	<circle
		bind:this={circleEl}
		cx="25"
		cy="25"
		r="20"
		fill="transparent"
		stroke={color}
		stroke-width="3px"
	/>
</svg>

<style>
	svg {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		width: 4rem;
	}

	svg > circle {
		stroke-dasharray: var(--dash);
		stroke-dashoffset: calc(var(--offset));
	}

	section {
		min-height: 100vh;
	}
</style>

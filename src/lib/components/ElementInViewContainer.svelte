<script lang="ts">
	import { onMount } from 'svelte';

	let element: HTMLDivElement;
	export let isVisible = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				const container = entries[0];
				//@ts-ignore
				if (container.isVisible) isVisible = true;
			},
			//@ts-ignore
			{ threshold: 0, trackVisibility: true, delay: 100 }
		);

		observer.observe(element);
	});
</script>

<div bind:this={element}>
	<slot />
</div>

<style>
	div {
		width: 100%;
	}
</style>

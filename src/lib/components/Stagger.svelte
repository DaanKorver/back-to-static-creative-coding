<script lang="ts">
	import { onMount } from 'svelte';

	let element: HTMLDivElement;
	export let visible: boolean = false;

	export let staggerDuration = 150;

	onMount(() => {
		[...element.children].forEach((child, i) => {
			(child as HTMLElement).style.setProperty('--delay', i * staggerDuration + 'ms');
		});
	});
</script>

<div class="container" bind:this={element} class:visible {...$$restProps}>
	<slot />
</div>

<style>
	.container {
		position: relative;
	}

	.container > :global(*) {
		transform: translateY(20%) scale(1);
		opacity: 0;
		transition: 400ms transform ease-out var(--delay), opacity 400ms ease-out var(--delay);
	}

	.container.visible > :global(*) {
		transform: translateY(0) scale(1);
		opacity: 1;
	}
</style>

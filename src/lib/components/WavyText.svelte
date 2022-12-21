<script lang="ts">
	import { onMount } from 'svelte';

	let element: HTMLSpanElement;
	let shouldRender: boolean = true;
	let letters: string[] = [];
	export let duration = 600;

	const options = {
		root: null,
		rootMargin: '0px 0px -75px 0px',
		threshold: 1
	};

	onMount(() => {
		element.style.opacity = '1';
		// Observer
		const observer = new IntersectionObserver((entries, observer) => {
			const wavyText = entries[0];
			if (wavyText.isIntersecting) element.classList.add('visible');
		}, options);

		observer.observe(element);

		const text = element.innerText;
		element.innerHTML = '';
		const letters = text.split('');

		letters.forEach((letter, index) => {
			element.insertAdjacentHTML(
				'beforeend',
				`
		  <span style="--delay: ${(duration / letters.length) * index}ms">${
					letter === ' ' ? '&nbsp;' : letter
				}</span>
		  `
			);
		});
	});
</script>

<span class="container" bind:this={element}>
	{#if shouldRender}
		<slot />
	{/if}
</span>

<style>
	span {
		overflow: hidden;

		opacity: 0;
		font-family: 'Noto Sans', sans-serif;
	}

	:global(.container.visible > span) {
		transform: translateY(0%);
		opacity: 1;
	}

	:global(.container > span) {
		font-size: inherit;
		transform: translateY(75%);
		display: inline-block;
		transition: transform cubic-bezier(0.34, 1.56, 0.64, 1) 450ms, opacity ease-out 200ms;
		transition-delay: var(--delay);
		opacity: 0;
		text-transform: uppercase;
	}
</style>

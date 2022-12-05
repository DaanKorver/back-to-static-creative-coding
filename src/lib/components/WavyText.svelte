<script lang="ts">
	import { onMount } from 'svelte';

	let element: HTMLDivElement;
	let shouldRender: boolean = true;
	let letters: string[] = [];

	const options = {
		root: null,
		rootMargin: '0px 0px -75px 0px',
		threshold: 1
	};

	onMount(() => {
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
		  <span style="--delay: ${200 + index * 40}ms">${letter === ' ' ? '&nbsp;' : letter}</span>
		  `
			);
		});
	});
</script>

<div bind:this={element}>
	{#if shouldRender}
		<slot />
	{/if}
</div>

<style>
	div {
		overflow: hidden;
		font-size: 0;
		font-weight: bold;
	}

	:global(div.visible span) {
		transform: translateY(0%);
		opacity: 1;
	}

	:global(span) {
		font-size: inherit;
		transform: translateY(75%);
		display: inline-block;
		font-size: 2rem;
		transition: transform cubic-bezier(0.34, 1.56, 0.64, 1) 450ms, opacity ease-out 200ms;
		transition-delay: var(--delay);
		opacity: 0;
	}
</style>

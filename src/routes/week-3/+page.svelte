<script>
	import Galery from '$lib/components/Galery.svelte';
	import GaleryItem from '$lib/components/GaleryItem.svelte';
	import ScrollIndicator from '$lib/components/ScrollIndicator.svelte';
</script>

<ScrollIndicator />

<div>
	<h1>Cool cat gallery</h1>
	<Galery>
		{#each Array.from({ length: 20 }) as _, i}
			<GaleryItem>
				<img src="https://placekitten.com/500/{500 + i}" alt="cat" />
			</GaleryItem>
		{/each}
	</Galery>
</div>

<style>
	div {
		max-width: 85rem;
		margin: 0 auto;
		padding: 3rem;
	}
	h1 {
		color: white;
		text-transform: uppercase;
		font-size: clamp(1.5rem, 8vw, 3rem);
		letter-spacing: 6px;
		font-family: 'Noto Sans', sans-serif;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>

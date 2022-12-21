<script>
	import BizarreRetroLineArtImage from '$lib/components/BizarreRetroLineArtImage.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		window.Lenis.start();
	});
</script>

<div>
	<img src="https://placebear.com/500/300" alt="bear" />

	<BizarreRetroLineArtImage>
		<img src="https://placebear.com/500/300" alt="bear" />
	</BizarreRetroLineArtImage>
	<!-- <BizarreRetroLineArtImage blackAndWhite>
		<img src="https://placekitten.com/500/300" alt="bear" />
	</BizarreRetroLineArtImage> -->
</div>

<style>
	div {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
</style>

<script>
	import WavyText from '$lib/components/WavyText.svelte';
</script>

<div class="box">
	<WavyText>This is some wavy text</WavyText>
</div>
<div class="box">
	<WavyText>This is some more wavy text</WavyText>
</div>

<style>
	.box {
		height: 100vh;
		padding: 2rem;
	}

	.box:nth-child(odd) {
		background-color: palegoldenrod;
	}
</style>

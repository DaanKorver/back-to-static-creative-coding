<script>
	import Lenis from '$lib/components/Lenis.svelte';
	import '$lib/global.css';
</script>

<Lenis />
<header>
	<nav>
		<a href="/">week 1</a>
		<a href="/week-2">week 2 </a>
		<a href="/week-3">week 3 </a>
	</nav>
</header>
<main>
	<slot />
</main>
<footer>
	<p>&copy; Made by Daan Korver</p>
</footer>

<style>
	header a {
		color: #000;
	}
	footer {
		color: white;
		max-width: 85rem;
		margin: 0 auto;
		padding: 1rem 3rem;
	}
</style>

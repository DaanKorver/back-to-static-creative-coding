<script lang="ts">
	import ElementInViewContainer from './ElementInViewContainer.svelte';
	import Modal from './Modal.svelte';
	import Stagger from './Stagger.svelte';
	let visible = false;
	let list: HTMLUListElement;
</script>

<ElementInViewContainer bind:isVisible={visible}>
	<div>
		<ul bind:this={list}>
			<Stagger {visible}>
				<slot />
			</Stagger>
		</ul>
	</div>
</ElementInViewContainer>
<Modal />

<style>
	ul {
		padding: 0;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	ul > :global(*) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		padding: 0;
		flex-direction: row;
		gap: 2rem;
		margin: 0;
		width: 100%;
	}

	@media (max-width: 80rem) {
		ul > :global(*) {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 60rem) {
		div {
			padding: 1rem;
		}
		ul > :global(*) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 40rem) {
		ul > :global(*) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>

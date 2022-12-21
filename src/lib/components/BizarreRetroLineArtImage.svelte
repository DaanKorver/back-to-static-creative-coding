<script>
	export let blackAndWhite = false;
</script>

<div class="wrapper" style:filter={blackAndWhite ? 'grayscale(100%)' : ''}>
	<div class="eyes">
		<span /><span />
	</div>
	<div class="arms">
		<span />
		<span />
	</div>
	<div class="body">
		<div>
			<slot />
		</div>
	</div>
	<div class="legs">
		<span />
		<span />
	</div>
</div>

<style>
	.eyes {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
		left: 50%;
		transform: translate(-50%, -40%);
		z-index: 2;
	}

	.eyes > span {
		display: block;
		width: 3rem;
		height: 7rem;
		background-color: black;
		border-radius: 7rem;
		position: relative;
	}

	.eyes > span::before {
		--w: 1rem;
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border: 0.6rem solid transparent;
		border-right: var(--w) solid burlywood;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
	}

	.wrapper {
		position: relative;
		margin: 2rem 5rem;
		filter: grayscale(20%) sepia(0);
	}

	.body {
		border-style: outset;
		border: 1.75rem solid burlywood;
		background-color: burlywood;
		border-radius: 1rem;
		font-size: 0;
		z-index: 1;
		position: relative;
		box-shadow: 0px 0px 0px 5px black;
	}

	.body::after {
		content: '';
		position: absolute;
		z-index: 1;
		border: 5px solid black;
		width: calc(100% - 5px);
		height: calc(100% - 5px);
		left: 0;
		top: 0;
		border-radius: 2rem;
	}

	.body > div {
		border-radius: 2rem;
		overflow: hidden;
		filter: grayscale(50%) sepia(1);
	}

	.body > div::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		mix-blend-mode: multiply;
		background-color: #f1ef98;
		opacity: 0.8;
	}

	.legs {
		width: 50%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.legs > span {
		display: block;
		width: 0.5rem;
		height: 6rem;
		background-color: black;
		position: relative;
	}

	.legs > span::before {
		content: '';
		position: absolute;
		width: 4rem;
		height: 2rem;
		bottom: 0;
		background-color: saddlebrown;
		border: 5px solid black;
	}

	.legs > span:first-child::before {
		right: -0.35rem;
		border-top-left-radius: 2rem;
		border-bottom-left-radius: 2rem;
		border-bottom-right-radius: 2rem;
		transform: rotate(-15deg);
		bottom: -0.8rem;
	}

	.legs > span:last-child::before {
		left: -0.3rem;
		border-top-right-radius: 2rem;
		border-bottom-right-radius: 2rem;
		border-bottom-left-radius: 2rem;
		transform: rotate(15deg);
		bottom: -0.8rem;
	}

	.arms {
		--armW: 2rem;
		position: absolute;
		left: 50%;
		top: 35%;
		transform: translateX(-50%) translateY(-50%);
		width: calc(100% + (var(--armW) * 2));
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 3;
	}

	.arms > span {
		display: block;
		height: 5rem;
		width: 2rem;
		background-color: burlywood;
		z-index: 2;
		position: relative;
		border-radius: 3rem;
		border: 5px solid transparent;
	}

	.arms > span:first-child {
		transform: translateX(16%);
		border-left-color: black;
		border-bottom-color: black;
		border-top-color: black;
	}

	.arms > span:last-child {
		transform: translateX(-16%);
		border-right-color: black;
		border-bottom-color: black;
		border-top-color: black;
	}

	.arms > span::before {
		content: '';
		position: absolute;
		width: 6rem;
		height: 6rem;
		border-radius: 50%;
		border: 5px solid transparent;
		top: 50%;
		transform: translateY(-50%);
	}

	.arms > span:first-child:before {
		right: -5px;
		top: 115%;
		border-left: 5px solid black;
		border-bottom: 5px solid black;
		transform: translateY(-50%) translateX(20%) rotate(45deg);
	}

	.arms > span:last-child:before {
		right: 5px;
		top: 115%;
		border-right: 5px solid black;
		border-top: 5px solid black;
		transform: translateY(-50%) translateX(55%) rotate(45deg);
	}

	.arms > span::after {
		content: '';
		position: absolute;
		width: 4rem;
		height: 4rem;
		background-color: white;
		z-index: 10;
		border-radius: 50%;
		bottom: -6rem;
		border: 5px solid black;
	}

	.arms > span:first-child:after {
		right: -2rem;
	}
	.arms > span:last-child:after {
		right: -1rem;
	}
</style>

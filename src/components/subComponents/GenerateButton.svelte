<script>
	export let handleGenerate;
</script>

<div class="btn_div">
	<button class="btn" on:click={handleGenerate}>Generate {'->'}</button>
</div>

<style>
	.btn_div {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 60px;
	}
	.btn_div button {
		width: 100%;
		height: 100%;
		border-radius: 5px;
		border: none;
		outline: none;
		color: var(--theme-color);
		border: 2px solid var(--theme-color);
		font-size: 1.2rem;
		text-transform: uppercase;
		cursor: pointer;
	}
	.btn_div button:hover {
		background-color: var(--theme-color);
		color: black;
	}
</style>

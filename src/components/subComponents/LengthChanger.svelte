<script>
	export let length;
	export let handleLengthChange;
</script>

<div>
	<div class="charl">
		<label for="length">Character Length</label>
		<input class="length_val" bind:value={length} />
	</div>
	<input
		class="slider"
		type="range"
		id="length"
		value="8"
		min="8"
		max="25"
		on:input={handleLengthChange}
	/>
</div>

<style>
	.charl {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.slider {
		width: 100%;
		margin: 20px 0px;
	}
	.slider::-webkit-slider-runnable-track {
		height: 5px;
		border-radius: 5px;
		background-color: var(--theme-color);
	}
	.slider::-webkit-slider-thumb {
		transform: translateY(-40%);
	}
	.length_val {
		all: unset;
		width: 25px;
		text-align: center;
	}
</style>

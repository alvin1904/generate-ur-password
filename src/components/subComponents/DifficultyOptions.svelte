<script>
	export let options;
	export let handleChecked;
</script>

<div class="options">
	{#each options as option}
		<div
			class="option"
			on:click={() => handleChecked(option)}
			on:keydown={() => handleChecked(option)}
		>
			<span class={`checkmark ${option.checked ? 'checked' : ''}`} />
			<span>{option.label}</span>
		</div>
	{/each}
</div>

<style>
	.options {
		display: grid;
		grid-auto-flow: row;
		gap: 0.5rem;
	}
	.option {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: 20px auto;
		gap: 0.75rem;
		align-items: center;
		cursor: pointer;
	}
	.checkmark {
		height: 20px;
		width: 20px;
		border-radius: 20%;
		border: 2px solid var(--theme-color);
		margin-right: 10px;
	}
	.checked {
		background-color: var(--theme-color);
		border: 2px solid white;
	}
</style>

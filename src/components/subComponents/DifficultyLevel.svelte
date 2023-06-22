<script>
	export let level;
	const colors = ['red', 'orange', 'yellow', 'var(--theme-color)'];
	const status = ['VERY WEAK', 'WEAK', 'DECENT', 'GOOD'];
</script>

<div class="inside_box" style={`--clr: ${colors[level - 1]}`}>
	<h5>PASSWORD DIFFICULTY: {status[level - 1]}</h5>
	<div class="level_bar">
		<span class={`level ${level >= 1 ? 'colorIt' : ''}`} />
		<span class={`level ${level >= 2 ? 'colorIt' : ''}`} />
		<span class={`level ${level >= 3 ? 'colorIt' : ''}`} />
		<span class={`level ${level >= 4 ? 'colorIt' : ''}`} />
	</div>
</div>

<style>
	.inside_box {
		display: grid;
		grid-auto-flow: column;
		gap: 0.5rem;
		align-items: center;
		justify-content: space-between;
	}
	.inside_box h5 {
		font-size: 1.1rem;
	}
	.level_bar {
		display: grid;
		grid-auto-flow: column;
		width: 100px;
		gap: 5px;
		margin-right: 20px;
	}
	.level {
		height: 35px;
		width: 25px;
		border-radius: 5px;
		border: 2px solid var(--theme-color);
	}
	.colorIt {
		background-color: var(--clr);
	}
</style>

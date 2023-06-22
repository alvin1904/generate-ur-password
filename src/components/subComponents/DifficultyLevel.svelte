<script>
	export let level;
	console.log(level);
</script>

<div class="inside_box">
	<h5>STRONG</h5>
	<div class="level_bar">
		<span class="level" />
		<span class="level" />
		<span class="level" />
		<span class="level" />
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
</style>

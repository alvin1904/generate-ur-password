<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IoCopy from 'svelte-icons-pack/io/IoCopy';
	let options = {
		upper: 'Include UPPERCASE Letters',
		lower: 'Include lowercase Letters',
		number: 'Include Numbers',
		symbol: 'Include Symbols'
	};
	let length = 8;
	const handleLengthChange = (e) => {
		length = e.target.value;
	};
</script>

<main>
	<div class="heading">Password Generator</div>
	<div class="box display">
		<p class="password">56785678567675675</p>
		<span class="icon">
			<Icon class="icon" src={IoCopy} size="23" color="white" />
		</span>
	</div>
	<div class="box main_body">
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
				min="0"
				max="25"
				on:input={handleLengthChange}
			/>
		</div>
		<div class="options">
			{#each Object.entries(options) as [option]}
				<div class="option">
					<span class="checkmark checked" />
					<span>{options[option]}</span>
				</div>
			{/each}
		</div>
		<div class="inside_box">
			<h5>STRONG</h5>
			<div class="level_bar">
				<span class="level" />
				<span class="level" />
				<span class="level" />
				<span class="level" />
			</div>
		</div>
		<div class="btn_div">
			<button class="btn">Generate {'->'}</button>
		</div>
	</div>
</main>

<style>
	main {
		--theme-color: rgb(93, 255, 182);
		position: absolute;
		margin: auto;
		inset: 0;
		margin: auto;
		border-radius: 10px;
		height: 80%;
		width: 30%;
		background-color: rgb(10, 10, 10);
		color: aliceblue;
		padding: 5px;
		display: grid;
		grid-auto-flow: row;
		grid-template-rows: 60px 60px auto;
		gap: 0.75rem;
	}
	@media screen and (max-width: 1024px) {
		main {
			width: 50%;
		}
	}
	@media screen and (max-width: 768px) {
		main {
			width: 75%;
		}
	}
	@media screen and (max-width: 480px) {
		main {
			width: 85%;
		}
	}
	.heading,
	.display {
		height: 50px;
		width: 100%;
		border-radius: 5px;
	}
	.heading,
	.password {
		display: grid;
		align-items: center;
		text-align: center;
		font-size: 1.25rem;
	}
	.heading {
		text-transform: uppercase;
		font-size: 1.5rem;
		height: 80px;
	}
	.box {
		background-color: rgb(44, 41, 41);
		border-radius: 5px;
		padding: 30px;
	}
	.main_body {
		display: grid;
		grid-auto-flow: row;
		gap: 1.25rem;
	}
	.display,
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
  .icon{
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
  .icon:hover{
    background-color: var(--theme-color);
  }

</style>

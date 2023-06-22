<script>
	import DisplayArea from './subComponents/DisplayArea.svelte';
	import LengthChanger from './subComponents/LengthChanger.svelte';
	import DifficultyOptions from './subComponents/DifficultyOptions.svelte';
	import DifficultyLevel from './subComponents/DifficultyLevel.svelte';
	import GenerateButton from './subComponents/GenerateButton.svelte';

	let options = [
		{ id: 'upper', label: 'Include UPPERCASE Letters', checked: false },
		{ id: 'lower', label: 'Include lowercase Letters', checked: true },
		{ id: 'number', label: 'Include Numbers', checked: false },
		{ id: 'symbol', label: 'Include Symbols', checked: false }
	];
	let password = 'passwordilla';
	let length = 8;
	let level = 1;
	const getScore = () => {
		let score = 0;
		let res = options.map((option) => {
			return option.checked ? option.id : false;
		});
		score += res.includes('upper') ? 10 : 0;
		score += res.includes('lower') ? 10 : 0;
		score += res.includes('number') ? 10 : 0;
		score += res.includes('symbol') ? 10 : 0;
		if (length > 20) score += 40;
		else if (length > 15) score += 20;
		else if (length > 8) score += 10;
		return score > 10 ? (score <= 40 ? score : 40) : 10;
	};
	const handleLengthChange = (e) => {
		length = e.target.value;
		level = getScore() / 10;
	};
	function handleChecked(option) {
		options = options.map((opt) => {
			if (opt.id === option.id) {
				return { ...opt, checked: !opt.checked };
			}
			return opt;
		});
		level = getScore() / 10;
	}
	function handleGenerate() {
		console.log('generate');
	}
</script>

<main>
	<div class="heading">Password Generator</div>
	<DisplayArea {password} />
	<div class="box main_body">
		<LengthChanger {length} {handleLengthChange} />
		<DifficultyOptions {options} {handleChecked} />
		<DifficultyLevel {level} />
		<GenerateButton {handleGenerate} />
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
	.heading {
		height: 50px;
		width: 100%;
		border-radius: 5px;
	}
	.heading {
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
	.main_body {
		display: grid;
		grid-auto-flow: row;
		gap: 1.25rem;
	}
</style>

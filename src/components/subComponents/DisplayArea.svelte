<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IoCopy from 'svelte-icons-pack/io/IoCopy';
	export let password;
	const handleCopy = () => {
		navigator.clipboard.writeText(password);
		alert('Copied to clipboard')
	};
</script>

<div class="box display">
	<p class="password">{password}</p>
	<span class="icon" on:click={handleCopy} on:keydown={handleCopy}>
		<Icon src={IoCopy} size="23" color="white" />
	</span>
</div>

<style>
	.display {
		height: 50px;
		width: 100%;
		border-radius: 5px;
	}
	.password {
		display: grid;
		align-items: center;
		text-align: center;
		font-size: 1.25rem;
	}
	.display {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.icon {
		padding: 5px;
		border-radius: 5px;
		cursor: pointer;
	}
	.icon:hover {
		background-color: var(--theme-color);
	}
</style>

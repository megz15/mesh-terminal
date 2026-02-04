<script>
    import { envVars, toggleKeyboard, isRadioPlaying } from '$lib/system.svelte'
    import { commands } from '$lib/commands/allCommandsBarrel'
    import { page } from '$app/state'
    import { getTheme, setTheme } from '$lib/theme.svelte'

	let programName = $derived(page.url.pathname.split("/")[2])
</script>

<div id="top-bar" class="{getTheme().bg.topBar} rounded-lg border {getTheme().bg.topBarBorder} w-[98%] h-10 fixed top-2 left-1/2 translate-x-[-50%] flex items-center gap-2 pl-4 z-50">
	<span class="{getTheme().components.topBarText} max-sm:hidden">#!{envVars.SHELL}</span>
	<span class="{getTheme().text.secondary} max-sm:hidden">|</span>
	<span class="{getTheme().text.secondary}">{programName || envVars.TERM + " v" + envVars.VERSION}</span>
	<span class="{getTheme().text.secondary} max-md:hidden">|</span>
	<span class="{getTheme().components.topBarText} max-md:hidden">{programName ? "Ctrl + C to eXit" : "Loaded [" + Object.keys(commands).length + "] commands"}</span>
	{#if !programName}
		<div class="ml-auto pr-4 flex gap-2">
			<button
				type="button"
				onclick={() => {
					setTheme(getTheme().name === "light" ? "default" : "light");
				}}
				class="p-3 text-sm rounded-md {getTheme().components.keyboardBg} {getTheme().components.keyboardBorder} border {getTheme().text.primary} cursor-pointer"
				title="Toggle Theme"
			> {getTheme().name === "light" ? "🕶️" : "💡"}
			</button>
			<button
				type="button"
				onclick={() => location.reload()}
				class="p-3 text-sm rounded-md {getTheme().components.keyboardBg} {getTheme().components.keyboardBorder} border {getTheme().text.primary} cursor-pointer"
				title="Reload Mesh"
			>🔄</button>
			<button
				type="button"
				onclick={() => (isRadioPlaying.value = !isRadioPlaying.value)}
				class="p-3 text-sm rounded-md {getTheme().components.keyboardBg} {getTheme().components.keyboardBorder} border {getTheme().text.primary} cursor-pointer"
				title="{isRadioPlaying.value ? "Pause" : "Play"} Radio"
			>
				{isRadioPlaying.value ? "⏸️" : "▶️"}
			</button>
			<button
				type="button"
				onclick={() => (toggleKeyboard.value = !toggleKeyboard.value)}
				class="p-3 text-sm rounded-md {getTheme().components.keyboardBg} {getTheme().components.keyboardBorder} border {getTheme().text.primary} cursor-pointer"
			>
				Toggle Keyboard
			</button>
		</div>
	{/if}
</div>
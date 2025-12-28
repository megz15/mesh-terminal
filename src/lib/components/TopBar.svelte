<script>
    import { envVars } from '$lib/system.svelte';
    import { commands } from '$lib/commands/allCommandsBarrel';
    import { page } from '$app/state';
    import { getTheme } from '$lib/theme.svelte';

	let programName = page.url.pathname.split("/")[2];
</script>

<div id="top-bar" class="{getTheme().bg.topBar} rounded-lg border {getTheme().bg.topBarBorder} w-[98%] h-10 fixed top-2 left-1/2 translate-x-[-50%] flex items-center gap-2 pl-4 z-50">
	<span class="{getTheme().components.topBarText}">#!{envVars.SHELL}</span>
	<span class="{getTheme().text.secondary}">|</span>
	<span class="{getTheme().text.secondary}">{programName || envVars.TERM + " v" + envVars.VERSION}</span>
	<span class="{getTheme().text.secondary} max-sm:hidden">|</span>
	<span class="{getTheme().components.topBarText} max-sm:hidden">{programName ? "Ctrl + C to eXit" : "Loaded [" + Object.keys(commands).length + "] commands"}</span>
</div>
<script>
    import { envVars } from '$lib/system.svelte';
    import { commands } from '$lib/commands/allCommandsBarrel';
    import { page } from '$app/state';

	let programName = page.url.pathname.split("/")[2];
</script>

<div id="top-bar" class="bg-neutral-950 rounded-lg border-1 border-gray-500 w-[98%] h-10 fixed top-2 left-1/2 translate-x-[-50%] flex items-center gap-2 pl-4 z-50">
	<span class="text-gray-500">#!{envVars.SHELL}</span>
	<span class="text-gray-400">|</span>
	<span class="text-gray-400">{programName || envVars.TERM + " v" + envVars.VERSION}</span>
	<span class="text-gray-400 max-sm:hidden">|</span>
	<span class="text-gray-500 max-sm:hidden">{programName ? "Ctrl + C to eXit" : "Loaded [" + Object.keys(commands).length + "] commands"}</span>
</div>
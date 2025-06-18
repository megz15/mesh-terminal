<script lang="ts">
	import '../app.css';
	import { envVars } from '$lib/system.svelte';
	import { commands } from '$lib/commands/allCommandsBarrel';
	
	let { children } = $props();
</script>

<div id="top-bar" class="bg-gray-950 rounded-lg border-1 border-gray-500 w-[98%] h-10 fixed top-2 left-1/2 translate-x-[-50%] flex items-center gap-2 pl-4">
	<span class="text-gray-500">#!{envVars.SHELL}</span>
	<span class="text-gray-400">|</span>
	<span class="text-gray-400">{envVars.TERM} v{envVars.VERSION}</span>
	<span class="text-gray-400 max-sm:hidden">|</span>
	<span class="text-gray-500 max-sm:hidden">~</span>
	<span class="text-gray-500 max-sm:hidden">{envVars.USER}@{envVars.HOSTNAME}</span>
	<span class="text-gray-400 max-md:hidden">|</span>
	<span class="text-gray-500 max-md:hidden">Loaded [ {Object.keys(commands).length} ] commands</span>
</div>

{@render children()}

<!-- todo: small screen optimization: 
 	virtual/native onscreen keyboard
	output wrap/overflow
	landscape
-->
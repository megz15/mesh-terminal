<script lang="ts">
	import '../app.css';
	import TopBar from '$lib/components/TopBar.svelte';
    import Keyboard from '$lib/components/Keyboard.svelte';
	import { toggleKeyboard } from '$lib/system.svelte';
	
	let { children } = $props();
</script>

<TopBar />

{@render children()}

{#if toggleKeyboard.value}
	<Keyboard />
{/if}

<div class="flex justify-end">
    <button
		onclick={() => toggleKeyboard.value = !toggleKeyboard.value}
		class="px-3 py-2 text-sm bg-neutral-950 border border-gray-400 rounded-lg text-gray-200 cursor-pointer fixed bottom-4 right-4"
	>
        Toggle Keyboard
    </button>
</div>
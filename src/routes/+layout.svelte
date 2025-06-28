<script lang="ts">
	import "../app.css";
	import TopBar from "$lib/components/TopBar.svelte";
	import Keyboard from "$lib/components/Keyboard.svelte";
	import { programs, toggleKeyboard } from "$lib/system.svelte";
	import { page } from "$app/state";
	import { afterNavigate, goto } from "$app/navigation";

	let { children } = $props();

	function keyboardInterruptListener(e: KeyboardEvent) {
		if (e.key == "c" && e.ctrlKey) {
			goto("/");
		}
	}

	afterNavigate(() => {
		if (programs.includes(page.url.pathname.split("/")[2])) {
			window.addEventListener("keydown", keyboardInterruptListener);
		}
	});
</script>

<TopBar />

{@render children()}

{#if toggleKeyboard.value}
	<Keyboard />
{/if}

{#if programs.includes(page.url.pathname.split("/")[2])}
	<div class="fixed bottom-4 left-4 text-yellow-400 text-lg z-[-1]">
		Press 'Ctrl + C'<br />to eXit program
	</div>
{/if}

<div class="flex justify-end">
	<button
		onclick={() => (toggleKeyboard.value = !toggleKeyboard.value)}
		class="px-3 py-2 text-sm bg-neutral-950 border border-gray-400 rounded-lg text-gray-200 cursor-pointer fixed bottom-4 right-4"
	>
		Toggle Keyboard
	</button>
</div>

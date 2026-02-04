<script lang="ts">
	import "../app.css";
	import TopBar from "$lib/components/TopBar.svelte";
	import Keyboard from "$lib/components/Keyboard.svelte";
	import { programs, toggleKeyboard, isRadioPlaying, radioStreamUrl } from "$lib/system.svelte";
	import { page } from "$app/state";
	import { afterNavigate, goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { currentTheme, getTheme } from "$lib/theme.svelte";

	const theme = getTheme();
	let { children } = $props();

	let audioElement: HTMLAudioElement;

	let bodyClasses = $derived(
        `font-[Jetbrains_Mono] ${currentTheme.value.bg.primary} ${currentTheme.value.text.primary} m-5 mt-14`
    );

	onMount(() => {
        document.body.className = bodyClasses
    });

    $effect(() => {
        document.body.className = bodyClasses
    });

	function keyboardInterruptListener(e: KeyboardEvent) {
		if (e.key == "c" && e.ctrlKey) {
			toggleKeyboard.value = false;
			goto("/mesh-terminal/");
		}
	}

	afterNavigate(() => {
		if (programs.includes(page.url.pathname.split("/")[2])) {
			window.addEventListener("keydown", keyboardInterruptListener);
		}
	});

	$effect(() => {
		if (audioElement) {
			if (isRadioPlaying.value) {
				audioElement.play().catch(err => console.error("Radio playback failed:", err));
			} else {
				audioElement.pause();
			}
		}
	});
</script>

<TopBar />

{@render children()}

{#if toggleKeyboard.value}
	<Keyboard />
{/if}

{#if programs.includes(page.url.pathname.split("/")[2])}
	<div class="fixed bottom-5 right-5 {theme.text.warning} text-sm z-10 p-2 {theme.bg.topBar}/90">
		Press 'Ctrl + C'<br />or Go Up 1 page<br />to eXit program
	</div>
{/if}

<audio bind:this={audioElement} src={radioStreamUrl} preload="auto"></audio>

<style>
	:global(body) {
		transition: background-color 1s;
	}
</style>
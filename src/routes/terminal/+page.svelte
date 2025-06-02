<script lang="ts">
    import { onMount } from "svelte";

    let cmdInput: HTMLSpanElement;

    onMount(() => {
        window.addEventListener('keydown', (e) => {
            let cmd = cmdInput.textContent!;
            if (e.key.length == 1) {
                cmdInput.textContent += e.key;
            } else if (e.key == 'Backspace') {
                cmdInput.textContent = cmd.slice(0, -1);
            }
        })
    });

    let promptText = 'oh no march is in ~ $';
</script>

<div class="input">
    <span class="prompt">{promptText}</span>
    <span class="cmd-input break-all" bind:this={cmdInput} ></span>
</div>
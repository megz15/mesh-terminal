import { commandHistory, commandHistoryIndex } from "$lib/system.svelte";

export default function clearhist(): string {
    commandHistory.value = [];
    commandHistoryIndex.value = -1;
    return "Sneaky, going incognito...";
}
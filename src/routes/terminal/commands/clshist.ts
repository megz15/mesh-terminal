import { commandHistory, commandHistoryIndex } from "../system.svelte";

export default function clearhist(): string {
    commandHistory.value = [];
    commandHistoryIndex.value = -1;
    return "Sneaky. Going incognito, no traces left behind.";
}
import { commandHistory, HISTSIZE } from "$lib/system.svelte"

export default function hist(): string {
    return `Last ${commandHistory.value.length} commands (max ${HISTSIZE}):
${commandHistory.value.join("\n")}`;
}
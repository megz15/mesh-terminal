import { workingDirectoryPath } from "$lib/system.svelte";

export default function pwd(): string {
    return workingDirectoryPath.value;
}
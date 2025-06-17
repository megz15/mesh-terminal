import { userName } from "$lib/system.svelte";

export default function whoami(): string {
    return userName;
}
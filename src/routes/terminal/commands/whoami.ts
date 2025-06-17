import { userName } from "../system.svelte";

export default function whoami(): string {
    return userName;
}
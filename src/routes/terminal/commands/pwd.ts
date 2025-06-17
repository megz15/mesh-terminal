import { workingDirectoryPath } from "../system.svelte";

export default function pwd(): string {
    return workingDirectoryPath["value"];
}
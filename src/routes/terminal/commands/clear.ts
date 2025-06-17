import { cmdInputText } from "../system.svelte";

export default function clear(): string {
    const outputHistory = document.getElementById("outputHistory");
    outputHistory!.innerHTML = "";
    cmdInputText["value"] = "";
    return "";
}
import hal from "$lib/assets/hal.webp";
import { getTheme } from "$lib/theme.svelte"

export default function sudo(args: string[]): string {
    const theme = getTheme();
    if (args.length == 0) {
        return "sudo: no command specified";
    } else {
        return `<img src='${hal}' alt='HAL 9000' class="w-24 h-24 m-2" />
    <span class="${theme.text.error}">"I'm sorry, Dave. I'm afraid I can't do that."</span>
    \n`;
    }
}
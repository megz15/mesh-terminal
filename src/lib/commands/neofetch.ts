import { getTheme } from "$lib/theme.svelte"

export default function neofetch(): string {
    const theme = getTheme();
    return `<span class="${theme.text.error}">Neofetch has been deprecated.</span>
Please use 'banner' instead.`;
}
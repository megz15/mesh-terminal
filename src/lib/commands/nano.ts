import { getTheme } from "$lib/theme.svelte"

export default function nano(): string {
    const theme = getTheme();
    return `<span class="${theme.text.error}">User is too advanced for nano.</span>\n >> Please use 'vim' instead.`;
}
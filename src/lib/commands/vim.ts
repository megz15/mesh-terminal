import { getTheme } from "$lib/theme.svelte"

export default function vim(): string {
    const theme = getTheme();
    return `<span class="${theme.text.error}">User will not be able to exit vim.</span>\n >> Please use 'emacs' instead.`;
}
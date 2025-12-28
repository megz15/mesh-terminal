import { getTheme } from "$lib/theme.svelte"

export default function emacs(): string {
    const theme = getTheme()
    return `<span class="${theme.text.error}">Too many packages NOT ENOUGH RAM</span>\n >> Please use 'nano' instead.`
}
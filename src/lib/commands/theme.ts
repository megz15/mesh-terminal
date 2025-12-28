import { setTheme, getAvailableThemes, getTheme } from "$lib/theme.svelte"
import clear from "./clear"
import banner from "./banner"

export default function theme(args: string[]): string {
    const theme = getTheme()

    if (args.length === 0) {
        const available = getAvailableThemes().join(", ")
        return `Current theme: <span class="${theme.text.info}">${getTheme() === getTheme() ? "default" : "unknown"}</span>\n\nAvailable themes: ${available}\n\nUsage: theme <name>`
    }

    const themeName = args[0].toLowerCase()
    if (setTheme(themeName)) {
        clear()
        return banner()
    } else {
        return `<span class="${theme.text.error}">X</span> Theme not found: <span class="${theme.text.error}">${themeName}</span>\n\nAvailable themes: ${getAvailableThemes().join(", ")}`
    }
}

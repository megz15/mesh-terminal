import { getTheme } from "$lib/theme.svelte"

export default function rm(args: string[]): string {
    const theme = getTheme();
    return `rm: cannot remove ${args.join(" ")}: <span class="${theme.text.error}">User should take a bath</span>

Tip: To remove French language packs system-wide, use:
<span class="${theme.text.warning}">sudo rm -fr ./*</span>
\n`;
}
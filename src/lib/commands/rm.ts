export default function rm(args: string[]): string {
    return `rm: cannot remove ${args.join(" ")}: <span class="text-red-400">User should take a bath</span>

Tip: To remove French language packs system-wide, use:
<span class="text-yellow-400">sudo rm -fr ./*</span>
\n`;
}
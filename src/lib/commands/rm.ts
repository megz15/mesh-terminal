export default function rm(args: string[]): string {
    return `rm: cannot remove ${args.join(" ")}: User should take a bath
    \nTip: To remove French language packs system-wide, use:\nsudo rm -fr ./*`;
}
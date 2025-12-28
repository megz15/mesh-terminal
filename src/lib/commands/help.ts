import { programs } from "$lib/system.svelte";
import { commands } from "./allCommandsBarrel";
import { getTheme } from "$lib/theme.svelte";

export default function help(args: string[]): string {
    const theme = getTheme();
    if (args.length === 0) {
        return `<span class="${theme.text.primary}">[ ${Object.keys(commands).length} ] Available commands:</span>\n${
            Object.entries(commands)
                .map(
                    ([name, {man}]) => `\t<span class="${theme.text.warning}">${
                        name.padEnd(8)
                    }:</span> ${man}`)
                .join("\n")
                .replaceAll("[ WIP ]", `<span class='${theme.text.error}'>[ WIP ]</span>`)
        }

    <span class="${theme.text.primary}">[ ${programs.length} ] Installed programs:
    ${programs.entries()
        .map(
            ([iter, item]) => `${iter + 1}. <span class="${theme.text.warning}">${item.padEnd(8)}</span>`
        ).toArray()
        .join("\n\t")}
    
    Note: To run a program, type "./" followed by the program name
    Example usage:</span> <span class="${theme.text.warning}">./helloWorld</span>
    \n`;

    } else if (args.length === 1) {
        const cmd = commands[args[0]];
        if (!cmd) {
            return `help: <span class="${theme.text.error} font-semibold">no manual entry for ${args[0]}</span>\n\tjust google it`;
        }
        return `<span class="${theme.text.warning}">${args[0]}:</span> ${cmd.man.replaceAll("[ WIP ]", `<span class='${theme.text.error}'>[ WIP ]</span>`)}`;
    } else {
        return `<span class="${theme.text.error} font-semibold">just google it</span>`;
    }
}
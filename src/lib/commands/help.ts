import { programs } from "$lib/system.svelte";
import { commands } from "./allCommandsBarrel";

export default function help(args: string[]): string {
    if (args.length === 0) {
        return `<span class="text-gray-200">[ ${Object.keys(commands).length} ] Available commands:</span>\n${
            Object.entries(commands)
                .map(
                    ([name, {man}]) => `\t<span class="text-yellow-400">${
                        name.padEnd(8)
                    }:</span> ${man}`)
                .join("\n")
                .replaceAll("[ WIP ]", "<span class='text-red-400'>[ WIP ]</span>")
        }

    <span class="text-gray-200">[ ${programs.length} ] Installed programs:
    ${programs.entries()
        .map(
            ([iter, item]) => `${iter + 1}. <span class="text-yellow-400">${item.padEnd(8)}</span>`
        ).toArray()
        .join("\n\t")}
    
    Note: To run a program, type "./" followed by the program name
    Example usage:</span> <span class="text-yellow-400">./helloWorld</span>
    \n`;

    } else if (args.length === 1) {
        const cmd = commands[args[0]];
        if (!cmd) {
            return `help: <span class="text-red-400 font-semibold">no manual entry for ${args[0]}</span>\n\tjust google it`;
        }
        return `<span class="text-yellow-400">${args[0]}:</span> ${cmd.man.replaceAll("[ WIP ]", "<span class='text-red-400'>[ WIP ]</span>")}`;
    } else {
        return `<span class="text-red-400 font-semibold">just google it</span>`;
    }
}
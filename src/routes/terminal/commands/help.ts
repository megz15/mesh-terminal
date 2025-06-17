import { commands } from "./allCommandsBarrel";

export default function help(args: string[]): string {
    if (args.length === 0) {
        return `Available commands:\n${
            Object.entries(commands)
                .map(
                    ([name, {man}]) => `\t<span class="text-yellow-400">${
                        name.padEnd(8)
                    }:</span> ${man}`)
                .join("\n")
                .replaceAll("[ WIP ]", "<span class='text-red-400'>[ WIP ]</span>")
        }
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
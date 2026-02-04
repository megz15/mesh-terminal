import { programs } from "$lib/system.svelte";
import { commands } from "./allCommandsBarrel";
import { getTheme } from "$lib/theme.svelte";

const commandGroups: Record<string, string[]> = {
    "File & Directory": ["ls", "cd", "pwd", "cat", "rm"],
    "Text Editors": ["vim", "nano", "emacs"],
    "Sys Info": ["neofetch", "banner", "whoami", "cal", "date", "printenv"],
    "Development": ["git", "sudo", "echo", "test"],
    "Terminal": ["clear", "exit", "theme", "cowsay"],
    "Documentation": ["resume", "cv", "hist", "clshist", "help", "man"],
    "Work in Progress": ["define", "matrix", "pacman", "radio"],
};

export default function help(args: string[]): string {
    const theme = getTheme();
    if (args.length === 0) {
        let output = `<span class="${theme.text.primary}">[ ${Object.keys(commands).length} ] Available commands:</span>\n\n`;
        
        for (const [group, cmdNames] of Object.entries(commandGroups)) {
            output += `<span class="${theme.text.success} font-semibold">${group}</span>\n`;
            for (const cmdName of cmdNames) {
                const cmd = commands[cmdName];
                if (cmd) {
                    output += `\t<span class="${theme.text.warning}">${cmdName.padEnd(10)}:</span> ${cmd.man.replaceAll("[ WIP ]", `<span class='${theme.text.error}'>[ WIP ]</span>`)}\n`;
                }
            }
            output += "\n";
        }

        output += `<span class="${theme.text.primary}">[ ${programs.length} ] Installed programs:\n`;
        for (let i = 0; i < programs.length; i++) {
            output += `\t${i + 1}. <span class="${theme.text.warning}">${programs[i].padEnd(12)}</span>\n`;
        }
        
        output += `\n<span class="${theme.text.primary}">Note: To run a program, type "./" followed by the program name\nExample usage:</span> <span class="${theme.text.warning}">./helloWorld</span>\n`;
        
        return output;

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
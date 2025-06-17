import banner from "./banner";
import cat from "./cat";
import cd from "./cd";
import clear from "./clear";
import cowsay from "./cowsay";
import help from "./help";
import ls from "./ls";

type Command = (args: string[]) => string;

export const commands: Record<string, {man: string, cmd: Command}> = {
    banner: {
        man: "Show the banner message",
        cmd: banner,
    },
    cat: {
        man: "[ WIP ] View file contents (partially implemented)",
        cmd: cat,
    },
    cd: {
        man: "Change the current working directory",
        cmd: cd,
    },
    clear: {
        man: "Clear the terminal output",
        cmd: clear,
    },
    cowsay: {
        man: "cow ASCII! 🐮",
        cmd: cowsay,
    },
    help: {
        man: "Show this message",
        cmd: help,
    },
    ls: {
        man: "List files in the specified directory (or current directory if none specified)",
        cmd: ls,
    },
}
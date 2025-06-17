import banner from "./banner";
import cat from "./cat";
import cd from "./cd";
import clear from "./clear";
import clshist from "./clshist";
import cowsay from "./cowsay";
import echo from "./echo";
import emacs from "./emacs";
import exit from "./exit";
import git from "./git";
import help from "./help";
import hist from "./hist";
import ls from "./ls";
import man from "./man";
import nano from "./nano";
import neofetch from "./neofetch";
import printenv from "./printenv";
import pwd from "./pwd";
import rm from "./rm";
import sudo from "./sudo";
import test from "./test";
import vim from "./vim";
import whoami from "./whoami";

import { HISTSIZE } from "$lib/system.svelte";

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
    clshist: {
        man: `Clear session command history <span class="text-red-400">(HISTSIZE = ${HISTSIZE})</span>`,
        cmd: clshist,
    },
    cowsay: {
        man: "cow ASCII! 🐮",
        cmd: cowsay,
    },
    define: {
        man: "[ WIP ] Look up a word definition (not implemented yet)",
        cmd: () => "[ WIP ] Look up a word definition (not implemented yet)",
    },
    echo: {
        man: "Print text to the terminal",
        cmd: echo,
    },
    emacs: {
        man: "Editing MACroS, the extensible, customizable, self-documenting real-time display editor",
        cmd: emacs,
    },
    exit: {
        man: "Exit the terminal (buggy)",
        cmd: exit,
    },
    git: {
        man: "Version control system",
        cmd: git,
    },
    help: {
        man: "Show this message",
        cmd: help,
    },
    hist: {
        man: `Show command history <span class="text-red-400">(HISTSIZE = ${HISTSIZE})</span>`,
        cmd: hist,
    },
    ls: {
        man: "List files in the specified directory (or current directory if none specified)",
        cmd: ls,
    },
    man: {
        man: "Show manual pages. Alternatively, use `help`",
        cmd: man,
    },
    matrix: {
        man: "[ WIP ] 🚫🥄 (not implemented yet)",
        cmd: () => "[ WIP ] 🚫🥄 (not implemented yet)",
    },
    nano: {
        man: "Nano, the Pico editor clone with enhancements",
        cmd: nano,
    },
    neofetch: {
        man: "CLI system information tool",
        cmd: neofetch,
    },
    pacman: {
        man: "[ WIP ] Package manager (not implemented yet)",
        cmd: () => "[ WIP ] Package manager (not implemented yet)",
    },
    printenv: {
        man: "Print all environment variables",
        cmd: printenv,
    },
    pwd: {
        man: "Print current working directory",
        cmd: pwd,
    },
    resume: {
        man: "[ WIP ] Show resume (not implemented yet)",
        cmd: () => "[ WIP ] Show resume (not implemented yet)",
    },
    rm: {
        man: "Remove files or directories",
        cmd: rm,
    },
    sudo: {
        man: "Run a command with superuser privileges",
        cmd: sudo,
    },
    test: {
        man: "O_O",
        cmd: test,
    },
    theme: {
        man: "[ WIP ] Change the terminal theme (not implemented yet)",
        cmd: () => "[ WIP ] Change the terminal theme (not implemented yet)",
    },
    vim: {
        man: "Vi Improved, a highly configurable, improved version of the vi text editor",
        cmd: vim,
    },
    whoami: {
        man: "Show the current user",
        cmd: whoami,
    },
}
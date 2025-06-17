import type { VirtualFilesystem } from "./types";

// export function setWorkingDirectoryPath(path: string) {
//     workingDirectoryPath = path;
// }

export function getPromptText(): string {
    return promptText;
}

export const userName = "march";
export let workingDirectoryPath: {value:string} = $state({ value: `/home/${userName}`}); // using the value key workaround for now
const promptText = $derived(`<span class="text-gray-200">oh no <span class="text-yellow-400 font-semibold">${userName}</span> is in <span class="text-blue-400 font-semibold">${workingDirectoryPath["value"]}</span> $</span>`);

export let cmdInputText: {value: string} = $state({ value: "" });

export const virtualFilesystem: VirtualFilesystem = {
    "": {
        "home": {
            [userName]: {
                ".secret": {},
                "Documents": {
                    files: ["resume.pdf", "env.txt"]
                },
                "Pictures": {
                    files: ["canine.jpg", "feline.png"]
                },
                "Music": {
                    files: ["daftendirekt.mp3"]
                },
                "Videos": {
                    files: ["sarod.mp4"]
                },
                "Downloads": {
                    files: ["magisk.img", "bitcoin.exe"]
                },
                files: ["cat.txt"]
            }
        },
        "tmp": {
            files: ["cache.tgz"]
        },
        "opt": {},
        "usr": {},
        "etc": {},
        "var": {},
        "boot": {},
    }
}

export const envVars: Record<string, string> = {
    "USER": userName,
    "HOME": `/home/${userName}`,
    "SHELL": "/bin/mesh",
    "PATH": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
    "LANG": "en_US.UTF-8",
    "TERM": "MESh",
    "HISTSIZE": "10",
    "UID": "1000",
    "GID": "1000",
    "HOSTNAME": "march3000",
    "VERSION": "0.0.1",
};

export const availableCommands: Record<string, string> = {
    
    "define"    : "[ WIP ] Look up a word definition (not implemented yet)",
    "history"   : "[ WIP ] Show command history (not implemented yet)",
    "matrix"    : "[ WIP ] 🚫🥄 (not implemented yet)",
    "pacman"    : "[ WIP ] Package manager (not implemented yet)",
    "resume"    : "[ WIP ] Show resume (not implemented yet)",
    "theme"     : "[ WIP ] Change the terminal theme (not implemented yet)",

    "sudo"      : "Run a command with superuser privileges",
    "test"      : "O_O",
    "whoami"    : "Show the current user",
}
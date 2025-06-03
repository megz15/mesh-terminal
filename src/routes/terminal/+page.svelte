<script lang="ts">
    import { onMount } from "svelte";

    type VirtualDirectory = {
        files?: string[];
        [subdir: string]: VirtualDirectory | string[] | undefined;
    };

    type VirtualFilesystem = {
        [dir: string]: VirtualDirectory;
    };

    let cmdInputText = $state("");
    let outputHistory: HTMLDivElement;
    let cursorPosition = $state(0);

    onMount(() => {
        window.onload = () => {
            window.addEventListener("keydown", (e) => {
                e.preventDefault();
                let cmd = cmdInputText.trim().split(" ");
                switch (e.key) {

                    case "Backspace":
                        if (cursorPosition > 0) {
                            cmdInputText = cmdInputText.slice(0, cursorPosition - 1) + cmdInputText.slice(cursorPosition);
                            cursorPosition--;
                        }
                        break;
                    
                    case "Delete":
                        if (cursorPosition < cmdInputText.length) {
                            cmdInputText = cmdInputText.slice(0, cursorPosition) + cmdInputText.slice(cursorPosition + 1);
                        }
                        break;
                    
                    case "Enter":
                        outputHistory.innerHTML += `<pre>${promptText} ${cmd.join(" ")}`
                        let output = parseCommand(cmd[0], cmd.slice(1));
                        if (cmd[0] != "clear" && cmd[0] != "" && cmd[0] != "cd") outputHistory.innerHTML += `</div><pre class="text-base/5 break-all whitespace-pre-wrap"> &gt&gt ${output}</pre>`;
                        cmdInputText = "";
                        cursorPosition = 0;
                        break;
                    
                    case "ArrowLeft":
                        if (cursorPosition > 0) cursorPosition--;
                        break;
                    
                    case "ArrowRight":
                        if (cursorPosition < cmdInputText.length) cursorPosition++;
                        break;
                    
                    case "Home":
                        cursorPosition = 0;
                        break;
                    
                    case "End":
                        cursorPosition = cmdInputText.length;
                        break;
                    
                    case "Escape":
                        cmdInputText = "";
                        cursorPosition = 0;
                        break;
                    
                    default:
                        if (e.key.length == 1) {
                            cmdInputText = cmdInputText.slice(0, cursorPosition) + e.key + cmdInputText.slice(cursorPosition);
                            cursorPosition++;
                        }
                        break;
                }
            })
        }
    });

    let userName = "march";
    let workingDirectoryPath = $state(`/home/${userName}`);
    let virtualFilesystem: VirtualFilesystem = {
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

    let promptText = $derived(`oh no ${userName} is in ${workingDirectoryPath} $`);

    function parseCommand(cmd: string, args: string[] = []): string {
        switch (cmd) {

            case "test":
                return `${cursorPosition}`;

            case "":
                return "";
            
            case "banner":
                return `

    ##::::'##:'########::'######::'##::::'##:
    ###::'###: ##.....::'##... ##: ##:::: ##:
    ####'####: ##::::::: ##:::..:: ##:::: ##:
    ## ### ##: ######:::. ######:: #########:
    ##. #: ##: ##...:::::..... ##: ##.... ##:
    ##:.:: ##: ##:::::::'##::: ##: ##:::: ##:
    ##:::: ##: ########:. ######:: ##:::: ##:
    .:::::..::........:::......:::..:::::..::

    Megz's Emulated Terminal Shell - v0.0.1
    Type 'banner' to see this message again
    Type 'help' for a list of commands
                `;
            
            case "help":
                return `Available commands:
    banner \t\t\t\t Show banner
    [ WIP ] cat \t\t View file contents (not implemented yet)
    cd [directory] \t\t Change the current working directory
    clear \t\t\t\t Clear the terminal output
    cowsay \t\t\t\t cow ASCII! 🐮
    [ WIP ] echo \t\t Print text to the terminal (not implemented yet)
    emacs \t\t\t\t The extensible, customizable, self-documenting real-time display editor
    exit \t\t\t\t Exit the terminal (buggy)
    help \t\t\t\t Show this message
    ls [directory] \t\t List files in the specified directory (or current directory if none specified)
    [ WIP ] matrix \t\t 🚫🥄 (not implemented yet)
    nano \t\t\t\t Pico editor clone with enhancements
    neofetch \t\t\t CLI system information tool
    [ WIP ] pacman \t\t Package manager (not implemented yet)
    pwd \t\t\t\t Print current working directory
    [ WIP ] resume \t\t Show resume (not implemented yet)
    sudo [command] \t\t Run a command with superuser privileges
    test \t\t\t\t O_O
    [ WIP ] theme \t\t Change the terminal theme (not implemented yet)
    vim \t\t\t\t Vi Improved, a highly configurable, improved version of the vi text editor
    whoami \t\t\t\t Show the current user`;
            
            case "cd":
                if (args.length != 0 && args[0] != ".") {
                    if (args.length > 1) {
                        outputHistory.innerHTML += `</div><pre class="text-base/5 break-all whitespace-pre-wrap"> &gt&gt cd: too many arguments</pre>`;
                    } else if (args[0] == "..") {
                        if (workingDirectoryPath == "/") {
                        } else {
                            workingDirectoryPath = workingDirectoryPath.split("/").slice(0, -1).join("/") || "/";
                        }
                    } else {
                        let requiredDir: VirtualDirectory = virtualFilesystem[""];
                        let requiredDirPath = args[0];
                        let pathExists = true;

                        if (!requiredDirPath.startsWith("/")) {
                            requiredDirPath = `${workingDirectoryPath}/${requiredDirPath}`;
                        }

                        requiredDirPath.split("/").slice(1).forEach((dir) => {
                            if (requiredDir[dir]) {
                                requiredDir = requiredDir[dir] as VirtualDirectory;
                            } else {
                                pathExists = false;
                            }
                        });

                        if (!pathExists) {
                            outputHistory.innerHTML += `</div><pre class="text-base/5 break-all whitespace-pre-wrap"> &gt&gt cd: not a directory: ${requiredDirPath}</pre>`;
                        } else workingDirectoryPath = requiredDirPath;
                    }
                }
                return "";

            case "ls":
                let requiredDir: VirtualDirectory = virtualFilesystem[""];
                let requiredDirPath = workingDirectoryPath;
                let pathExists = true;
                
                if (args.length != 0) {
                    requiredDirPath = args.at(-1)!;

                    if (!requiredDirPath.startsWith("/")) {
                        requiredDirPath = `${workingDirectoryPath}/${requiredDirPath}`;
                    }
                }

                requiredDirPath.split("/").slice(1).forEach((dir) => {
                    if (requiredDir[dir]) {
                        requiredDir = requiredDir[dir] as VirtualDirectory;
                    } else {
                        pathExists = false;
                    }
                });

                if (requiredDirPath == "/") {
                    pathExists = true;
                    requiredDir = virtualFilesystem[""];
                }
                
                if (!pathExists) {
                    return `ls: cannot access '${requiredDirPath}': No such file or directory`;
                } else return ["", ".", "..", ...Object.keys(requiredDir).filter(dir => dir != "files"), ...requiredDir.files || []].join("\n");
            
            case "clear":
                outputHistory.innerHTML = "";
                cmdInputText = "";
                return "";    

            case "pwd":
                return workingDirectoryPath;
            
            case "whoami":
                return userName;
            
            case "cowsay":
                return `
^__^
(oo)\\_______
(__)\\       )\\/\\
    ||----w |
    ||     ||`;

            case "sudo":
                if (args.length == 0) {
                    return "sudo: no command specified";
                } else {
                    return "I'm sorry, Dave. I'm afraid I can't do that.";
                }
            
            case "exit":
                return "One does not simply exit MESh.";
            
            case "neofetch":
                return "Neofetch has been deprecated.\nPlease use 'banner' instead.";
            
            case "vim":
                return "User will not be able to exit vim.\n >> Please use 'emacs' instead.";
            
            case "emacs":
                return "Too many packages NOT ENOUGH RAM\n >> Please use 'nano' instead.";
            
            case "nano":
                return "User is too advanced for nano.\n >> Please use 'vim' instead.";

            default:
                return `MESh: command not found: ${cmd}`;
        }
    }


    function highlightCursor(cmdInputText: string, cursorPosition: number) {
        const cursorBound = Math.max(0, Math.min(cursorPosition, cmdInputText.length));

        if (cursorPosition === cmdInputText.length) {
            return cmdInputText + `<span class="bg-gray-300 text-black animate-[pulse_1s_ease_infinite]">&nbsp</span>`;
        }

        return (
            cmdInputText.slice(0, cursorBound)
            + `<span class="bg-gray-300 text-black animate-[pulse_1s_ease_infinite]">${cmdInputText[cursorBound]}</span>`
            + cmdInputText.slice(cursorBound + 1)
        );
    }
</script>

<div class="input">
    <div class="output-history" bind:this={outputHistory}>
        <pre class="text-base/5 break-all whitespace-pre-wrap">{parseCommand("banner")}</pre>
    </div>
    <span class="prompt">{promptText}</span>
    <span class="cmd-input break-all">{@html highlightCursor(cmdInputText, cursorPosition)}</span>
</div>
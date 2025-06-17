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
                        outputHistory.innerHTML += `<pre class="text-gray-200">${promptText} ${cmd.join(" ")}</pre>`;
                        let output = parseCommand(cmd[0], cmd.slice(1));
                        if (cmd[0] != "clear" && cmd[0] != "" && cmd[0] != "cd") outputHistory.innerHTML += `<pre class="break-all whitespace-pre-wrap"> &gt&gt ${output}</pre>`;
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

    const envVars: {[envVar:string]:string} = {
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

    let promptText = $derived(`<span class="text-gray-200">oh no <span class="text-yellow-400 font-semibold">${userName}</span> is in <span class="text-blue-400 font-semibold">${workingDirectoryPath}</span> $</span>`);

    const availableCommands:{[cmd:string]:string} = {
        "banner"    : "Show banner",
        "cat"       : "[ WIP ] View file contents (partially implemented)",
        "cd"        : "Change the current working directory",
        "clear"     : "Clear the terminal output",
        "cowsay"    : "cow ASCII! 🐮",
        "define"    : "[ WIP ] Look up a word definition (not implemented yet)",
        "echo"      : "Print text to the terminal",
        "emacs"     : "The extensible, customizable, self-documenting real-time display editor",
        "exit"      : "Exit the terminal (buggy)",
        "git"       : "Version control system",
        "history"   : "[ WIP ] Show command history (not implemented yet)",
        "help"      : "Show this message",
        "ls"        : "List files in the specified directory (or current directory if none specified)",
        "man"       : "Show manual pages",
        "matrix"    : "[ WIP ] 🚫🥄 (not implemented yet)",
        "nano"      : "Pico editor clone with enhancements",
        "neofetch"  : "CLI system information tool",
        "pacman"    : "[ WIP ] Package manager (not implemented yet)",
        "printenv"  : "Print all environment variables",
        "pwd"       : "Print current working directory",
        "resume"    : "[ WIP ] Show resume (not implemented yet)",
        "rm"        : "Remove files or directories",
        "sudo"      : "Run a command with superuser privileges",
        "test"      : "O_O",
        "theme"     : "[ WIP ] Change the terminal theme (not implemented yet)",
        "vim"       : "Vi Improved, a highly configurable, improved version of the vi text editor",
        "whoami"    : "Show the current user",
    }

    function parseCommand(cmd: string, args: string[] = []): string {
        switch (cmd) {

            case "test":
                return "Nothing to test here, move along, move along.";

            case "":
                return "";
            
            case "banner":
                return `<div class="text-base/3.75 font-black text-yellow-400">
    ##::::'##:'########::'######::'##::::::::
    ###::'###: ##.....::'##... ##: ##::::::::
    ####'####: ##::::::: ##:::..:: ##::::::::
    ## ### ##: ######:::. ######:: #########:
    ##. #: ##: ##...:::::..... ##: ##.... ##:
    ##:.:: ##: ##:::::::'##::: ##: ##:::: ##:
    ##:::: ##: ########:. ######:: ##:::: ##:
    .:::::..::........:::......:::..:::::..::</div>
    <span class="font-black text-xl text-yellow-400">M</span>egh's <span class="font-black text-xl text-yellow-400">E</span>mulated <span class="font-black text-xl text-yellow-400">Sh</span>ell - v0.0.1
    Type <span class="text-yellow-400">'banner'</span> to see this message again
    Type <span class="text-yellow-400">'help'</span> for a list of commands
                `;
            
            case "help":
                return `Available commands:
                \n${Object.entries(availableCommands).map(([cmd, desc]) => `\t<span class="text-yellow-400">${cmd}:</span> ${desc}`).join("\n").replaceAll("[ WIP ]", "<span class='text-red-400'>[ WIP ]</span>")}
                \n`;

            case "cat":
                if (args.length == 0) {
                    return "cat: No file specified";
                } else {
                    let requiredDir: VirtualDirectory = virtualFilesystem[""];
                    let requiredFilePath = args[0];
                    let pathExists = true;

                    if (!requiredFilePath.startsWith("/")) {
                        requiredFilePath = `${workingDirectoryPath}/${requiredFilePath}`;
                    }

                    requiredFilePath.split("/").slice(1,-1).forEach((dir) => {
                        if (requiredDir[dir]) {
                            requiredDir = requiredDir[dir] as VirtualDirectory;
                        } else {
                            pathExists = false;
                        }
                    });

                    if (!pathExists) {
                        return `cat: ${requiredFilePath}: No such file or directory`;
                    } else if (requiredDir.files && requiredDir.files.includes(requiredFilePath.split("/").pop()!)) {
                        return `Contents of ${requiredFilePath}:\nMap simulated file content in the future.
                        \nPlaceholder:<div class="text-base/3.75">
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣠⣤⣤⣼⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠘⣿⣿⣿⣿⠟⠁⠀⠀⠀⠹⣿⣿⣿⣿⣿⠟⠁⠀⠀⠹⣿⣿⡿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀⠀⢼⣿⠀⢿⣿⣿⣿⣿⠀⣾⣷⠀⠀⢿⣿⣷⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣿⣿⣿⣷⡀⠀⠀⠈⠋⢀⣿⣿⣿⣿⣿⡀⠙⠋⠀⢀⣾⣿⣿⠀⠀⠀⠀⠀
⢀⣀⣀⣀⣿⣿⣿⣿⣿⣶⣶⣶⣶⣿⣿⣿⣿⣾⣿⣷⣦⣤⣴⣿⣿⣿⣿⣤⠤⢤⣤⡄
⠈⠉⠉⢉⣙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣀⣀⣀⡀⠀
⠐⠚⠋⠉⢀⣬⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣥⣀⡀⠈⠀⠈⠛
⠀⠀⠴⠚⠉⠀⠀⠀⠉⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠋⠁⠀⠀⠀⠉⠛⠢⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀meow⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇</div>⠀`;
                    } else {
                        return `cat: ${requiredFilePath}: Is a directory`;
                    }
                }
            
            case "cd":
                if (args.length != 0 && args[0] != ".") {
                    if (args.length > 1) {
                        outputHistory.innerHTML += `</div><pre class="break-all whitespace-pre-wrap"> &gt&gt cd: too many arguments</pre>`;
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
                            outputHistory.innerHTML += `</div><pre class="break-all whitespace-pre-wrap"> &gt&gt cd: not a directory: ${requiredDirPath}</pre>`;
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

            case "echo":
                if (args[0][0] == "$") {
                    const envVar: string = args[0].slice(1);
                    if (envVars[envVar]) {
                        return envVars[envVar];
                    } else {
                        return `echo: ${args[0]}: No such environment variable`;
                    }
                }
                    
                return args.join(" ");

            case "printenv":
                return `System environment variables:\n${Object.entries(envVars).map(([envVar, val]) => `<span class="text-yellow-400">${envVar}</span>=${val}`).join("\n")}`;
            
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
                return "One does not simply exit MESh. Have you tried REISUB?";
            
            case "neofetch":
                return "Neofetch has been deprecated.\nPlease use 'banner' instead.";
            
            case "vim":
                return "User will not be able to exit vim.\n >> Please use 'emacs' instead.";
            
            case "emacs":
                return "Too many packages NOT ENOUGH RAM\n >> Please use 'nano' instead.";
            
            case "nano":
                return "User is too advanced for nano.\n >> Please use 'vim' instead.";
            
            case "git":
                return `<span class="text-red-400">Auto-merging src/components/Button.js
CONFLICT (content): Merge conflict in src/components/Button.js
error: could not apply 3f4a1b2... Fix button styling
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands:
hint:
hint:   git config pull.rebase false  # merge (the default strategy)
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint:
hint: You can replace "git config" with "git branch" to set the merge strategy for a specific branch.
Auto-merging docs/README.md
CONFLICT (content): Merge conflict in docs/README.md
error: Failed to merge in the changes.
Patch failed at 5 Fix button styling
The copy of the patch that failed is found in:
   .git/rebase-apply/patch
When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip".
To check out the original branch and stop rebasing, run "git rebase --abort".</span>`;

            case "man":
                return `man has been deprecated.
                \nIn an effort to encourage more meaningful and inclusive language in the MESh project,\nwe have replaced the term \"man\" with \"person\" - or better yet, just Google TFM.
                \nSee: <a class="text-blue-300 underline" href="https://sfconservancy.org/news/2020/jun/23/gitbranchname/">https://sfconservancy.org/news/2020/jun/23/gitbranchname/</a> for inspiration.
                \n`;
            
            case "rm":
                return `rm: cannot remove ${args.join(" ")}: User should take a bath
                \nTip: To remove French language packs system-wide, use:\nsudo rm -fr ./*`;

            default:
                return `MESh: command not found: <span class="text-red-400 font-semibold">${cmd}</span>`;
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
        <pre class="break-all whitespace-pre-wrap">{@html parseCommand("banner")}</pre>
    </div>
    <span class="prompt">{@html promptText}</span>
    <span class="cmd-input break-all text-gray-200">{@html highlightCursor(cmdInputText, cursorPosition)}</span>
</div>
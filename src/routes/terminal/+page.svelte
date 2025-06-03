<script lang="ts">
    import { onMount } from "svelte";

    type VirtualDirectory = {
        files?: string[];
        [subdir: string]: VirtualDirectory | string[] | undefined;
    };

    type VirtualFilesystem = {
        [dir: string]: VirtualDirectory;
    };

    let cmdInput: HTMLSpanElement;
    let outputHistory: HTMLDivElement;

    onMount(() => {
        window.onload = () => {
            window.addEventListener("keydown", (e) => {
                let cmd = cmdInput.textContent!.trim().split(" ");
                if (e.key.length == 1) {
                    cmdInput.textContent += e.key;
                } else if (e.key == "Backspace") {
                    cmdInput.textContent = cmd.join(" ").slice(0, -1);
                } else if (e.key == "Enter") {
                    outputHistory.innerHTML += `<pre>${promptText} ${cmd.join(" ")}`
                    let output = parseCommand(cmd[0], cmd.slice(1));
                    if (cmd[0] != "clear" && cmd[0] != "" && cmd[0] != "cd") outputHistory.innerHTML += `</div><pre class="text-base/4"> &gt&gt ${output}</pre>`;
                    cmdInput.textContent = "";

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
            
            case "cd":
                if (args.length != 0 && args[0] != ".") {
                    if (args.length > 1) {
                        outputHistory.innerHTML += `</div><pre class="text-base/4"> &gt&gt cd: too many arguments</pre>`;
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
                            outputHistory.innerHTML += `</div><pre class="text-base/4"> &gt&gt cd: not a directory: ${requiredDirPath}</pre>`;
                        } else workingDirectoryPath = requiredDirPath;
                    }
                }
                return "";
            
            case "clear":
                outputHistory.innerHTML = "";
                cmdInput.textContent = "";
                return "";
            
            case "help":
                return `Available commands:
    banner - Show banner
    clear - Clear the terminal output
    help - Show this message
    ls - List files in the current directory
    pwd - Print current working directory
    whoami - Show the current user`;

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
            
            case "pwd":
                return workingDirectoryPath;
            
            case "whoami":
                return userName;

            default:
                return `MESh: command not found: ${cmd}`;
        }
    }
</script>

<div class="input">
    <div class="output-history" bind:this={outputHistory}>
        <pre class="text-base/4">{parseCommand("banner")}</pre>
    </div>
    <span class="prompt">{promptText}</span>
    <span class="cmd-input break-all" bind:this={cmdInput} ></span>
</div>
<script lang="ts">
    import { onMount } from "svelte";
    import { getPromptText, cmdInputText, commandHistory, commandHistoryIndex, HISTSIZE } from "$lib/system.svelte";
    import { commands } from "$lib/commands/allCommandsBarrel";

    let outputHistory: HTMLDivElement;
    let inputContainer: HTMLDivElement;
    let cursorPosition = $state(0);

    onMount(() => {
        const savedHistory = localStorage.getItem("MESh_commandHistory");
        if (savedHistory) {
            try {
                commandHistory["value"] = JSON.parse(savedHistory);
            } catch (e) {
                console.error(e);
                commandHistory["value"] = [];
            }
        } else {
            commandHistory["value"] = [];
        }
        window.onload = () => {
            window.addEventListener("keydown", (e) => {
                e.preventDefault();
                scrollToBottom();
                const cmd = cmdInputText["value"].trim().split(" ");
                switch (e.key) {

                    case "Backspace":
                        if (cursorPosition > 0) {
                            cmdInputText["value"] = cmdInputText["value"].slice(0, cursorPosition - 1) + cmdInputText["value"].slice(cursorPosition);
                            cursorPosition--;
                        }
                        break;
                    
                    case "Delete":
                        if (cursorPosition < cmdInputText["value"].length) {
                            cmdInputText["value"] = cmdInputText["value"].slice(0, cursorPosition) + cmdInputText["value"].slice(cursorPosition + 1);
                        }
                        break;
                    
                    case "Enter":
                        const promptText = getPromptText();
                        const fullCommand = cmd.join(" ");
                        outputHistory.innerHTML += `<pre class="text-gray-200">${promptText} ${fullCommand}</pre>`;

                        if (fullCommand) {
                            commandHistory["value"].push(fullCommand);
                            if (commandHistory["value"].length > HISTSIZE) commandHistory["value"].shift();
                            localStorage.setItem("MESh_commandHistory", JSON.stringify(commandHistory["value"]));
                        }

                        commandHistoryIndex["value"] = -1;
                        
                        const output = parseCommand(cmd[0], cmd.slice(1));
                        
                        if (cmd[0] != "clear" && cmd[0] != "" && cmd[0] != "cd") outputHistory.innerHTML += `<pre class="break-all whitespace-pre-wrap"> &gt&gt ${output}</pre>`;
                        cmdInputText["value"] = "";
                        cursorPosition = 0;

                        break;
                    
                    case "ArrowLeft":
                        if (cursorPosition > 0) cursorPosition--;
                        break;
                    
                    case "ArrowRight":
                        if (cursorPosition < cmdInputText["value"].length) cursorPosition++;
                        break;
                    
                    case "ArrowUp":
                        if (commandHistory["value"].length > 0) {
                            if (commandHistoryIndex["value"] === -1) {
                                commandHistoryIndex["value"] = commandHistory["value"].length - 1;
                            } else if (commandHistoryIndex["value"] > 0) {
                                commandHistoryIndex["value"]--;
                            }
                            cmdInputText["value"] = commandHistory["value"][commandHistoryIndex["value"]];
                            cursorPosition = cmdInputText["value"].length;
                        }
                        break;

                    case "ArrowDown":
                        if (commandHistory["value"].length > 0 && commandHistoryIndex["value"] !== -1) {
                            if (commandHistoryIndex["value"] < commandHistory["value"].length - 1) {
                                commandHistoryIndex["value"]++;
                                cmdInputText["value"] = commandHistory["value"][commandHistoryIndex["value"]];
                            } else {
                                commandHistoryIndex["value"] = -1;
                                cmdInputText["value"] = "";
                            }
                            cursorPosition = cmdInputText["value"].length;
                        }
                        break;
                    
                    case "Home":
                        cursorPosition = 0;
                        break;
                    
                    case "End":
                        cursorPosition = cmdInputText["value"].length;
                        break;
                    
                    case "Escape":
                        cmdInputText["value"] = "";
                        cursorPosition = 0;
                        break;
                    
                    default:
                        if (e.key.length == 1) {
                            cmdInputText["value"] = cmdInputText["value"].slice(0, cursorPosition) + e.key + cmdInputText["value"].slice(cursorPosition);
                            cursorPosition++;
                        }
                        break;
                }
            })
        }
    });

    function scrollToBottom() {
        requestAnimationFrame(() => {
            inputContainer?.scrollIntoView({ behavior: "smooth", block: "end" });
        });
    }

    function parseCommand(cmd: string, args: string[] = []): string {
        if (cmd in commands) {
            return commands[cmd]["cmd"](args);
        } else return `MESh: command not found: <span class="text-red-400 font-semibold">${cmd}</span>`;
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

<div class="input" bind:this={inputContainer}>
    <div id="outputHistory" bind:this={outputHistory}>
        <pre class="break-all whitespace-pre-wrap">{@html parseCommand("banner")}</pre>
    </div>
    <span class="prompt">{@html getPromptText()}</span>
    <span class="cmd-input break-all text-gray-200">{@html highlightCursor(cmdInputText["value"], cursorPosition)}</span>
</div>
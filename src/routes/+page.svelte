<svelte:head>
    <title>MESh - v0.0.1</title> 
</svelte:head>

<script lang="ts">
    import { onMount } from "svelte";
    import { getPromptText, cmdInputText, commandHistory, commandHistoryIndex, HISTSIZE, cursorPosition } from "$lib/system.svelte";
    import { commands } from "$lib/commands/allCommandsBarrel";

    let outputHistory: HTMLDivElement;
    let inputContainer: HTMLDivElement;

    onMount(() => {
        const savedHistory = localStorage.getItem("MESh_commandHistory");
        if (savedHistory) {
            try {
                commandHistory.value = JSON.parse(savedHistory);
            } catch (e) {
                console.error(e);
                commandHistory.value = [];
            }
        } else {
            commandHistory.value = [];
        }
        window.onload = () => {
            window.addEventListener("keydown", (e) => {
                e.preventDefault();
                scrollToBottom();
                const fullCommand = cmdInputText.value.trim();
                const cmd = fullCommand.split(" ");
                switch (e.key) {

                    case "Backspace":
                        if (cursorPosition.value > 0) {
                            cmdInputText.value = cmdInputText.value.slice(0, cursorPosition.value - 1) + cmdInputText.value.slice(cursorPosition.value);
                            cursorPosition.value--;
                        }
                        break;
                    
                    case "Delete":
                        if (cursorPosition.value < cmdInputText.value.length) {
                            cmdInputText.value = cmdInputText.value.slice(0, cursorPosition.value) + cmdInputText.value.slice(cursorPosition.value + 1);
                        }
                        break;
                    
                    case "Enter":
                        const promptText = getPromptText();
                        outputHistory.innerHTML += `<pre class="text-gray-200 font-[Jetbrains_Mono]">${promptText} ${fullCommand}</pre>`;

                        if (fullCommand) {
                            commandHistory.value.push(fullCommand);
                            if (commandHistory.value.length > HISTSIZE) commandHistory.value.shift();
                            localStorage.setItem("MESh_commandHistory", JSON.stringify(commandHistory.value));
                        }

                        commandHistoryIndex.value = -1;
                        
                        const output = parseCommand(cmd[0], cmd.slice(1));
                        
                        if (cmd[0] != "clear" && cmd[0] != "" && cmd[0] != "cd") outputHistory.innerHTML += `<pre class="sm:break-all sm:whitespace-pre-wrap font-[Jetbrains_Mono]"> &gt&gt ${output}</pre>`;
                        cmdInputText.value = "";
                        cursorPosition.value = 0;

                        break;
                    
                    case "ArrowLeft":
                        if (cursorPosition.value > 0) cursorPosition.value--;
                        break;
                    
                    case "ArrowRight":
                        if (cursorPosition.value < cmdInputText.value.length) cursorPosition.value++;
                        break;
                    
                    case "ArrowUp":
                        if (commandHistory.value.length > 0) {
                            if (commandHistoryIndex.value === -1) {
                                commandHistoryIndex.value = commandHistory.value.length - 1;
                            } else if (commandHistoryIndex.value > 0) {
                                commandHistoryIndex.value--;
                            }
                            cmdInputText.value = commandHistory.value[commandHistoryIndex.value];
                            cursorPosition.value = cmdInputText.value.length;
                        }
                        break;

                    case "ArrowDown":
                        if (commandHistory.value.length > 0 && commandHistoryIndex.value !== -1) {
                            if (commandHistoryIndex.value < commandHistory.value.length - 1) {
                                commandHistoryIndex.value++;
                                cmdInputText.value = commandHistory.value[commandHistoryIndex.value];
                            } else {
                                commandHistoryIndex.value = -1;
                                cmdInputText.value = "";
                            }
                            cursorPosition.value = cmdInputText.value.length;
                        }
                        break;
                    
                    case "Home":
                        cursorPosition.value = 0;
                        break;
                    
                    case "End":
                        cursorPosition.value = cmdInputText.value.length;
                        break;
                    
                    case "Escape":
                        cmdInputText.value = "";
                        cursorPosition.value = 0;
                        break;
                    
                    case "Tab":
                        if (cmd.length == 1) {
                            if (fullCommand) {
                                const suggestions = Object.keys(commands).filter(c => c.startsWith(fullCommand));
                                if (suggestions.length === 1) {
                                    cmdInputText.value = suggestions[0] + " ";
                                    cursorPosition.value = cmdInputText.value.length;
                                } else if (suggestions.length > 1) {
                                    outputHistory.innerHTML += `<pre class="text-gray-400 font-[Jetbrains_Mono]">Suggestions: ${suggestions.join(", ")}</pre>`;
                                } else {
                                    outputHistory.innerHTML += `<pre class="text-gray-400 font-[Jetbrains_Mono]">No suggestions found for "${fullCommand}"</pre>`;
                                }
                            } else {
                                outputHistory.innerHTML += `<pre class="text-gray-400 font-[Jetbrains_Mono]">Type 'help' for a list of commands</pre>`;
                            }
                        }
                        break;
                    
                    default:
                        if (e.key.length == 1) {
                            cmdInputText.value = cmdInputText.value.slice(0, cursorPosition.value) + e.key + cmdInputText.value.slice(cursorPosition.value);
                            cursorPosition.value++;
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
        <pre class="sm:break-all sm:whitespace-pre-wrap font-[Jetbrains_Mono]">{@html parseCommand("banner")}</pre>
    </div>
    <span id="prompt">{@html getPromptText()}</span>
    <span class="cmd-input sm:break-all text-gray-200">{@html highlightCursor(cmdInputText.value, cursorPosition.value)}</span>
</div>
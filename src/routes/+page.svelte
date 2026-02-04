<svelte:head>
    <title>MESh - v0.0.2</title> 
</svelte:head>

<script lang="ts">
    import { onMount } from "svelte";
    import { getPromptText, cmdInputText, commandHistory, commandHistoryIndex, HISTSIZE, cursorPosition, programs, toggleKeyboard } from "$lib/system.svelte";
    import { commands } from "$lib/commands/allCommandsBarrel";
    import { goto } from "$app/navigation";
    import { getTheme } from "$lib/theme.svelte";

    let outputHistory: HTMLDivElement;
    let inputContainer: HTMLDivElement;

    const theme = $derived(getTheme());

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
        window.addEventListener("keydown", keyInterceptListener);
    });

    function keyInterceptListener(e: KeyboardEvent) {
        e.preventDefault();
        scrollToBottom();
        const fullCommand = cmdInputText.value.trim();
        const cmd = fullCommand.split(" ");

        if (e.key == "c" && e.ctrlKey) {
            outputHistory.innerHTML += `<pre class="break-all whitespace-pre-wrap font-[Jetbrains_Mono] text-xs sm:text-base"> &gt&gt ${parseCommand("exit")}</pre>`; //sm:break-all sm:whitespace-pre-wrap
            cmdInputText.value = "";
            cursorPosition.value = 0;
            return;
		}

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
                outputHistory.innerHTML += `<pre class="${theme.text.secondary} break-all whitespace-pre-wrap font-[Jetbrains_Mono] text-xs sm:text-base">${promptText} ${fullCommand}</pre>`;

                if (fullCommand) {
                    commandHistory.value.push(fullCommand);
                    if (commandHistory.value.length > HISTSIZE) commandHistory.value.shift();
                    localStorage.setItem("MESh_commandHistory", JSON.stringify(commandHistory.value));
                }

                commandHistoryIndex.value = -1;
                
                const output = parseCommand(cmd[0], cmd.slice(1));
                
                if (cmd[0] != "clear" && cmd[0] != "" && cmd[0] != "cd") outputHistory.innerHTML += `<pre class="break-all whitespace-pre-wrap font-[Jetbrains_Mono] text-xs sm:text-base"> &gt&gt ${output}</pre>`; //sm:break-all sm:whitespace-pre-wrap
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
                    if (commandHistoryIndex.value == -1) {
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
                        if (suggestions.length == 1) {
                            cmdInputText.value = suggestions[0] + " ";
                            cursorPosition.value = cmdInputText.value.length;
                        } else if (suggestions.length > 1) {
                            outputHistory.innerHTML += `<pre class="${theme.text.secondary} break-all whitespace-pre-wrap font-[Jetbrains_Mono] text-xs sm:text-base">Suggestions: ${suggestions.join(", ")}</pre>`;
                        } else {
                            outputHistory.innerHTML += `<pre class="${theme.text.secondary} break-all whitespace-pre-wrap font-[Jetbrains_Mono] text-xs sm:text-base">No suggestions found for "${fullCommand}"</pre>`;
                        }
                    } else {
                        outputHistory.innerHTML += `<pre class="${theme.text.secondary} break-all whitespace-pre-wrap font-[Jetbrains_Mono] text-xs sm:text-base">Type 'help' for a list of commands</pre>`;
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
    }

    function scrollToBottom() {
        requestAnimationFrame(() => {
            inputContainer?.scrollIntoView({ behavior: "smooth", block: "end" });
        });
    }

    function parseCommand(cmd: string, args: string[] = []): string {
        if (cmd.startsWith("./")) {
            if (programs.includes(cmd.slice(2))) {
                window.removeEventListener("keydown", keyInterceptListener);
                toggleKeyboard.value = false;
                goto(cmd.slice(2));
                return `MESh: launching program <span class="${theme.text.warning} font-semibold">${cmd.slice(2)}</span>`;
            } else {
                return `MESh: program not found: <span class="${theme.text.error} font-semibold">${cmd.slice(2)}</span>`;
            }
        }

        if (cmd in commands) {
            return commands[cmd]["cmd"](args);
        } else return `MESh: command not found: <span class="${theme.text.error} font-semibold">${cmd}</span>`;
    }

    function highlightCursor(cmdInputText: string, cursorPosition: number) {
        const cursorBound = Math.max(0, Math.min(cursorPosition, cmdInputText.length));

        if (cursorPosition == cmdInputText.length) {
            return cmdInputText + `<span class="${theme.bg.cursor} text-black animate-[pulse_1s_ease_infinite]">&nbsp</span>`;
        }

        return (
            cmdInputText.slice(0, cursorBound)
            + `<span class="${theme.bg.cursor} text-black animate-[pulse_1s_ease_infinite]">${cmdInputText[cursorBound]}</span>`
            + cmdInputText.slice(cursorBound + 1)
        );
    }
</script>

<div class="input" bind:this={inputContainer}>
    <div id="outputHistory" bind:this={outputHistory}>
        <pre class="break-all whitespace-pre-wrap font-[Jetbrains_Mono] text-xs sm:text-base">{@html parseCommand("banner")}</pre>
        <!-- sm:break-all sm:whitespace-pre-wrap -->
    </div>
    <span id="prompt">{@html getPromptText()}</span>
    <span class="cmd-input break-all {theme.text.secondary} text-xs sm:text-base">{@html highlightCursor(cmdInputText.value, cursorPosition.value)}</span>
    <!-- sm:break-all -->
</div>
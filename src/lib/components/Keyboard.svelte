<script lang="ts">
    import { onMount } from "svelte";
    import { getPromptText, cmdInputText, commandHistory, commandHistoryIndex, HISTSIZE, cursorPosition, programs, toggleKeyboard } from "$lib/system.svelte";
    import { commands } from "$lib/commands/allCommandsBarrel";
    import { page } from "$app/state";
    import { goto } from "$app/navigation";

    let isShifted = false;
    let isControlled = false;
    let isProgram = programs.includes(page.url.pathname.split("/")[2]);

    let outputHistory: HTMLDivElement;
    onMount(() => {
        outputHistory = document.getElementById("outputHistory") as HTMLDivElement;
    })

    const keyRows = [
        ['Esc','1','2','3','4','5','6','7','8','9','0','-','='],
        ['Tab','q','w','e','r','t','y','u','i','o','p','[',']'],
        ['Shift','a','s','d','f','g','h','j','k','l',';','\'','\\'],
        ['Home','End','z','x','c','v','b','n','m',',','.','/'],
        ['Ctrl','←','↑','↓','→','Space','Enter','Back','Del'],
    ];

    const shiftedKeyRows = [
        ['Esc','!','@','#','₹','%','^','&','*','(',')','_','+'],
        ['Tab','Q','W','E','R','T','Y','U','I','O','P','{','}'],
        ['Shift','A','S','D','F','G','H','J','K','L',':','"','|'],
        ['Home','Nether','Z','X','C','V','B','N','M','<','>','?'],
        ['Ctrl','←','↑','↓','→', 'Space', 'Enter', 'Back', 'Del'],
    ];
</script>

<div class="flex flex-col gap-1.5 pt-4 max-sm:mb-10 {isProgram ? "fixed bottom-4 left-[50%] translate-x-[-50%]" : ""}">
    {#each isShifted ? shiftedKeyRows : keyRows as row}
        <div class="flex gap-1.5">
        {#each row as key}
            <button disabled={(key == "Ctrl" || key == 'c' || key == "C") ? false : isControlled} class="{(isControlled && !(key == "Ctrl" || key == 'c' || key == "C")) ? "opacity-20 pointer-events-none" : "opacity-100"} px-3 py-2 text-lg bg-neutral-950 border border-gray-400 rounded-lg text-gray-200 cursor-pointer"
            on:click={() => {
                const fullCommand = cmdInputText.value.trim();
                const cmd = fullCommand.split(" ");
                switch (key) {

                    case "Back":
                        if (cursorPosition.value > 0) {
                            cmdInputText.value = cmdInputText.value.slice(0, cursorPosition.value - 1) + cmdInputText.value.slice(cursorPosition.value);
                            cursorPosition.value--;
                        }
                        break;
                    
                    case "Del":
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

                        // const output = (cmd[0] in commands) ? commands[cmd[0]]["cmd"](cmd.slice(1)) : `MESh: command not found: <span class="text-red-400 font-semibold">${cmd[0]}</span>`;

                        let output: string;

                        if (cmd[0].startsWith("./")) {
                            if (programs.includes(cmd[0].slice(2))) {
                                toggleKeyboard.value = false;
                                goto(cmd[0].slice(2));
                                output = `MESh: launching program <span class="text-yellow-400 font-semibold">${cmd[0].slice(2)}</span>`;
                            } else {
                                output = `MESh: program not found: <span class="text-red-400 font-semibold">${cmd[0].slice(2)}</span>`;
                            }
                        }

                        if (cmd[0] in commands) {
                            output = commands[cmd[0]]["cmd"](cmd.slice(1));
                        } else output = `MESh: command not found: <span class="text-red-400 font-semibold">${cmd}</span>`;
                        
                        if (cmd[0] != "clear" && cmd[0] != "" && cmd[0] != "cd") outputHistory.innerHTML += `<pre class="sm:break-all sm:whitespace-pre-wrap font-[Jetbrains_Mono]"> &gt&gt ${output}</pre>`;
                        cmdInputText.value = "";
                        cursorPosition.value = 0;

                        break;
                    
                    case "←":
                        if (cursorPosition.value > 0) cursorPosition.value--;
                        break;
                    
                    case "→":
                        if (cursorPosition.value < cmdInputText.value.length) cursorPosition.value++;
                        break;
                    
                    case "↑":
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

                    case "↓":
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
                    
                    case "Nether":
                    case "End":
                        cursorPosition.value = cmdInputText.value.length;
                        break;
                    
                    case "Esc":
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
                    
                    case "Space":
                        cmdInputText.value = cmdInputText.value.slice(0, cursorPosition.value) + " " + cmdInputText.value.slice(cursorPosition.value);
                        cursorPosition.value++;
                        break;
                    
                    case "Shift":
                        isShifted = !isShifted;
                        break;
                    
                    case "Ctrl":
                        isControlled = !isControlled;
                        break;

                    case "c":
                    case "C":
                        if (isControlled) {
                            if (isProgram) {
                                goto("/");
                            }
                            else {
                                outputHistory.innerHTML += `<pre class="sm:break-all sm:whitespace-pre-wrap font-[Jetbrains_Mono]"> &gt&gt ${commands["exit"]["cmd"]([])}</pre>`;
                                cmdInputText.value = "";
                                cursorPosition.value = 0;
                                isControlled = false;
                                return;
                            }
                        }
                    
                    default:
                        if (key.length == 1) {
                            cmdInputText.value = cmdInputText.value.slice(0, cursorPosition.value) + key + cmdInputText.value.slice(cursorPosition.value);
                            cursorPosition.value++;
                        }
                        break;
                }
            }}>
                {key}
            </button>
        {/each}
        </div>
    {/each}
</div>
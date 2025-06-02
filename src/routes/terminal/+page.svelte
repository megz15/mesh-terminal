<script lang="ts">
    import { onMount } from "svelte";

    let cmdInput: HTMLSpanElement;
    let outputHistory: HTMLDivElement;

    onMount(() => {
        window.onload = () => {
            window.addEventListener("keydown", (e) => {
                let cmd = cmdInput.textContent!;
                if (e.key.length == 1) {
                    cmdInput.textContent += e.key;
                } else if (e.key == "Backspace") {
                    cmdInput.textContent = cmd.slice(0, -1);
                } else if (e.key == "Enter") {
                    cmd = cmd.trim();
                    let output = parseCommand(cmd);

                    if (cmd != "clear" && cmd != "") outputHistory.innerHTML += `<pre>${promptText} ${cmd}</div><pre class="text-base/4"> &gt&gt ${output}</pre>`;
                    cmdInput.textContent = "";

                }
            })
        }
    });

    let userName = "march";

    let promptText = `oh no ${userName} is in ~ $`;

    function parseCommand(cmd: string): string {
        switch (cmd) {

            case "":
                outputHistory.innerHTML += `<pre>${promptText} ${cmd}</pre>`;
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
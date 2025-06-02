<script lang="ts">
    import { onMount } from "svelte";

    let cmdInput: HTMLSpanElement;
    let outputHistory: HTMLDivElement;

    onMount(() => {
        window.onload = () => {
            window.addEventListener('keydown', (e) => {
                let cmd = cmdInput.textContent!;
                if (e.key.length == 1) {
                    cmdInput.textContent += e.key;
                } else if (e.key == 'Backspace') {
                    cmdInput.textContent = cmd.slice(0, -1);
                } else if (e.key == 'Enter') {
                    let output = '';
                    cmd = cmd.trim();

                    if (cmd in commands) {
                        output = commands[cmd];
                    } else if (cmd == 'clear') {
                        outputHistory.innerHTML = '';
                        cmdInput.textContent = '';
                        return;
                    } else if (cmd == '') {
                        outputHistory.innerHTML += `<pre>${promptText} ${cmd}</pre>`;
                        return;
                    } else {
                        output = `MESh: command not found: ${cmd}`;
                    }

                    outputHistory.innerHTML += `<pre>${promptText} ${cmd}</div><pre class="text-base/4"> &gt&gt ${output}</pre>`;
                    cmdInput.textContent = '';

                }
            })
        }
    });

    let promptText = 'oh no march is in ~ $';

    const commands: {[key: string]:string} = {
        'help': `Available commands:
    banner - Show banner
    clear - Clear the terminal output
    help - Show this message
    ls - List files in the current directory
    whoami - Show the current user`,
        'banner': `

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
        `,
        'ls': 'cat.img\tcat.jpg\tcat.txt',
        'whoami': 'march',
    }
</script>

<div class="input">
    <div class="output-history" bind:this={outputHistory}>
        <pre class="text-base/4">{commands["banner"]}</pre>
    </div>
    <br><span class="prompt">{promptText}</span>
    <span class="cmd-input break-all" bind:this={cmdInput} ></span>
</div>
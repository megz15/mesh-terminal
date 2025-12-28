import { envVars } from "$lib/system.svelte";
import { getTheme } from "$lib/theme.svelte";

export default function banner(): string {
    const theme = getTheme()
    return `<div class="text-base/3.75 font-black ${theme.text.username}">
    ##::::'##:'########::'######::'##::::::::
    ###::'###: ##.....::'##... ##: ##::::::::
    ####'####: ##::::::: ##:::..:: ##::::::::
    ## ### ##: ######:::. ######:: #########:
    ##. #: ##: ##...:::::..... ##: ##.... ##:
    ##:.:: ##: ##:::::::'##::: ##: ##:::: ##:
    ##:::: ##: ########:. ######:: ##:::: ##:
    .:::::..::........:::......:::..:::::..::</div>
    <span class="font-black text-xl ${theme.text.username}">M</span>egh's <span class="font-black text-xl ${theme.text.username}">E</span>mulated <span class="font-black text-xl ${theme.text.username}">Sh</span>ell -- <span class="${theme.text.info}">v${envVars.VERSION || "0.0.2"}</span>
    Type <span class="${theme.text.username}">'banner'</span> to see this message again
    Type <span class="${theme.text.username}">'help'</span> for a list of <span class="${theme.text.info}">commands</span> and <span class="${theme.text.info}">installed programs</span>

    Use <span class="${theme.text.username}">Left</span>, <span class="${theme.text.username}">Right</span> arrow keys & <span class="${theme.text.username}">Home</span>, <span class="${theme.text.username}">End</span> to move the <span class="${theme.text.info}">cursor</span>
    Use <span class="${theme.text.username}">Up</span> and <span class="${theme.text.username}">Down</span> arrow keys to navigate <span class="${theme.text.info}">command history</span>
    Use <span class="${theme.text.username}">Tab</span> key for command <span class="${theme.text.info}">suggestions</span> and <span class="${theme.text.info}">autocompletion</span>
                `;
}
import { envVars } from "$lib/system.svelte";

export default function banner(): string {
    return `<div class="text-base/3.75 font-black text-yellow-400">
    ##::::'##:'########::'######::'##::::::::
    ###::'###: ##.....::'##... ##: ##::::::::
    ####'####: ##::::::: ##:::..:: ##::::::::
    ## ### ##: ######:::. ######:: #########:
    ##. #: ##: ##...:::::..... ##: ##.... ##:
    ##:.:: ##: ##:::::::'##::: ##: ##:::: ##:
    ##:::: ##: ########:. ######:: ##:::: ##:
    .:::::..::........:::......:::..:::::..::</div>
    <span class="font-black text-xl text-yellow-400">M</span>egh's <span class="font-black text-xl text-yellow-400">E</span>mulated <span class="font-black text-xl text-yellow-400">Sh</span>ell -- <span class="text-green-200">v${envVars.VERSION || "0.0.1"}</span>
    Type <span class="text-yellow-400">'banner'</span> to see this message again
    Type <span class="text-yellow-400">'help'</span> for a list of <span class="text-green-200">commands</span> and <span class="text-green-200">installed programs</span>

    Use <span class="text-yellow-400">Left</span>, <span class="text-yellow-400">Right</span> arrow keys & <span class="text-yellow-400">Home</span>, <span class="text-yellow-400">End</span> to move the <span class="text-green-200">cursor</span>
    Use <span class="text-yellow-400">Up</span> and <span class="text-yellow-400">Down</span> arrow keys to navigate <span class="text-green-200">command history</span>
    Use <span class="text-yellow-400">Tab</span> key for command <span class="text-green-200">suggestions</span> and <span class="text-green-200">autocompletion</span>
                `;
}
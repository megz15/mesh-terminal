import { envVars } from "$lib/system.svelte";
import { getTheme } from "$lib/theme.svelte";

export default function cowsay(args: string[]): string {
    let cowText: string = "moooOoooOo";
    const theme = getTheme();
    
    if (args.length > 0) {
        cowText = args.join(" ");

        if (args[0][0] == "$") {
            const envVar: string = args[0].slice(1);
            if (envVars[envVar]) {
                cowText = envVars[envVar];
            }
        }
    }

    return `
<span class="${theme.text.secondary}">(</span>${cowText}<span class="${theme.text.secondary}">)</span>
   <span class="${theme.text.secondary}">|</span>         <span class="${theme.text.warning}">^__^</span>
   <span class="${theme.text.secondary}">\\_______</span> <span class="${theme.text.warning}"> (oO)\\_______</span>
             <span class="${theme.text.warning}">(__)\\       )<span class="${theme.text.warning}">\\/\\</span></span>
             <span class="${theme.text.warning}">   ||----<span class="${theme.text.warning}">w</span> |</span>
   <span class="${theme.text.success}">^^ ^^^  ^^</span>   ||     ||`;
}
import { envVars } from "$lib/system.svelte";

export default function cowsay(args: string[]): string {
    let cowText: string = "moooOoooOo";
    
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
<span class="text-gray-200">(</span>${cowText}<span class="text-gray-200">)</span>
   <span class="text-gray-200">|</span>         <span class="text-yellow-400">^__^</span>
   <span class="text-gray-200">\\_______</span> <span class="text-yellow-400"> (oO)\\_______</span>
             <span class="text-yellow-400">(__)\\       )<span class="text-yellow-400">\\/\\</span></span>
             <span class="text-yellow-400">   ||----<span class="text-yellow-400">w</span> |</span>
   <span class="text-green-400">^^ ^^^  ^^</span>   ||     ||`;
}
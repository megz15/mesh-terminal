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
(${cowText})
   │         ^__^
   ┕━━━━━━━  (oO)\\_______
             (__)\\       )\\/\\
                ||----w |
   ^^ ^^^  ^^   ||     ||`;
}
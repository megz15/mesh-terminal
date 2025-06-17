import { envVars } from "../system.svelte";

export default function echo(args: string[]): string {
    if (args.length === 0) {
        return "";
    }

    if (args[0][0] == "$") {
        const envVar: string = args[0].slice(1);
        if (envVars[envVar]) {
            return envVars[envVar];
        } else {
            return `echo: ${args[0]}: No such environment variable`;
        }
    }
        
    return args.join(" ");
}
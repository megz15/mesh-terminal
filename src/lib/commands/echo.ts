import { envVars } from "$lib/system.svelte"
import { getTheme } from "$lib/theme.svelte"

export default function echo(args: string[]): string {
    const theme = getTheme()
    if (args.length === 0) {
        return ""
    }

    if (args[0][0] == "$") {
        const envVar: string = args[0].slice(1)
        if (envVars[envVar]) {
            return envVars[envVar]
        } else {
            return `echo: No such environment variable: <span class="${theme.text.error}">${envVar}</span>`
        }
    }
        
    return args.join(" ")
}
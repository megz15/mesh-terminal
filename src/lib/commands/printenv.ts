import { envVars } from "$lib/system.svelte"
import { getTheme } from "$lib/theme.svelte"

export default function printenv(args: string[]): string {
    const theme = getTheme();
    return `System environment variables:
${Object.entries(envVars).map(
    ([envVar, val]) => `<span class="${theme.text.warning}">${envVar}</span>=${val}`
).join("\n")}`;
}
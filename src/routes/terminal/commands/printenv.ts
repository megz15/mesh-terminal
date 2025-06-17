import { envVars } from "../system.svelte"
export default function printenv(args: string[]): string {
    return `System environment variables:
${Object.entries(envVars).map(
    ([envVar, val]) => `<span class="text-yellow-400">${envVar}</span>=${val}`
).join("\n")}`;
}
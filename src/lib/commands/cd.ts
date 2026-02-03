import { getPromptText, userName, virtualFilesystem, workingDirectoryPath } from "$lib/system.svelte"
import { getTheme } from "$lib/theme.svelte"
import type { VirtualDirectory } from "$lib/types"

function printToOutputHistory(msg: string): void {
    const outputHistory = document.getElementById("outputHistory")
    outputHistory!.innerHTML += `</div><pre class="break-all whitespace-pre-wrap"> &gt&gt ${msg}</pre>`
}

export function updatePromptText(): void {
    const promptText = getPromptText()
    document.getElementById("prompt")!.innerHTML = promptText
}

export default function cd(args: string[]): string {
    const theme = getTheme()

    if (args.length != 0 && args[0] != ".") {
        if (args.length > 1) {
            printToOutputHistory(`cd: <span class="${theme.text.error}">too many arguments</span>`)
        } else if (args[0] == "..") {
            if (workingDirectoryPath.value == "/") {
            } else {
                workingDirectoryPath.value = workingDirectoryPath.value.split("/").slice(0, -1).join("/") || "/"
                updatePromptText()
            }
        } else {
            let requiredDir: VirtualDirectory = virtualFilesystem[""]
            let requiredDirPath = args[0]
            let pathExists = true

            if (workingDirectoryPath.value == "/") {
                requiredDirPath = `/${requiredDirPath}`
            }

            if (!requiredDirPath.startsWith("/") && workingDirectoryPath.value != "/") {
                requiredDirPath = `${workingDirectoryPath.value}/${requiredDirPath}`
            }

            if (requiredDirPath.includes("/.")) {
                printToOutputHistory(`cd: <span class="${theme.text.error}">Illegal action:</span> ${userName} is not in the sudoers file.\n<span class="${theme.text.error}">This incident will be reported.</span>`)
                return ""
            }

            requiredDirPath.split("/").slice(1).forEach((dir) => {
                if (requiredDir[dir]) {
                    requiredDir = requiredDir[dir] as VirtualDirectory
                } else {
                    pathExists = false
                }
            })

            if (requiredDirPath == "/") {
                pathExists = true
                requiredDir = virtualFilesystem[""]
            }

            if (!pathExists) {
                printToOutputHistory(`cd: not a directory: <span class="${theme.text.error}">${requiredDirPath}<span>`)
            } else {
                workingDirectoryPath.value = requiredDirPath
                updatePromptText()
            }
        }
    }
    return ""
}
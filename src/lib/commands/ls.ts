import { virtualFilesystem, workingDirectoryPath } from "$lib/system.svelte";
import { getTheme } from "$lib/theme.svelte";
import type { VirtualDirectory } from "$lib/types";

export default function ls(args: string[]): string {
    let requiredDir: VirtualDirectory = virtualFilesystem[""];
    let requiredDirPath = workingDirectoryPath.value;
    let pathExists = true;
    
    if (args.length != 0) {
        requiredDirPath = args.at(-1)!;

        if (!requiredDirPath.startsWith("/")) {
            requiredDirPath = `${workingDirectoryPath.value}/${requiredDirPath}`;
        }
    }

    requiredDirPath.split("/").slice(1).forEach((dir) => {
        if (requiredDir[dir]) {
            requiredDir = requiredDir[dir] as VirtualDirectory;
        } else {
            pathExists = false;
        }
    });

    if (requiredDirPath == "/") {
        pathExists = true;
        requiredDir = virtualFilesystem[""];
    }
    
    if (!pathExists) {
        const theme = getTheme();
        return `ls: cannot access '${requiredDirPath}': <span class="${theme.text.error}">No such file or directory</span>`;
    } else return ["", ".", "..", ...Object.keys(requiredDir).filter(dir => dir != "files"), ...requiredDir.files || []].join("\n");
}
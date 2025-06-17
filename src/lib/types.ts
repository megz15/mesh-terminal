export type VirtualDirectory = {
    files?: string[];
    [subdir: string]: VirtualDirectory | string[] | undefined;
};

export type VirtualFilesystem = {
    [dir: string]: VirtualDirectory;
};
export type VirtualDirectory = {
    files?: string[];
    [subdir: string]: VirtualDirectory | string[] | undefined;
};

export type VirtualFilesystem = {
    [dir: string]: VirtualDirectory;
};

export type Theme = {
    text: {
        primary: string;
        secondary: string;
        username: string;
        path: string;
        success: string;
        error: string;
        warning: string;
        info: string;
    };
    bg: {
        primary: string;
        cursor: string;
        topBar: string;
        topBarBorder: string;
    };
    components: {
        topBarText: string;
        keyboardBorder: string;
        keyboardBg: string;
    };
}

export type Track = {
    title: string;
    artist: string;
    album: string;
    buy_urls: string;
}
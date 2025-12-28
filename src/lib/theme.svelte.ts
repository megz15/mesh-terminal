export interface Theme {
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

export const themes: Record<string, Theme> = {
    default: {
        text: {
            primary: "text-gray-200",
            secondary: "text-gray-400",
            username: "text-yellow-400",
            path: "text-blue-400",
            success: "text-green-400",
            error: "text-red-400",
            warning: "text-yellow-400",
            info: "text-green-200",
        },
        bg: {
            primary: "bg-gray-900",
            cursor: "bg-gray-300",
            topBar: "bg-neutral-950",
            topBarBorder: "border-gray-500",
        },
        components: {
            topBarText: "text-gray-500",
            keyboardBorder: "border-gray-400",
            keyboardBg: "bg-neutral-950",
        },
    },
    dark: {
        text: {
            primary: "text-gray-100",
            secondary: "text-gray-500",
            username: "text-cyan-400",
            path: "text-purple-400",
            success: "text-green-400",
            error: "text-red-500",
            warning: "text-orange-400",
            info: "text-sky-300",
        },
        bg: {
            primary: "bg-black",
            cursor: "bg-white",
            topBar: "bg-gray-900",
            topBarBorder: "border-gray-700",
        },
        components: {
            topBarText: "text-gray-400",
            keyboardBorder: "border-gray-600",
            keyboardBg: "bg-gray-900",
        },
    }
};

export let currentTheme: { value: Theme } = $state({ value: themes["default"] });

export function setTheme(themeName: string): boolean {
    if (themeName in themes) {
        currentTheme.value = themes[themeName];
        return true;
    }
    return false;
}

export function getTheme(): Theme {
    return currentTheme.value;
}

export function getAvailableThemes(): string[] {
    return Object.keys(themes);
}

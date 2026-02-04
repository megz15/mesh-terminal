import type { Theme } from "./types";

export const themes: Record<string, Theme> = {
    default: {
        name: "default",
        text: {
            primary: "text-green-400",
            secondary: "text-gray-200",
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
        name: "dark",
        text: {
            primary: "text-gray-100",
            secondary: "text-gray-500",
            username: "text-purple-400",
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
    },
    light: {
        name: "light",
        text: {
            primary: "text-gray-900",
            secondary: "text-gray-600",
            username: "text-blue-600",
            path: "text-purple-600",
            success: "text-green-600",
            error: "text-red-600",
            warning: "text-orange-500",
            info: "text-sky-600",
        },
        bg: {
            primary: "bg-white",
            cursor: "bg-gray-800",
            topBar: "bg-gray-100",
            topBarBorder: "border-gray-300",
        },
        components: {
            topBarText: "text-gray-600",
            keyboardBorder: "border-gray-400",
            keyboardBg: "bg-gray-50",
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

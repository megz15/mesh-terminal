import { getTheme } from "$lib/theme.svelte"

export default function man(): string {
    const theme = getTheme();
    return `<span class="${theme.text.error}">man has been deprecated.</span>
    \nIn an effort to encourage more meaningful and inclusive language in the MESh project,\nwe have replaced the term \"man\" with \"person\". Better yet, just Google it.
    \nSee: <a class="${theme.text.info} underline" href="https://sfconservancy.org/news/2020/jun/23/gitbranchname/">https://sfconservancy.org/news/2020/jun/23/gitbranchname/</a> for inspiration.
    \n`;
}
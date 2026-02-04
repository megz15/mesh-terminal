import { getTheme } from "$lib/theme.svelte"

export default function cal(args: string[]): string {
    const theme = getTheme();
    const now = new Date();
    let month = now.getMonth();
    
    const month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day_names = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    if (args.length != 0) {
        month = month_names.findIndex(m => m.toLowerCase() === args[0].toLowerCase());
        if (month === -1) {
            return `<span class="${theme.text.error} font-semibold">cal: invalid month "${args[0]}"</span>`;
        }
    }

    const total_days = new Date(now.getFullYear(), month + 1, 0).getDate();
    const first_day = new Date(now.getFullYear(), month, 1).getDay();

    let result = `${month_names[month]} ${now.getFullYear()}\n`;
    result += `${day_names.join(" ")}\n`;
    
    let day_output = "";
    for (let i = 0; i < first_day; i++) {
        day_output += "   ";
    }
    
    for (let day = 1; day <= total_days; day++) {
        const isToday = day === now.getDate() && month === now.getMonth();
        const dayStr = day.toString().padStart(2, " ");
        const span = isToday 
            ? `<span class="${theme.bg.topBar} ${theme.text.warning} font-semibold">${dayStr}</span>` 
            : `<span class="${theme.text.primary}">${dayStr}</span>`;
        
        day_output += span + " ";
        
        if ((first_day + day) % 7 === 0) {
            day_output += "\n";
        }
    }
    
    return result + day_output;
}
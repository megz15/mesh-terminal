import hal from "$lib/assets/hal.webp";

export default function sudo(args: string[]): string {
    if (args.length == 0) {
        return "sudo: no command specified";
    } else {
        return `<img src='${hal}' alt='HAL 9000' class="w-24 h-24 m-2" />
    <span class="text-red-400">"I'm sorry, Dave. I'm afraid I can't do that."</span>
    \n`;
    }
}
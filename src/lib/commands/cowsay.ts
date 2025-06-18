export default function cowsay(args: string[]): string {
    return `
(${args.join(" ")})
   │         ^__^
   ┕━━━━━━━  (oo)\\_______
             (__)\\       )\\/\\
                ||----w |
                ||     ||`;
}
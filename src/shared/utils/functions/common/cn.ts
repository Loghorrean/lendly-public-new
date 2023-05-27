export function cn(...classNames: Array<string | undefined>): string {
    const classes = classNames.filter(className => className !== undefined).join(" ");
    return classes.replace(/\s+/g, " ").trim();
}

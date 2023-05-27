export function sleep(timeout: number) {
    return new Promise(res => {
        setTimeout(res, timeout);
    });
}

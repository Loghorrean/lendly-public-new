export const throttle = (callback: (...args: any) => any, delay = 5) => {
    let currentTime = new Date();
    return () => {
        const now = new Date();
        if (now.getSeconds() - delay >= currentTime.getSeconds()) {
            callback();
            currentTime = now;
        }
    };
};

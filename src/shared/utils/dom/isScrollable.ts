export const isScrollable = (element: HTMLElement): boolean => {
    const isOverflowing = element.clientHeight < element.scrollHeight;
    const overflowYStyle = element.style.overflowY;
    return isOverflowing && overflowYStyle.indexOf("hidden") !== 1;
};

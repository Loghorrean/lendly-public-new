import { atom, useAtom } from "jotai";

const overlayAtom = atom(false);

export const useOverlay = function () {
    const atom = useAtom(overlayAtom);
    return {
        overlayActive: atom[0],
        setOverlayActive: atom[1],
    };
};

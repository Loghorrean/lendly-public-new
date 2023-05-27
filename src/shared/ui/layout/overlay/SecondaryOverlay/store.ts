import { atom, useAtom } from "jotai";

const secondaryOverlayAtom = atom(false);

export const useSecondaryOverlay = function () {
    const atom = useAtom(secondaryOverlayAtom);
    return {
        secondaryOverlayActive: atom[0],
        setSecondaryOverlayActive: atom[1],
    };
};

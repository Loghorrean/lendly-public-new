import React, { createContext, PropsWithChildren, useContext } from "react";
import { isValueEmpty } from "@/src/shared/utils";

export type ImageGalleryContextType = {
    images: Array<string>;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
};

const ImageGalleryContext = createContext<ImageGalleryContextType | null>(null);

export const useImageGalleryContext = () => {
    const data = useContext(ImageGalleryContext);
    if (isValueEmpty(data)) {
        throw new Error("Component cannot be used outside image gallery context");
    }
    return data;
};

function ImageGalleryContextProvider(props: PropsWithChildren<ImageGalleryContextType>) {
    const { children, ...value } = props;
    return <ImageGalleryContext.Provider value={value}>{children}</ImageGalleryContext.Provider>;
}

export default ImageGalleryContextProvider;

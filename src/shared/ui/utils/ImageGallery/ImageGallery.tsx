"use client";

import ImageGalleryIndicator from "./composables/ImageGalleryIndicator";
import { ReactNode, useState } from "react";
import styles from "./ImageGallery.module.scss";
import ImageGalleryContextProvider, { ImageGalleryContextType } from "./context/ImageGalleryContext";
import ImageGalleryImages from "./composables/ImageGalleryImages";
import { BlockProps, cn } from "@/src/shared/utils";

interface Props extends BlockProps {
    images: Array<string>;
    children: ReactNode;
}

const ImageGallery = ({ images, children, ...props }: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const contextValue: ImageGalleryContextType = {
        images,
        activeIndex,
        setActiveIndex,
    };
    return (
        <ImageGalleryContextProvider {...contextValue}>
            <div {...props} className={cn(styles.image_gallery, props.className)}>
                {children}
            </div>
        </ImageGalleryContextProvider>
    );
};

ImageGallery.Indicator = ImageGalleryIndicator;
ImageGallery.Images = ImageGalleryImages;

export default ImageGallery;

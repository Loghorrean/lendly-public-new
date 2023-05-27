import { FC } from "react";
import styles from "./ImageGalleryIndicator.module.scss";
import { useImageGalleryContext } from "../../context/ImageGalleryContext";
import { BlockProps, cn } from "@/src/shared/utils";

const ImageGalleryIndicator: FC<BlockProps> = ({ ...props }) => {
    const { images, activeIndex } = useImageGalleryContext();
    const renderParts = () => {
        const parts = [];
        for (let i = 0; i < images.length; ++i) {
            parts.push(<div key={i} data-active={i === activeIndex}></div>);
        }
        return parts;
    };
    return (
        <div {...props} className={cn(styles.image_gallery_indicator, props.className)}>
            {images.length > 1 && renderParts()}
        </div>
    );
};

export default ImageGalleryIndicator;

import { useImageGalleryContext } from "../../context/ImageGalleryContext";
import React, { useMemo } from "react";
import styles from "./ImageGalleryImages.module.scss";
import ProjectImage from "@/src/shared/ui/images/ProjectImage";

const ImageGalleryImages = () => {
    const { images, activeIndex, setActiveIndex } = useImageGalleryContext();
    const renderParts = () => {
        const parts = [];
        for (let i = 0; i < images.length; ++i) {
            parts.push(<div key={i} onMouseEnter={() => setActiveIndex(i)}></div>);
        }
        return parts;
    };
    //TODO: MOVE IMAGE DECLARATION OUTSIDE
    const activeImage = useMemo(() => {
        return <ProjectImage src={images[activeIndex]} alt="Image" fill sizes="100%" />;
    }, [activeIndex]);
    return (
        <div className={styles.image_gallery_images} onMouseLeave={() => setActiveIndex(0)}>
            {activeImage}
            <div className={styles.image_gallery_images__overlay}>{renderParts()}</div>
        </div>
    );
};

export default ImageGalleryImages;

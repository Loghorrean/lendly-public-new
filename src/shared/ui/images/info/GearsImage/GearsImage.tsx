import gearsImage from "@/public/images/landing/gears-image.png";
import {ProjectImage} from "@/src/shared/ui/images";
import styles from "./GearsImage.module.scss";
import {ImageProps} from "next/image";
import {cn} from "@/src/shared/utils";

type Props = Omit<ImageProps, "src" | "alt">

const GearsImage = ({ ...props }: Props) => {
    return (
        <ProjectImage
            {...props}
            src={gearsImage}
            alt="Gears image"
            className={cn(styles.gears_image, props.className)}
        />
    );
}

export default GearsImage;

import {ImageProps} from "next/image";
import gearsImage from "@/public/images/content/gears-image.png";
import {ProjectImage} from "@/src/shared/ui/images";
import {cn} from "@/src/shared/utils";
import styles from "./GearsImage.module.scss";

type Props = Omit<ImageProps, "alt" | "src">;

const GearsImage = ({ ...props }: Props) => {
    return (
        <ProjectImage
            {...props}
            src={gearsImage}
            alt="Gears Image"
            className={cn(styles.gears_image, props.className)}
        />
    );
}

export default GearsImage;

import {ProjectImage} from "@/src/shared/ui/images";
import {ImageProps} from "next/image";
import clockImage from "@/public/images/content/clock-image.png";
import styles from "./ClockImage.module.scss";
import {cn} from "@/src/shared/utils";

type Props = Omit<ImageProps, "src" | "alt">;

const ClockImage = ({ ...props }: Props) => {
    return (
        <ProjectImage
            {...props}
            src={clockImage}
            alt="Clock Image"
            className={cn(styles.clock_image, props.className)}
        />
    );
}

export default ClockImage;

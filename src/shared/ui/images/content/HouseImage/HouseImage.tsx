import {ProjectImage} from "@/src/shared/ui/images";
import {ImageProps} from "next/image";
import houseImage from "@/public/images/content/house-image.png";
import styles from "./HouseImage.module.scss";
import {cn} from "@/src/shared/utils";

type Props = Omit<ImageProps, "src" | "alt">

const HouseImage = ({ ...props }: Props) => {
    return (
        <ProjectImage
            {...props}
            src={houseImage}
            alt="House Image"
            className={cn(styles.house_image, props.className)}
        />
    );
}

export default HouseImage;

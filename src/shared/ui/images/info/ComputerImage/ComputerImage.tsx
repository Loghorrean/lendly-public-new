import {ImageProps} from "next/image";
import computerImage from "@/public/images/landing/macbook-image.png";
import {cn} from "@/src/shared/utils";
import styles from "./ComputerImage.module.scss";
import {ProjectImage} from "@/src/shared/ui/images";

type Props = Omit<ImageProps, "src" | "alt">

const ComputerImage = ({ ...props }: Props) => {
    return (
        <ProjectImage
            {...props}
            src={computerImage}
            alt="Computer image"
            className={cn(styles.computer_image, props.className)}
        />
    );
}

export default ComputerImage;

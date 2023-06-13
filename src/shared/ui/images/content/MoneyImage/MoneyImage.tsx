import {ImageProps} from "next/image";
import {ProjectImage} from "@/src/shared/ui/images";
import moneyImage from "@/public/images/content/money-image.png";
import {cn} from "@/src/shared/utils";
import styles from "./MoneyImage.module.scss";

type Props = Omit<ImageProps, "src" | "alt">;

const MoneyImage = ({ ...props }: Props) => {
    return (
        <ProjectImage
            {...props}
            src={moneyImage}
            alt="Money Image"
            className={cn(styles.money_image, props.className)}
        />
    );
}

export default MoneyImage;

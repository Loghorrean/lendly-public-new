import portfolioImage from "@/public/images/content/portfolio-image.png";
import {ImageProps} from "next/image";
import {ProjectImage} from "@/src/shared/ui/images";
import styles from "./PortfolioImage.module.scss";
import {cn} from "@/src/shared/utils";

type Props = Omit<ImageProps, "src" | "alt">;

const PortfolioImage = ({ ...props }: Props) => {
    return (
        <ProjectImage
            {...props}
            src={portfolioImage}
            alt="Portfolio Image"
            className={cn(styles.portfolio_image, props.className)}
        />
    );
}

export default PortfolioImage;

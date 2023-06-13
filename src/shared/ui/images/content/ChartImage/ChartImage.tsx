import chartImage from "@/public/images/content/chart-image.png";
import styles from "./ChartImage.module.scss";
import {ProjectImage} from "@/src/shared/ui/images";
import {ImageProps} from "next/image";
import {cn} from "@/src/shared/utils";

type Props = Omit<ImageProps, "src" | "alt">;

const ChartImage = ({ ...props }: Props) => {
    return (
        <ProjectImage
            {...props}
            src={chartImage}
            alt="Chart Image"
            className={cn(styles.chart_image, props.className)}
        />
    );
}

export default ChartImage;

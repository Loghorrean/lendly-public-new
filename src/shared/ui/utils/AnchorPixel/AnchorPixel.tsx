import styles from "./AnchorPixel.module.scss";
import {BlockProps, cn} from "@/src/shared/utils";

const AnchorPixel = ({ id, ...props }: BlockProps) => {
    return (
        <div {...props} id={id} className={cn(styles.anchor_pixel, props.className)}></div>
    );
}

export default AnchorPixel;

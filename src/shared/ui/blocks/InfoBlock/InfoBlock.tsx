import {BlockProps, cn} from "@/src/shared/utils";
import styles from "./InfoBlock.module.scss";

const InfoBlock = ({ ...props }: BlockProps) => {
    return (
        <div {...props} className={cn(styles.info_block, props.className)}>
            { props.children }
        </div>
    );
}

export default InfoBlock;

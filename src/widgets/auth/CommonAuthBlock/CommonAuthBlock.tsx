import {BlockProps, cn} from "@/src/shared/utils";
import styles from "./CommonAuthBlock.module.scss";

const CommonAuthBlock = ({ ...props }: BlockProps) => {
    return (
        <section {...props} className={cn(styles.common_auth_block, props.className)}>
            { props.children }
        </section>
    );
}

export default CommonAuthBlock;

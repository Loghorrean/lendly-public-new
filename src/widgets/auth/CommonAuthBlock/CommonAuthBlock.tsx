import {BlockProps, cn} from "@/src/shared/utils";
import styles from "./CommonAuthBlock.module.scss";
import AuthLinks from "@/src/widgets/auth/AuthLinks";

const CommonAuthBlock = ({ ...props }: BlockProps) => {
    return (
        <section {...props} className={cn(styles.common_auth_block, props.className)}>
            <div className={styles.common_auth_block__links}>
                <AuthLinks />
            </div>
            { props.children }
        </section>
    );
}

export default CommonAuthBlock;

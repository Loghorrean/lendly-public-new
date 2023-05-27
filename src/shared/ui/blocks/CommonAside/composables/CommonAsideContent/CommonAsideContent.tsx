import styles from "./CommonAsideContent.module.scss";
import { BlockProps, cn } from "@/src/shared/utils";

const CommonAsideContent = ({ children, ...props }: BlockProps) => {
    return (
        <div {...props} className={cn(styles.common_aside_content, props.className)}>
            {children}
        </div>
    );
};

export default CommonAsideContent;

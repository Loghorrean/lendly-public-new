import styles from "./SmallAside.module.scss";
import { cn } from "@/src/shared/utils";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import { CommonBlockProps } from "@/src/shared/ui/blocks/CommonBlock/CommonBlock";

const SmallAside = ({ children, ...props }: Omit<CommonBlockProps<"aside">, "as">) => {
    return (
        <CommonBlock as="aside" {...props} className={cn(styles.small_aside, props.className)}>
            {children}
        </CommonBlock>
    );
};

export default SmallAside;

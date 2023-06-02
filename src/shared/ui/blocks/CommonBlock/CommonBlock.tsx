import {cn, PolymorphicBlockProps, resultIf} from "@/src/shared/utils";
import styles from "./CommonBlock.module.scss";
import { ElementType } from "react";

export type CommonBlockProps<T extends ElementType> = PolymorphicBlockProps<T> & {
    first?: boolean;
};

function CommonBlock<T extends ElementType = "div">({ as, first = false, children, ...props }: CommonBlockProps<T>) {
    const Component = as ?? "div";
    return (
        <Component
            {...props}
            className={cn(styles.common_block, resultIf(first, styles.common_block___first), props.className)}
        >
            {children}
        </Component>
    );
}

export default CommonBlock;

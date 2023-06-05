import {BlockProps, cn} from "@/src/shared/utils";
import React, {ForwardedRef} from "react";
import styles from "./ParallaxBlock.module.scss";

type Props = BlockProps;

const ParallaxBlock = ({ ...props }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div
            {...props}
            className={cn(styles.parallax_block, props.className)}
            ref={ref}
            style={{marginTop: "initial"}}
        >
            { props.children }
        </div>
    );
}

export default React.forwardRef(ParallaxBlock);

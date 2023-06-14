import React, { FC, PropsWithChildren } from "react";
import styles from "./Content.module.scss";
import { BlockProps, cn, ObjectValues } from "@/src/shared/utils";

export const CONTENT_TYPE = {
    BASIC: styles.content___basic,
    NO_HEADER: styles.content___no_header,
    NO_FOOTER: styles.content___no_footer
} as const;

export type ContentType = ObjectValues<typeof CONTENT_TYPE>;

type Props = BlockProps & {
    type?: ContentType;
};

const Content: FC<PropsWithChildren<Props>> = ({ type = CONTENT_TYPE.BASIC, children, ...props }) => {
    return (
        <div {...props} className={cn(styles.content, type)}>
            {children}
        </div>
    );
};

export default Content;

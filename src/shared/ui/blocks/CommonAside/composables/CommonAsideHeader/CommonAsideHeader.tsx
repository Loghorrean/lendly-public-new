import styles from "./CommonAsideHeader.module.scss";
import React, { ReactElement } from "react";
import { BlockProps, cn, isNotEmpty } from "@/src/shared/utils";
import { useCommonAsideContext } from "@/src/shared/ui/blocks/CommonAside/context/CommonAsideContext";
import AsLink from "@/src/shared/ui/buttons/decorators/AsLink";
import { Button } from "@/src/shared/ui/buttons";

type Props = BlockProps & {
    closeButton?: ReactElement;
};

const CommonAsideHeader = ({ children, closeButton, ...props }: Props) => {
    const context = useCommonAsideContext();
    const CloseButton = isNotEmpty(closeButton) && (
        <AsLink>
            <Button onClick={context.onClose}>{closeButton}</Button>
        </AsLink>
    );
    return (
        <header {...props} className={cn(styles.common_aside_header, props.className)}>
            {CloseButton}
            <div className={styles.common_aside_header__heading}>{children}</div>
        </header>
    );
};

export default CommonAsideHeader;

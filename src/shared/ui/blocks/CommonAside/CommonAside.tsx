"use client";

import { useRef } from "react";
import styles from "./CommonAside.module.scss";
import { BlockProps, ClosableElementProps, cn, resultIf } from "@/src/shared/utils";
import CommonAsideHeader from "@/src/shared/ui/blocks/CommonAside/composables/CommonAsideHeader";
import CommonAsideContent from "@/src/shared/ui/blocks/CommonAside/composables/CommonAsideContent";
import CommonAsideContextProvider, {
    CommonAsideContextType,
} from "@/src/shared/ui/blocks/CommonAside/context/CommonAsideContext";
import { CSSTransition } from "react-transition-group";
import { useSecondaryOverlay } from "@/src/shared/ui/layout/overlay/SecondaryOverlay/store";

export type CommonAsideProps = BlockProps &
    ClosableElementProps & {
        withOverlay?: boolean;
        needExpanding?: boolean;
    };

const CommonAside = ({ children, active, onClose, needExpanding = true, ...props }: CommonAsideProps) => {
    const { secondaryOverlayActive } = useSecondaryOverlay();
    const value: CommonAsideContextType = {
        active,
        onClose,
    };
    const nodeRef = useRef(null);
    return (
        <CommonAsideContextProvider {...value}>
            <CSSTransition
                in={active}
                timeout={250}
                classNames={{
                    enter: styles.common_aside___enter,
                    enterActive: styles.common_aside___enter_active,
                    enterDone: styles.common_aside___enter_done,
                    exit: styles.common_aside___exit,
                    exitActive: styles.common_aside___exit_active,
                    exitDone: styles.common_aside___exit_done,
                }}
                mountOnEnter
                unmountOnExit
            >
                <aside
                    ref={nodeRef}
                    {...props}
                    className={cn(
                        styles.common_aside,
                        resultIf(secondaryOverlayActive && needExpanding, styles.common_aside___expanded),
                        props.className
                    )}
                >
                    {children}
                </aside>
            </CSSTransition>
        </CommonAsideContextProvider>
    );
};

CommonAside.Header = CommonAsideHeader;
CommonAside.Content = CommonAsideContent;

export default CommonAside;

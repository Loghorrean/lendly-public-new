"use client";

import { ElementType, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import styles from "./Tooltip.module.scss";
import { CSSTransition } from "react-transition-group";
import TooltipContextProvider from "./context/TooltipContext";
import { cn, ObjectValues, PolymorphicBlockPropsWithRef, useHandleOutsideClick } from "@/src/shared/utils";

//TODO: RESOLVE TOOLTIP DIRECTION STYLING
export const TOOLTIP_DIRECTION = {
    LEFT: "LEFT",
    LEFT_TOP: "LEFT_TOP",
    TOP: "TOP",
    RIGHT_TOP: "RIGHT_TOP",
    RIGHT: "RIGHT",
    RIGHT_BOTTOM: "RIGHT_BOTTOM",
    BOTTOM: "BOTTOM",
    LEFT_BOTTOM: "LEFT_BOTTOM",
} as const;

export type TooltipDirection = ObjectValues<typeof TOOLTIP_DIRECTION>;

const tooltipDirectionMap: Record<TooltipDirection, string> = {
    [TOOLTIP_DIRECTION.LEFT]: styles.tooltip__content___left,
    [TOOLTIP_DIRECTION.LEFT_TOP]: styles.tooltip__content___left_top,
    [TOOLTIP_DIRECTION.TOP]: styles.tooltip__content___top,
    [TOOLTIP_DIRECTION.RIGHT_TOP]: styles.tooltip__content___right_top,
    [TOOLTIP_DIRECTION.RIGHT]: styles.tooltip__content___right,
    [TOOLTIP_DIRECTION.RIGHT_BOTTOM]: styles.tooltip__content___right_bottom,
    [TOOLTIP_DIRECTION.BOTTOM]: styles.tooltip__content___bottom,
    [TOOLTIP_DIRECTION.LEFT_BOTTOM]: styles.tooltip__content___left_bottom,
};

//TODO: RESOLVE INHERITED PROPS ISSUE
type Props<T extends ElementType> = PolymorphicBlockPropsWithRef<T> & {
    tooltipContent: ReactNode;
    delay?: number;
    direction?: TooltipDirection;
};

const Tooltip = <T extends ElementType = "div">({
    as,
    children,
    tooltipContent,
    delay = 250,
    direction = TOOLTIP_DIRECTION.BOTTOM,
    ...props
}: Props<T>) => {
    const Component = as || "div";
    const [active, setActive] = useState(false);
    const timeoutRef = useRef(0);
    const activeTimeoutRef = useRef(0);
    const ref = useRef<HTMLElement | null>(null);
    const handleOutsideClick = useCallback(() => {
        setActive(false);
        clearTimeout(timeoutRef.current);
    }, []);
    const handleClick = useHandleOutsideClick(handleOutsideClick, ref);

    useEffect(() => {
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);

    const onHover = () => {
        clearTimeout(timeoutRef.current);
        activeTimeoutRef.current = window.setTimeout(() => {
            setActive(true);
        }, delay * 2);
    };

    const onLeave = () => {
        clearTimeout(activeTimeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
            setActive(false);
        }, delay);
    };

    return (
        <TooltipContextProvider active={active} setActive={setActive} direction={direction}>
            <Component
                {...props}
                className={cn(styles.tooltip, props.className)}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                ref={ref}
            >
                {children}
                <CSSTransition
                    in={active}
                    timeout={250}
                    classNames={{
                        enter: styles.tooltip__content___enter,
                        enterActive: styles.tooltip__content___enter_active,
                        enterDone: styles.tooltip__content___enter_done,
                        exit: styles.tooltip__content___exit,
                        exitActive: styles.tooltip__content___exit_active,
                        exitDone: styles.tooltip__content___exit_done,
                    }}
                    mountOnEnter
                    unmountOnExit
                >
                    <div
                        className={cn(styles.tooltip__content, tooltipDirectionMap[direction as TooltipDirection])}
                        style={{ transitionDuration: `${250}ms` }}
                    >
                        {tooltipContent}
                    </div>
                </CSSTransition>
            </Component>
        </TooltipContextProvider>
    );
};

export default Tooltip;

import React, { AllHTMLAttributes, PropsWithChildren, ReactNode, useCallback, useEffect, useId, useRef } from "react";
import styles from "./OptionBox.module.scss";
import { OptionBoxContent, OptionBoxHead } from "./composables";
import { cn, Nullable, useHandleOutsideClick, useToggle } from "@/src/shared/utils";
import OptionBoxContextProvider, {
    OptionBoxContextType,
} from "@/src/shared/ui/select/OptionBox/context/OptionBoxContext";

export interface OptionBoxProps<T = unknown> extends AllHTMLAttributes<HTMLDivElement> {
    options: Array<T>;
    selectedOption: Nullable<T>;
    renderOption?: (option: T) => ReactNode | undefined;
    renderHeadOption?: (option: T) => ReactNode | undefined;
}

//TODO IMPROVE ACCESSIBILITY
//TODO: ADD SEARCH OPTION
const OptionBox = <T,>({
    options,
    selectedOption,
    renderOption,
    renderHeadOption,
    children,
    ...props
}: PropsWithChildren<OptionBoxProps<T>>) => {
    const [active, toggle, setActive] = useToggle();
    const id = useId();
    const ref = useRef<HTMLDivElement | null>(null);
    const handleClick = useHandleOutsideClick(() => setActive(false), ref);

    const renderCurrentOption =
        renderOption !== undefined ? renderOption : (option: T) => option as unknown as ReactNode;

    const value: OptionBoxContextType<T> = {
        options: options,
        selectedOption: selectedOption,
        render: renderCurrentOption,
        renderHead: renderHeadOption !== undefined ? renderHeadOption : renderCurrentOption,
        active: active,
        toggle,
        setActive,
        id,
    };

    const handleKeyPress = useCallback(
        (e: KeyboardEvent) => {
            if (active && e.key === "Escape") {
                setActive(false);
            }
        },
        [active]
    );

    useEffect(() => {
        if (active) {
            window.addEventListener("click", handleClick);
            window.addEventListener("keydown", handleKeyPress);
        }
        return () => {
            window.removeEventListener("click", handleClick);
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [active]);

    return (
        <OptionBoxContextProvider props={value}>
            <div {...props} className={cn(styles.option_box, props.className)} ref={ref}>
                {children}
            </div>
        </OptionBoxContextProvider>
    );
};

OptionBox.Head = OptionBoxHead;
OptionBox.Content = OptionBoxContent;

export default OptionBox;

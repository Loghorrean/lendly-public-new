import React, { AllHTMLAttributes, PropsWithChildren, ReactNode, SyntheticEvent, useEffect, useRef } from "react";
import styles from "./OptionBoxHead.module.scss";
import { OptionBoxContextType, useOptionBoxContext } from "@/src/shared/ui/select/OptionBox/context/OptionBoxContext";
import {cn, isValueEmpty, resultIf} from "@/src/shared/utils";
import { DropdownArrowButton } from "@/src/shared/ui/utils";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

interface Props extends AllHTMLAttributes<HTMLDivElement> {
    placeholder?: string | undefined;
    ArrowElement?: React.FC<SvgProps>;
}

const OptionBoxHead = <T,>({ placeholder, children, ArrowElement, ...props }: PropsWithChildren<Props>) => {
    const headRef = useRef<HTMLDivElement | null>(null);
    const { selectedOption, renderHead, active, toggle, setActive, id }: OptionBoxContextType<T> =
        useOptionBoxContext<T>();
    const renderSelectedOption = (): ReactNode => {
        if (children !== undefined) {
            return children;
        }
        if (selectedOption !== null) {
            return renderHead(selectedOption);
        }
        return placeholder ?? "Choose";
    };
    const handleClick = (event: SyntheticEvent) => {
        event.preventDefault();
        event.stopPropagation();
        toggle();
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const activeElement = document.activeElement;
            if (event.code === "Space" && activeElement === headRef.current) {
                toggle();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <header
            ref={headRef}
            aria-controls={id}
            aria-haspopup="listbox"
            role="combobox"
            {...props}
            className={cn(styles.option_box__head, props.className)}
            onMouseDown={handleClick}
            onBlur={() => setActive(false)}
            tabIndex={0}
            aria-expanded={active}
        >
            <span
                className={cn(
                    styles.option_box__selected,
                    resultIf(isValueEmpty(selectedOption), styles.option_box__placeholder)
                )}
            >
                {renderSelectedOption()}
            </span>
            <DropdownArrowButton active={active} ArrowElement={ArrowElement} />
        </header>
    );
};

export default OptionBoxHead;

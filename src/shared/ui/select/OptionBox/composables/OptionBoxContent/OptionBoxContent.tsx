import React, { AllHTMLAttributes, ReactNode, useRef } from "react";
import styles from "./OptionBoxContent.module.scss";
import { CSSTransition } from "react-transition-group";
import { useOptionBoxContext } from "@/src/shared/ui/select/OptionBox/context/OptionBoxContext";
import { cn, isNotEmpty, isScrollable, useEffectOnUpdate } from "@/src/shared/utils";
import { maintainScrollVisibility } from "@/src/shared/utils/dom";

interface Props<T> extends AllHTMLAttributes<HTMLDivElement> {
    onSelected: (selected: T) => void;
}

//TODO IMPROVE ACCESSIBILITY
const OptionBoxContent = <T,>({ onSelected, ...props }: Props<T>) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const { setActive, selectedOption, options, active, render, id } = useOptionBoxContext<T>();

    const selectOption = (option: T): void => {
        onSelected(option);
        setActive(false);
    };

    const isSelected = (option: T): boolean => {
        return selectedOption === option;
    };

    const renderOptions = (): ReactNode => {
        if (options.length === 0) {
            return (
                <div className={cn(styles.option_box__item, styles.option_box__item___disabled)}>
                    No options are provided
                </div>
            );
        }
        return (
            <ul className={styles.option_box__list}>
                {options.map((option: T, index: number) => {
                    return (
                        <li
                            key={index}
                            role="option"
                            aria-selected={isSelected(option)}
                            onClick={() => selectOption(option)}
                            className={styles.option_box__item}
                        >
                            <span>{render(option)}</span>
                        </li>
                    );
                })}
            </ul>
        );
    };

    useEffectOnUpdate(() => {
        const element = contentRef.current!;
        const items = element.children[0].children;
        let currentItemIndex = 0;
        if (isNotEmpty(selectedOption)) {
            for (const current of items) {
                if (
                    current.innerHTML.toLowerCase() ===
                    (render(selectedOption) as NonNullable<ReactNode>).toString().toLowerCase()
                ) {
                    break;
                }
                ++currentItemIndex;
            }
        }
        if (active) {
            for (let i = 0; i < items.length; ++i) {
                (items[i] as HTMLElement).dataset.current = (i === currentItemIndex).toString();
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (!active) {
                return;
            }
            //TODO: REFACTOR
            if (event.code === "ArrowDown" && currentItemIndex + 1 <= items.length - 1) {
                (items[currentItemIndex] as HTMLElement).dataset.current = "false";
                (items[currentItemIndex + 1] as HTMLElement).dataset.current = "true";
                ++currentItemIndex;
                if (isScrollable(element)) {
                    maintainScrollVisibility(items[currentItemIndex] as HTMLElement, element);
                }
                return;
            }
            if (event.code === "ArrowUp" && currentItemIndex - 1 >= 0) {
                (items[currentItemIndex] as HTMLElement).dataset.current = "false";
                (items[currentItemIndex - 1] as HTMLElement).dataset.current = "true";
                --currentItemIndex;
                if (isScrollable(element)) {
                    maintainScrollVisibility(items[currentItemIndex] as HTMLElement, element);
                }
                return;
            }
            if (event.code === "Enter") {
                selectOption(options[currentItemIndex]);
                return;
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [active]);

    return (
        <CSSTransition
            in={active}
            timeout={500}
            classNames={{
                enter: styles.option_box__content___enter,
                enterActive: styles.option_box__content___enter_active,
                enterDone: styles.option_box__content___enter_done,
                exit: styles.option_box__content___exit,
                exitActive: styles.option_box__content___exit_active,
                exitDone: styles.option_box__content___exit_done,
            }}
        >
            <div
                {...props}
                id={id}
                className={cn(styles.option_box__content, props.className)}
                tabIndex={-1}
                role="listbox"
                ref={contentRef}
            >
                {renderOptions()}
            </div>
        </CSSTransition>
    );
};

export default OptionBoxContent;

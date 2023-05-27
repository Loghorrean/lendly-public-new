import React, { AllHTMLAttributes, ReactNode, useContext } from "react";
import { MultiSelectContext, MultiSelectContextType } from "../../context/MultiSelectContext";
import styles from "./MultiSelectContent.module.scss";
import { cn, resultIf } from "@/src/shared/utils";

interface Props<T> extends AllHTMLAttributes<HTMLDivElement> {
    onSelected: (selected: Array<T>) => void;
    compareOptions?: (first: T, second: T) => boolean;
}

const MultiSelectContent = <T,>({ onSelected, compareOptions, ...props }: Props<T>) => {
    const context: MultiSelectContextType<T> = useContext(MultiSelectContext);

    const isSelected = (option: T): boolean => {
        return context.selectedOptions.indexOf(option) > -1;
    };

    const handleSelect = (option: T) => {
        if (!isSelected(option)) {
            onSelected([...context.selectedOptions, option]);
            return;
        }
        const newOptions: T[] = context.selectedOptions.filter((filteredOption: T) => {
            return compareOptions === undefined ? filteredOption !== option : compareOptions(filteredOption, option);
        });
        onSelected(newOptions);
    };

    const renderOptions = (): ReactNode => {
        return context.options.map((option: T, index: number) => {
            return (
                <li
                    key={index}
                    className={cn(
                        styles.multi_select__element,
                        resultIf(isSelected(option), styles.multi_select__element___selected)
                    )}
                    onClick={() => handleSelect(option)}
                >
                    {context.render(option)}
                </li>
            );
        }, []);
    };

    return (
        <div
            {...props}
            className={cn(
                styles.multi_select__content,
                resultIf(context.active, styles.multi_select__content___active),
                props.className
            )}
        >
            <ul className={styles.multi_select__list}>{renderOptions()}</ul>
        </div>
    );
};

export default MultiSelectContent;

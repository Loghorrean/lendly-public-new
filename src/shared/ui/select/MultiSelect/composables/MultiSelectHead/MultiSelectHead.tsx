import React, { AllHTMLAttributes, PropsWithChildren, ReactNode, useContext } from "react";
import { MultiSelectContext, MultiSelectContextType } from "../../context/MultiSelectContext";
import styles from "./MultiSelectHead.module.scss";
import DropdownArrowButton from "@/src/shared/ui/utils/DropdownArrowButton";
import { cn } from "@/src/shared/utils";

interface Props extends AllHTMLAttributes<HTMLDivElement> {
    placeholder?: string | undefined;
}

const MultiSelectHead = <T,>({ placeholder, children, ...props }: PropsWithChildren<Props>) => {
    const context: MultiSelectContextType<T> = useContext(MultiSelectContext);
    const renderSelectedOptions = (): ReactNode => {
        if (children !== undefined) {
            return children;
        }
        if (context.selectedOptions.length > 0) {
            return <span>Selected: {context.selectedOptions.length}</span>;
        }
        return <span>{placeholder ?? "Choose elements"}</span>;
    };
    return (
        <div
            {...props}
            className={cn(styles.multi_select__head, props.className)}
            data-active={context.active}
            onClick={context.toggle}
        >
            {renderSelectedOptions()}
            <DropdownArrowButton active={context.active} />
        </div>
    );
};

export default MultiSelectHead;

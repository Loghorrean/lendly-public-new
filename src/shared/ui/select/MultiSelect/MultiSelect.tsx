import React, { PropsWithChildren, ReactNode, useEffect, useRef } from "react";
import styles from "./MultiSelect.module.scss";
import MultiSelectContextProvider, { MultiSelectContextType } from "./context/MultiSelectContext";
import { MultiSelectContent, MultiSelectHead } from "./composables";
import { useHandleOutsideClick, useToggle } from "@/src/shared/utils";

export type MultiSelectProps<T> = {
    options: Array<T>;
    selectedOptions: Array<T>;
    renderOption?: (option: T) => ReactNode | undefined;
};

const MultiSelect = <T,>({
    options,
    selectedOptions,
    renderOption,
    children,
}: PropsWithChildren<MultiSelectProps<T>>) => {
    const [active, toggle, setActive] = useToggle();

    const value: MultiSelectContextType<T> = {
        options: options,
        selectedOptions: selectedOptions,
        render: renderOption !== undefined ? renderOption : (option: T) => option as unknown as ReactNode,
        active: active,
        toggle: toggle,
    };

    const elem = useRef<HTMLDivElement | null>(null);

    const handleClick = useHandleOutsideClick(() => setActive(false), elem);

    const handleKeyPress = function (e: KeyboardEvent) {
        if (active && e.key === "Escape") {
            setActive(false);
        }
    };

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
        <MultiSelectContextProvider props={value}>
            <div className={styles.multi_select} ref={elem}>
                {children}
            </div>
        </MultiSelectContextProvider>
    );
};

MultiSelect.Head = MultiSelectHead;
MultiSelect.Content = MultiSelectContent;

export default MultiSelect;

import styles from "./SubPageToggle.module.scss";
import { AllHTMLAttributes, PropsWithChildren, useEffect, useRef } from "react";
import SubPageToggleContextProvider from "@/src/shared/ui/blocks/SubPageToggle/context/SubPageToggleContext";
import SubPageToggleElement from "@/src/shared/ui/blocks/SubPageToggle/composables/SubPageToggleElement";
import { cn } from "@/src/shared/utils";

interface Props<T extends string> extends AllHTMLAttributes<HTMLUListElement> {
    pages: Array<T>;
    activePage: T;
    setActivePage: (page: T) => void;
}

function SubPageToggle<T extends string>({
    children,
    activePage,
    setActivePage,
    ...props
}: PropsWithChildren<Props<T>>) {
    const ref = useRef<HTMLUListElement | null>(null);
    useEffect(() => {
        const arrowCallback = (event: KeyboardEvent) => {
            const focusedElement = document.activeElement;
            if (focusedElement === null) {
                return;
            }
            const isFocused = Array.from(ref.current!.children).includes(focusedElement);
            if (event.code === "ArrowRight" && isFocused) {
                (focusedElement.nextElementSibling as HTMLElement)?.focus();
            }
            if (event.code === "ArrowLeft" && isFocused) {
                (focusedElement.previousElementSibling as HTMLElement)?.focus();
            }
        };
        window.addEventListener("keydown", arrowCallback);
        return () => {
            window.removeEventListener("keydown", arrowCallback);
        };
    }, []);
    return (
        <SubPageToggleContextProvider activePage={activePage} setActivePage={setActivePage}>
            <ul {...props} ref={ref} className={cn(styles.common_sub_page_toggle, props.className)}>
                {children}
            </ul>
        </SubPageToggleContextProvider>
    );
}

SubPageToggle.Element = SubPageToggleElement;

export default SubPageToggle;

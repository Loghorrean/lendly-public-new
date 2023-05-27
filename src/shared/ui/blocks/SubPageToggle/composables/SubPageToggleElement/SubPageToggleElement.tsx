import styles from "./SubPageToggleElement.module.scss";
import { AllHTMLAttributes, useEffect, useRef } from "react";
import { cn } from "@/src/shared/utils";
import { useSubPageToggleContext } from "@/src/shared/ui/blocks/SubPageToggle/context/SubPageToggleContext";

interface Props extends AllHTMLAttributes<HTMLLIElement> {
    element: string;
    explicitActive?: boolean;
}

function SubPageToggleElement({ element, explicitActive = false, children, ...props }: Props) {
    const { activePage, setActivePage } = useSubPageToggleContext();
    const ref = useRef<HTMLLIElement | null>(null);
    useEffect(() => {
        //Space event
        const spaceCallback = (event: KeyboardEvent) => {
            if (event.code === "Space" && document.activeElement === ref.current) {
                setActivePage(element);
            }
        };
        window.addEventListener("keydown", spaceCallback);
        return () => {
            window.removeEventListener("keydown", spaceCallback);
        };
    }, []);
    return (
        <li
            {...props}
            ref={ref}
            className={cn(styles.sub_page_toggle_element, props.className)}
            onClick={() => setActivePage(element)}
            role="tab"
            aria-selected={activePage === element || explicitActive}
            tabIndex={0}
        >
            {children}
        </li>
    );
}

export default SubPageToggleElement;

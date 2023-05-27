import styles from "./CommonTable.module.scss";
import { ReactNode, useMemo } from "react";
import { BlockProps, cn } from "@/src/shared/utils";

type Props = BlockProps & {
    headings: Array<ReactNode>;
};

const CommonTable = ({ headings, children, ...props }: Props) => {
    const mapHeadings = useMemo(() => {
        return headings.map((heading, index) => (
            <div key={index} className={styles.common_table__header_element}>
                {heading}
            </div>
        ));
    }, [headings]);
    return (
        <div {...props} className={cn(styles.common_table, props.className)}>
            <header className={styles.common_table__header}>{mapHeadings}</header>
            <ul className={styles.common_table__content}>{children}</ul>
        </div>
    );
};

export default CommonTable;

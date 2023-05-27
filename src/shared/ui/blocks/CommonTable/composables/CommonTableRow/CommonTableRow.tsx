import styles from "./CommonTableRow.module.scss";
import { BlockProps, cn } from "@/src/shared/utils";

const CommonTableRow = ({ children, className, ...props }: BlockProps<HTMLLIElement>) => {
    return (
        <li {...props} className={cn(styles.common_table_row, className)}>
            {children}
        </li>
    );
};

export default CommonTableRow;

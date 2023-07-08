import styles from "./LoansHorizontalList.module.scss";
import FinancingProjectCard from "@/src/entities/project/ui/FinancingProjectCard";

const LoansHorizontalList = () => {
    return (
        <ul className={styles.loans_horizontal_list}>
            <FinancingProjectCard />
            <FinancingProjectCard />
            <FinancingProjectCard />
        </ul>
    );
}

export default LoansHorizontalList;

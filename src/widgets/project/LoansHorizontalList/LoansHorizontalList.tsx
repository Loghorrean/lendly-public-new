import styles from "./LoansHorizontalList.module.scss";
import FinancingProjectCard from "@/src/entities/project/ui/FinancingProjectCard";
import {useGetFinishedProjectsList} from "@/src/entities/project/hooks";
import {useMemo} from "react";
import {isNotEmpty} from "@/src/shared/utils";
import ReturnedLoanCard from "@/src/widgets/landing/ReturnedLoanCard";
import Loader from "@/src/shared/ui/loaders/Loader";

const LoansHorizontalList = () => {
    const getFinishedProjects = useGetFinishedProjectsList(
        3,
        {
            queryKey: ["finished-horizontal-loans"]
        }
    );
    const renderCards = useMemo(() => {
        if (getFinishedProjects.isLoading) {
            return <Loader dark />
        }
        if (isNotEmpty(getFinishedProjects.data)) {
            return getFinishedProjects.data.map(project => {
                return <FinancingProjectCard project={project} key={project.uuid} />
            });
        }
    }, [getFinishedProjects.data, getFinishedProjects.isLoading]);
    return (
        <ul className={styles.loans_horizontal_list}>
            { renderCards }
        </ul>
    );
}

export default LoansHorizontalList;

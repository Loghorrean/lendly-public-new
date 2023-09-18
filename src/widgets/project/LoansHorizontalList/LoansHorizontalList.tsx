import styles from "./LoansHorizontalList.module.scss";
import FinancingProjectCard from "@/src/entities/project/ui/FinancingProjectCard";
import {useGetFinishedProjectsList} from "@/src/entities/project/hooks";
import {useMemo} from "react";
import {isNotEmpty} from "@/src/shared/utils";
import Loader from "@/src/shared/ui/loaders/Loader";
import {PROJECT_TYPE} from "@/src/entities/project/model";

const LoansHorizontalList = () => {
    const getFinishedProjects = useGetFinishedProjectsList(
        3,
        PROJECT_TYPE.LOAN,
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

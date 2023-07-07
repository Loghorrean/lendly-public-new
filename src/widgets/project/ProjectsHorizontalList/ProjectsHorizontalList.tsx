import styles from "./ProjectsHorizontalList.module.scss";
import FinancingProjectCard from "@/src/entities/project/ui/FinancingProjectCard";

const ProjectsHorizontalList = () => {
    return (
        <ul className={styles.projects_horizontal_list}>
            <FinancingProjectCard />
            <FinancingProjectCard />
            <FinancingProjectCard />
        </ul>
    );
}

export default ProjectsHorizontalList;

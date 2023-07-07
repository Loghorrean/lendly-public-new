import styles from "./FinancingSection.module.scss";
import {BlockProps, cn, ObjectValues} from "@/src/shared/utils";
import {ReactNode, useRef, useState} from "react";
import {Container} from "@/src/shared/ui/layout";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import LoansHorizontalList from "@/src/widgets/project/LoansHorizontalList";
import ProjectsHorizontalList from "@/src/widgets/project/ProjectsHorizontalList";

const LIST_TYPE = {
    PROJECTS: "PROJECTS",
    LOANS: "LOANS"
} as const;

type ListType = ObjectValues<typeof LIST_TYPE>;

const FinancingSection = ({ ...props }: BlockProps) => {
    const [currentList, setCurrentList] = useState<ListType>(LIST_TYPE.PROJECTS);
    const availableLists = useRef<Record<ListType, ReactNode>>({
        [LIST_TYPE.LOANS]: <LoansHorizontalList />,
        [LIST_TYPE.PROJECTS]: <ProjectsHorizontalList />
    });
    return (
        <section {...props} className={cn(styles.financing_section, props.className)}>
            <Container>
                <ul className={styles.financing_section__tabs} role="tablist">
                    <li
                        role="tab"
                        className={styles.financing_section__tab}
                        aria-current={currentList === LIST_TYPE.PROJECTS}
                        onClick={() => setCurrentList(LIST_TYPE.PROJECTS)}
                    >
                        Проектное финансирование
                    </li>
                    <li
                        role="tab"
                        className={styles.financing_section__tab}
                        aria-current={currentList === LIST_TYPE.LOANS}
                        onClick={() => setCurrentList(LIST_TYPE.LOANS)}
                    >
                        Займы
                    </li>
                </ul>
            </Container>
            <Container needsDisabling>
                <div className={styles.financing_section__inner}>
                    { availableLists.current[currentList] }
                </div>
            </Container>
            <Container>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN}>
                    <ProjectLink href="/auth/register">
                        Стать инвестором
                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                    </ProjectLink>
                </PrimaryButton>
            </Container>
        </section>
    );
}

export default FinancingSection;

import styles from "./RequisitesSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {ObjectValues} from "@/src/shared/utils";
import {ReactElement, ReactNode, useState} from "react";
import CompanyRequisites from "@/src/widgets/about-us/CompanyRequisites";
import CompanyFounders from "@/src/widgets/about-us/CompanyFounders";

const REQUISITES_TAB = {
    REQUISITES: "REQUISITES",
    FOUNDERS: "FOUNDERS"
} as const;

type RequisitesTab = ObjectValues<typeof REQUISITES_TAB>;

const tabsMap = {
    [REQUISITES_TAB.REQUISITES]: <CompanyRequisites />,
    [REQUISITES_TAB.FOUNDERS]: <CompanyFounders />
} satisfies Record<RequisitesTab, ReactElement>;

const RequisitesSection = () => {
    const [currentTab, setCurrentTab] = useState<RequisitesTab>(REQUISITES_TAB.REQUISITES);
    return (
        <section className={styles.requisites_section}>
            <Container>
                <div className={styles.requisites_section__container}>
                    <ul className={styles.requisites_section__sections} role="tablist">
                        <SecondaryHeading>
                            <li
                                className={styles.requisites_section__tab}
                                role="tab"
                                aria-current={currentTab === REQUISITES_TAB.REQUISITES}
                                onClick={() => setCurrentTab(REQUISITES_TAB.REQUISITES)}
                            >
                                Реквизиты компании
                            </li>
                        </SecondaryHeading>
                        <SecondaryHeading>
                            <li
                                className={styles.requisites_section__tab}
                                role="tab"
                                aria-current={currentTab === REQUISITES_TAB.FOUNDERS}
                                onClick={() => setCurrentTab(REQUISITES_TAB.FOUNDERS)}
                            >
                                Состав учредителей
                            </li>
                        </SecondaryHeading>
                    </ul>
                    {tabsMap[currentTab]}
                </div>
            </Container>
        </section>
    );
}

export default RequisitesSection;

import styles from "./RequisitesSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {ObjectValues} from "@/src/shared/utils";
import {useState} from "react";
import CompanyRequisites from "@/src/widgets/about-us/CompanyRequisites";

const REQUISITES_TAB = {
    REQUISITES: "REQUISITES",
    FOUNDERS: "FOUNDERS"
} as const;

type RequisitesTab = ObjectValues<typeof REQUISITES_TAB>;

const RequisitesSection = () => {
    const [currentTab, setCurrentTab] = useState<RequisitesTab>(REQUISITES_TAB.REQUISITES);
    return (
        <section className={styles.requisites_section}>
            <Container>
                <div className={styles.requisites_section__container}>
                    <ul className={styles.requisites_section__sections}>
                        <SecondaryHeading>
                            <li>
                                <a
                                    href="#requisites"
                                    className={styles.requisites_section__tab}
                                    aria-current={currentTab === REQUISITES_TAB.REQUISITES}
                                    onClick={() => setCurrentTab(REQUISITES_TAB.REQUISITES)}
                                >
                                    Реквизиты компании
                                </a>
                            </li>
                        </SecondaryHeading>
                        <SecondaryHeading>
                            <li>
                                <a
                                    href="#founders"
                                    className={styles.requisites_section__tab}
                                    aria-current={currentTab === REQUISITES_TAB.FOUNDERS}
                                    onClick={() => setCurrentTab(REQUISITES_TAB.FOUNDERS)}
                                >
                                    Состав учредителей
                                </a>
                            </li>
                        </SecondaryHeading>
                    </ul>
                    <CompanyRequisites />
                </div>
            </Container>
        </section>
    );
}

export default RequisitesSection;

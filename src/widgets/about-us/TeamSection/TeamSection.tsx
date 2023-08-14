import styles from "./TeamSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import TeamCard, {TeamMember} from "@/src/widgets/about-us/TeamCard/TeamCard";
import {useWindowSize} from "@/src/shared/utils";
import {useMemo} from "react";
import MobileTeamCard from "@/src/widgets/about-us/MobileTeamCard";
import Loader from "@/src/shared/ui/loaders/Loader";

const mockTeamMembers: Array<TeamMember> = [
    {
        photo: "/images/about-us/team/volgin.png",
        name: "Александр Волгин",
        position: "Учредитель",
        description: "<p>В сфере кредитования малого бизнеса более 20 лет, опыт в разработке и запуске программ " +
            "для МСБ в Банках. 10 лет предпринимательской деятельности, в т.ч. в качестве совладельца " +
            "компаний в сфере ипотечного кредитования.</p><p>Увлекается большим теннисом и мотоциклами.</p>"
    },
    {
        photo: "/images/about-us/team/zmanovskis.png",
        name: "Владислав Змановский",
        position: "CTO, учредитель",
        description: "<p>Архитектор IT-решений и консультант по информационным технологиям. " +
            "В индустрии — больше 25 лет.</p><p>Увлекается здоровым питанием и биохакингом.</p>"
    },
    {
        photo: "/images/about-us/team/zubkov.png",
        name: "Александр Зубков",
        position: "Учредитель",
        description: "<p>Больше 15 лет работает в инвестиционных фондах и сопровождает сделки M&A. " +
            "Член совета директоров Ренессанс Кредит банка и страховой компании Согласие.</p> " +
            "<p>Среди увлечений - бег и баскетбол.</p>"
    },
    {
        photo: "/images/about-us/team/gradinar.png",
        name: "Екатерина Градинар",
        position: "Генеральный директор",
        description: "<p>Опыт работы в банковской сфере более 13 лет, в том числе, кредитование " +
            "корпоративных клиентов</p><p>5 лет в коллекторском бизнесе, в том числе, в должности " +
            "коммерческого директора, построение систем продаж и маркетинга</p><p>Увлекается йогой и психологией.</p>"
    },
    {
        photo: "/images/about-us/team/afanasyev.png",
        name: "Александр Афанасьев",
        position: "Юрист",
        description: "<p>Юридическая практика более 17 лет, в том числе, 10 лет в сфере ипотечного " +
            "кредитования</p><p>Из хобби - кайтсерфинг, обожает кататься на роликах.</p>"
    },
    {
        photo: "/images/about-us/team/slabodchikova.png",
        name: "Ольга Слабодчикова",
        position: "Риск-аналитик",
        description: "<p>15 лет в анализе кредитных рисков в банковской сфере, в том числе в должности " +
            "директора по рискам</p><p>Катается на горных лыжах, увлекается дайвингом.</p>"
    },
    {
        photo: "/images/about-us/team/pinchuk.png",
        name: "Мария Пинчук",
        position: "Менеджер службы поддержки",
        description: "<p>Поддержка и администратор платформы с 2019 года. Опыт работы в сопровождении тендерских " +
            "сделок, банковских гарантий и андеррайтинге клиентов МСБ</p><p>Увлекается музыкой и коллекционированием.</p>"
    },
    {
        photo: "/images/about-us/team/karabayev.png",
        name: "Дмитрий Карабаев",
        position: "Руководитель агентской сети",
        description: "<p>Более 10 лет работы в сфере ипотечного кредитования. В Лендли сопровождает " +
            "агентов, партнеров и заемщиков.</p><p>Увлекается нумизматикой, а в свободное время читает " +
            "беллетристические романы.</p>"
    }
]

const TeamSection = () => {
    const [width] = useWindowSize();
    const renderCards = useMemo(() => {
        if (width === 0) {
            return <Container>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.team_section__heading}>
                        Наша команда
                    </Heading>
                </SecondaryHeading>
                <Loader dark />
            </Container>;
        }
        if (width < 768) {
            return <>
                <Container>
                    <SecondaryHeading>
                        <Heading headingType={HEADING_TYPE.H2} className={styles.team_section__heading}>
                            Наша команда
                        </Heading>
                    </SecondaryHeading>
                </Container>
                <Container needsDisabling>
                    <div className={styles.team_section__list}>
                        { mockTeamMembers.map(member => <MobileTeamCard key={member.name} member={member} />) }
                    </div>
                </Container>
            </>
        }
        return <Container>
            <div className={styles.team_section__grid}>
                <SecondaryHeading>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.team_section__heading}>
                        Наша команда
                    </Heading>
                </SecondaryHeading>
                {mockTeamMembers.map(member => <TeamCard key={member.name} member={member} />)}
            </div>
        </Container>
    }, [width]);
    return (
        <section className={styles.team_section}>
            { renderCards }
        </section>
    );
}

export default TeamSection;

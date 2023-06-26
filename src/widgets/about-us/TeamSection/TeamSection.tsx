import styles from "./TeamSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import TeamCard, {TeamMember} from "@/src/widgets/about-us/TeamCard/TeamCard";
import {useWindowSize} from "@/src/shared/utils";
import {useMemo} from "react";
import MobileTeamCard from "@/src/widgets/about-us/MobileTeamCard";

const mockTeamMembers: Array<TeamMember> = [
    {
        photo: "/images/about-us/team/volgin-aleksandr.png",
        name: "Александр Волгин",
        position: "CEO, учредитель",
        description: "Опыт в кредитовании бизнеса — 20 лет. Увлекается мотоспортом и яхтингом."
    },
    {
        photo: "/images/about-us/team/vladislav-z.png",
        name: "Владислав Змановский",
        position: "CTO, учредитель",
        description: "Архитектор IT-решений и консультант по информационным технологиям. В индустрии — больше 25 лет. Увлекается здоровым питанием и биохакингом."
    },
    {
        photo: "/images/about-us/team/aleksandr-z.png",
        name: "Александр Зубков",
        position: "CEO, учредитель",
        description: "Больше 15 лет работает в инвестиционных фондах и сопровождает сделки M&A. Среди увлечений — бег и баскетбол."
    },
    {
        photo: "/images/about-us/team/ekaterina-g.png",
        name: "Екатерина Градинар",
        position: "Генеральный директор",
        description: "Опыт в продажах и маркетинге — больше 10 лет. Увлекается йогой, психологией и бизнесом."
    },
    {
        photo: "/images/about-us/team/aleksandr-a.png",
        name: "Александр Афанасьев",
        position: "CLO, главный юрисконсульт",
        description: "Опыт в продажах и маркетинге — больше 10 лет. Увлекается йогой, психологией и бизнесом."
    },
    {
        photo: "/images/about-us/team/olga-s.png",
        name: "Ольга Слабодчикова",
        position: "Риск-аналитик",
        description: "15 лет работает риск-аналитиком в банковской сфере. Сейчас использует свой опыт, чтобы оценивать заёмщиков. Увлекается горными лыжами и дайвингом."
    },
    {
        photo: "/images/about-us/team/maria-p.png",
        name: "Мария Пинчук",
        position: "Поддержка",
        description: "Поддерживает наших заёмщиков и инвесторов и консультирует их в технических вопросах."
    },
    {
        photo: "/images/about-us/team/dmitriy-k.png",
        name: "Дмитрий Карабаев",
        position: "Агентская сеть",
        description: "Специалист по работе с ипотечными займами."
    }
]

const TeamSection = () => {
    const [width, height] = useWindowSize();
    const renderCards = useMemo(() => {
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

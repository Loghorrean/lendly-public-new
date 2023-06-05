import styles from "./TeamSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import TeamCard, {TeamMember} from "@/src/widgets/about-us/TeamCard/TeamCard";
import volginA from "@/public/images/about-us/team/volgin-aleksandr.png";
import vladislavZ from "@/public/images/about-us/team/vladislav-z.png";
import aleksandrZ from "@/public/images/about-us/team/aleksandr-z.png";
import ekaterinaG from "@/public/images/about-us/team/ekaterina-g.png";
import aleksandrA from "@/public/images/about-us/team/aleksandr-a.png";
import olgaS from "@/public/images/about-us/team/olga-s.png";
import mariaP from "@/public/images/about-us/team/maria-p.png";
import dmitryK from "@/public/images/about-us/team/dmitriy-k.png";

const mockTeamMembers: Array<TeamMember> = [
    {
        photo: volginA,
        name: "Александр Волгин",
        position: "CEO, учредитель",
        description: "Опыт в кредитовании бизнеса — 20 лет. Увлекается мотоспортом и яхтингом."
    },
    {
        photo: vladislavZ,
        name: "Владислав Змановский",
        position: "CTO, учредитель",
        description: "Архитектор IT-решений и консультант по информационным технологиям. В индустрии — больше 25 лет. Увлекается здоровым питанием и биохакингом."
    },
    {
        photo: aleksandrZ,
        name: "Александр Зубков",
        position: "CEO, учредитель",
        description: "Больше 15 лет работает в инвестиционных фондах и сопровождает сделки M&A. Среди увлечений — бег и баскетбол."
    },
    {
        photo: ekaterinaG,
        name: "Екатерина Градинар",
        position: "Генеральный директор",
        description: "Опыт в продажах и маркетинге — больше 10 лет. Увлекается йогой, психологией и бизнесом."
    },
    {
        photo: aleksandrA,
        name: "Александр Афанасьев",
        position: "CLO, главный юрисконсульт",
        description: "Опыт в продажах и маркетинге — больше 10 лет. Увлекается йогой, психологией и бизнесом."
    },
    {
        photo: olgaS,
        name: "Ольга Слабодчикова",
        position: "Риск-аналитик",
        description: "15 лет работает риск-аналитиком в банковской сфере. Сейчас использует свой опыт, чтобы оценивать заёмщиков. Увлекается горными лыжами и дайвингом."
    },
    {
        photo: mariaP,
        name: "Мария Пинчук",
        position: "Поддержка",
        description: "Поддерживает наших заёмщиков и инвесторов и консультирует их в технических вопросах."
    },
    {
        photo: dmitryK,
        name: "Дмитрий Карабаев",
        position: "Агентская сеть",
        description: "Специалист по работе с ипотечными займами."
    }
]

const TeamSection = () => {
    const renderCards = () => {
        return mockTeamMembers.map(member => <TeamCard key={member.name} member={member} />)
    }
    return (
        <section className={styles.team_section}>
            <Container>
                <div className={styles.team_section__grid}>
                    <SecondaryHeading>
                        <Heading headingType={HEADING_TYPE.H2} className={styles.team_section__heading}>
                            Наша команда
                        </Heading>
                    </SecondaryHeading>
                    { renderCards() }
                </div>
            </Container>
        </section>
    );
}

export default TeamSection;

import styles from "./MobileTeamCard.module.scss";
import {BlockProps, cn} from "@/src/shared/utils";
import {TeamMember} from "@/src/widgets/about-us/TeamCard/TeamCard";
import {ProjectImage} from "@/src/shared/ui/images";

type Props = BlockProps & {
    member: TeamMember
}

const MobileTeamCard = ({ member, ...props }: Props) => {
    return (
        <div {...props} className={cn(styles.mobile_team_card, props.className)}>
            <ProjectImage src={member.photo} alt="Team member" width={326} height={320} className={styles.mobile_team_card__image} />
            <div className={styles.mobile_team_card__content}>
                <p className={styles.mobile_team_card__name}>
                    {member.name}
                </p>
                <p className={styles.mobile_team_card__position}>
                    {member.position}
                </p>
                <div className={styles.mobile_team_card__description}>
                    {member.description.length >= 60 ? member.description.substring(0, 60) + "..." : member.description}
                </div>
            </div>
        </div>
    );
}

export default MobileTeamCard;

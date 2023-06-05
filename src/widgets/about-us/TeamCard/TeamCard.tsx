import {BlockProps, cn} from "@/src/shared/utils";
import {StaticImageData} from "next/image";
import styles from "./TeamCard.module.scss";
import {ProjectImage} from "@/src/shared/ui/images";

export type TeamMember = {
    photo: string | StaticImageData;
    name: string;
    position: string;
    description: string;
}

type Props = BlockProps & {
    member: TeamMember
}

const TeamCard = ({ member, ...props }: Props) => {
    return <div {...props} className={cn(styles.team_card, props.className)}>
        <ProjectImage src={member.photo} alt="Team member image" width={324} height={460} className={styles.team_card__image} />
        <div className={styles.team_card__content}>
            <p className={styles.team_card__name}>{member.name}</p>
            <p className={styles.team_card__position}>{member.position}</p>
        </div>
        <div className={styles.team_card__description}>
            {member.description}
        </div>
    </div>
}

export default TeamCard;

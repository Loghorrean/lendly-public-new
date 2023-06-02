import {PlatformStat} from "@/src/widgets/landing/StatsSlider/StatsSlider";
import styles from "./StatsSlide.module.scss";
import {isNotEmpty} from "@/src/shared/utils";
import {CSSTransition} from "react-transition-group";

type Props = {
    stat: PlatformStat;
    active: boolean;
}

const StatsSlide = ({ stat, active }: Props) => {
    return (
        <CSSTransition
            in={active}
            timeout={500}
            classNames={{
                enter: styles.stats_slide___enter,
                enterActive: styles.stats_slide___enter_active,
                enterDone: styles.stats_slide___enter_done,
                exit: styles.stats_slide___exit,
                exitActive: styles.stats_slide___exit_active,
                exitDone: styles.stats_slide___exit_done,
            }}
            mountOnEnter
        >
            <li className={styles.stats_slide}>
                { isNotEmpty(stat.prefix) && <span className={styles.stats_slide__prefix}>
                {stat.prefix}
            </span> }
                <span className={styles.stats_slide__value}>
                {stat.value}
            </span>
                <span className={styles.stats_slide__text}>
                {stat.text}
            </span>
            </li>
        </CSSTransition>
    );
}

export default StatsSlide;

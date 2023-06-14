import styles from "./MobileMenu.module.scss";
import {cn, resultIf} from "@/src/shared/utils";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import {Container} from "@/src/shared/ui/layout";
import useBodyOverflow from "@/src/shared/utils/hooks/useBodyOverflow";

type Props = {
    active: boolean;
    setActive: (value: boolean) => void;
}

const MobileMenu = ({ active, setActive }: Props) => {
    useBodyOverflow(active);
    const handleClick = () => {
        setActive(false);
    }
    return (
        <div className={cn(styles.mobile_menu, resultIf(active, styles.mobile_menu___active))}>
            <Container>
                <ul className={styles.mobile_menu__links}>
                    <li className={styles.mobile_menu__element}>
                        <ProjectLink href="/for-investors" className={styles.mobile_menu__link} onClick={handleClick}>
                            Инвесторам
                        </ProjectLink>
                    </li>
                    <li className={styles.mobile_menu__element}>
                        <ProjectLink href="/for-borrowers" className={styles.mobile_menu__link} onClick={handleClick}>
                            Заемщикам
                        </ProjectLink>
                    </li>
                    <li className={styles.mobile_menu__element}>
                        <ProjectLink href="/about-us" className={styles.mobile_menu__link} onClick={handleClick}>
                            О нас
                        </ProjectLink>
                    </li>
                    <li className={styles.mobile_menu__element}>
                        <ProjectLink href="/blog" className={styles.mobile_menu__link} onClick={handleClick}>
                            Блог
                        </ProjectLink>
                    </li>
                    <li className={styles.mobile_menu__element}>
                        <ProjectLink href="/faq" className={styles.mobile_menu__link} onClick={handleClick}>
                            FAQ
                        </ProjectLink>
                    </li>
                </ul>
                <div className={styles.mobile_menu__auth_links}>
                    <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} arrow wide>
                        <ProjectLink href="/auth/register">
                            Стать инвестором
                            <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                        </ProjectLink>
                    </PrimaryButton>
                    <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE} arrow wide>
                        <ProjectLink href="/auth/register">
                            Стать заемщиком
                            <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.BLACK} />
                        </ProjectLink>
                    </PrimaryButton>
                </div>
            </Container>
        </div>
    );
}

export default MobileMenu;

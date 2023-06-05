import {ProjectImage} from "@/src/shared/ui/images";
import headerLogo from "@/public/images/logo/header-logo.png";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import styles from "./Header.module.scss";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {Container} from "@/src/shared/ui/layout";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__container}>
                    <ProjectLink href="/">
                        <ProjectImage src={headerLogo} alt="Header logo" />
                    </ProjectLink>
                    <nav className={styles.header__navigation}>
                        <ul className={styles.header__links}>
                            <li>
                                <ProjectLink href="/for-investors" className={styles.header__link}>
                                    Инвесторам
                                </ProjectLink>
                            </li>
                            <li>
                                <ProjectLink href="/for-borrowers" className={styles.header__link}>
                                    Заемщикам
                                </ProjectLink>
                            </li>
                            <li>
                                <ProjectLink href="/about-us" className={styles.header__link}>
                                    О нас
                                </ProjectLink>
                            </li>
                            <li>
                                <ProjectLink href="/blog" className={styles.header__link}>
                                    Блог
                                </ProjectLink>
                            </li>
                            <li>
                                <ProjectLink href="/faq" className={styles.header__link}>
                                    FAQ
                                </ProjectLink>
                            </li>
                        </ul>
                        <div className={styles.header__auth}>
                            <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                                <ProjectLink href="/auth/register">
                                    Регистрация
                                </ProjectLink>
                            </PrimaryButton>
                            <PrimaryButton color={PRIMARY_BUTTON_COLOR.BLACK}>
                                <ProjectLink href="/auth/login">
                                    Вход
                                </ProjectLink>
                            </PrimaryButton>
                        </div>
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export default Header;

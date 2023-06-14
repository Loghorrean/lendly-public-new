import styles from "./AuthHeader.module.scss";
import {Container} from "@/src/shared/ui/layout";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import ArrowLeft from "@/src/shared/ui/svg/arrows/ArrowLeft";
import headerLogo from "@/public/images/logo/header-logo.png";
import {ProjectImage} from "@/src/shared/ui/images";

const AuthHeader = () => {
    return (
        <header className={styles.auth_header}>
            <Container>
                <div className={styles.auth_header__container}>
                    <ProjectLink href="/">
                        <ProjectImage src={headerLogo} alt="Header logo" />
                    </ProjectLink>
                    <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                        <ProjectLink href="/" className={styles.auth_header__link}>
                            <ArrowLeft />
                            <span>Вернуться на главную</span>
                        </ProjectLink>
                    </PrimaryButton>
                </div>
            </Container>
        </header>
    );
}

export default AuthHeader;

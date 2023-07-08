import styles from "./AuthHeader.module.scss";
import {Container} from "@/src/shared/ui/layout";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import ArrowLeft from "@/src/shared/ui/svg/arrows/ArrowLeft";
import HomeLink from "@/src/shared/ui/links/HomeLink";
import {useState} from "react";
import ArrowTopLeft from "@/src/shared/ui/svg/arrows/ArrowTopLeft";

const AuthHeader = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <header className={styles.auth_header}>
            <Container>
                <div className={styles.auth_header__container}>
                    <HomeLink />
                    <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                        <ProjectLink href="/" className={styles.auth_header__link} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            { isHovered ? <ArrowTopLeft /> : <ArrowLeft /> }
                            <span>Вернуться назад</span>
                        </ProjectLink>
                    </PrimaryButton>
                </div>
            </Container>
        </header>
    );
}

export default AuthHeader;

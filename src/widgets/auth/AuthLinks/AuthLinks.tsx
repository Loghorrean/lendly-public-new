import {ProjectLink} from "@/src/shared/ui/links";
import styles from "./AuthLinks.module.scss";

const AuthLinks = () => {
    return (
        <ul className={styles.auth_links}>
            <li className={styles.auth_links__element}>
                <ProjectLink href="/auth/login" className={styles.auth_links__link}>
                    Вход
                </ProjectLink>
            </li>
            <li className={styles.auth_links__element}>
                <ProjectLink href="/auth/register" className={styles.auth_links__link}>
                    Регистрация
                </ProjectLink>
            </li>
        </ul>
    );
}

export default AuthLinks;

import {ProjectLink} from "@/src/shared/ui/links";
import styles from "./AuthLinks.module.scss";
import {usePathname} from "next/navigation";

const AuthLinks = () => {
    const pathname = usePathname();
    return (
        <ul className={styles.auth_links} role="tablist">
            <li className={styles.auth_links__element} role="tab">
                <ProjectLink href="/auth/login" className={styles.auth_links__link}>
                    Вход
                </ProjectLink>
            </li>
            <li className={styles.auth_links__element} role="tab">
                <ProjectLink
                    href="/auth/register"
                    className={styles.auth_links__link}
                    explicitActive={pathname === "/auth/register-lender" || pathname === "/auth/register-borrower"}
                >
                    Регистрация
                </ProjectLink>
            </li>
        </ul>
    );
}

export default AuthLinks;

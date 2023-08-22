import {ProjectLink} from "@/src/shared/ui/links";
import styles from "./AuthLinks.module.scss";
import {usePathname} from "next/navigation";

const AuthLinks = () => {
    const pathname = usePathname();
    //TODO: ADD MORE EXPLICIT LINKS
    const explicitLinks = [
        "/auth/forgot-password",
        "/auth/change-password"
    ];
    const isExplicitActive = (path: string) => {
        return explicitLinks.filter(item => path.startsWith(item)).length !== 0;
    }
    return (
        <ul className={styles.auth_links} role="tablist">
            <li className={styles.auth_links__element} role="tab">
                <ProjectLink href="/auth/login" explicitActive={isExplicitActive(pathname)} className={styles.auth_links__link}>
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

import styles from "./ChooseRegisterType.module.scss";
import registerInvestorsImage from "@/public/images/auth/register-investors.png";
import registerBorrowersImage from "@/public/images/auth/register-borrowers.png";
import {ProjectImage} from "@/src/shared/ui/images";
import {ProjectLink} from "@/src/shared/ui/links";

const ChooseRegisterType = () => {
    return (
        <div className={styles.choose_register_type}>
            <ProjectLink href="/auth/register-borrower" className={styles.choose_register_type__option}>
                <ProjectImage src={registerBorrowersImage} alt="Register borrowers image" />
                <p>Заемщикам</p>
            </ProjectLink>
            <ProjectLink href="/auth/register-lender" className={styles.choose_register_type__option}>
                <ProjectImage src={registerInvestorsImage} alt="Register investors image" />
                <p>Инвесторам</p>
            </ProjectLink>
            <ProjectLink href="/auth/login" className={styles.choose_register_type__login}>
                Я уже являюсь пользователем
            </ProjectLink>
        </div>
    );
}

export default ChooseRegisterType;

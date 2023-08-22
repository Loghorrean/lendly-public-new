import CommonAuthBlock from "@/src/widgets/auth/CommonAuthBlock";
import styles from "./ResetPasswordLinkSentBlock.module.scss";
import letterImage from "@/public/images/letter-sent-image.svg";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {ProjectImage} from "@/src/shared/ui/images";

const ResetPasswordLinkSentBlock = () => {
    return (
        <CommonAuthBlock className={styles.reset_password_link_sent_block}>
            <div className={styles.reset_password_link_sent_block__content}>
                <Heading headingType={HEADING_TYPE.H1} className={styles.reset_password_link_sent_block__heading}>
                    Восстановление пароля
                </Heading>
                <p className={styles.reset_password_link_sent_block__text}>
                    Проверьте почту, мы только что выслали вам информацию по восстановлению пароля
                </p>
            </div>
            <ProjectImage src={letterImage} width={220} height={220} alt="Letter Sent Image" />
        </CommonAuthBlock>
    );
}

export default ResetPasswordLinkSentBlock;

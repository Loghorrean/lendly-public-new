import styles from "./Footer.module.scss";
import {ProjectImage} from "@/src/shared/ui/images";
import footerLogo from "@/public/images/logo/footer-logo.png";
import {ProjectLink} from "@/src/shared/ui/links";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";
import footerCompanyNameImage from "@/public/images/footer-company-name.png";
import ExternalLink from "@/src/shared/ui/links/ExternalLink";
import CedroIcon from "@/src/shared/ui/svg/CedroIcon";
import {Container} from "@/src/shared/ui/layout";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer__grid}>
                    <div className={styles.footer__company_logo}>
                        <ProjectImage src={footerLogo} alt="Lendly Logo" />
                    </div>
                    <div className={styles.footer__company_name_container}>
                        <ProjectImage src={footerCompanyNameImage} alt="Company name" className={styles.footer__company_name} />
                    </div>
                    <address className={styles.footer__address}>
                        <p>ООО "Лендли" ИНН: 7814733360</p>
                        <p>&copy;2020 - 2023 ООО "Лендли"</p>
                    </address>
                    <ul className={styles.footer__links}>
                        <li>
                            <ProjectLink href="/page/information-disclosure" className={styles.footer__link}>
                                Ракрытие информации&nbsp;<ArrowRight fill="#ffffff" />
                            </ProjectLink>
                        </li>
                        <li>
                            <ProjectLink href="/about-us#documents" className={styles.footer__link}>
                                Актуальные документы&nbsp;<ArrowRight fill="#ffffff" />
                            </ProjectLink>
                        </li>
                        <li>
                            <ProjectLink href="/page/archive" className={styles.footer__link}>
                                Архив документов&nbsp;<ArrowRight fill="#ffffff" />
                            </ProjectLink>
                        </li>
                        <li>
                            <ProjectLink href="/about-us" className={styles.footer__link}>
                                О платформе&nbsp;<ArrowRight fill="#ffffff" />
                            </ProjectLink>
                        </li>
                        <li>
                            <ProjectLink href="/faq" className={styles.footer__link}>
                                FAQ&nbsp;<ArrowRight fill="#ffffff" />
                            </ProjectLink>
                        </li>
                    </ul>
                </div>
                <address className={styles.footer__mobile_address}>
                    <div>
                        <span>ООО "Лендли"   ИНН: 7814733360</span>
                        <span>&copy; 2020 - 2023 OOO "Лендли"</span>
                    </div>
                    <div>
                        <span>197342, г. Санкт-Петербург,</span>
                        <span>наб. Черной речки д. 47, стр. 2, помещ. 1-н, ч. 34</span>
                    </div>
                </address>
                <footer className={styles.footer__bottom}>
                    <address className={styles.footer__bottom_address}>
                        <span>197342, г. Санкт-Петербург</span>
                        <span>наб. Черной речки д. 47, стр. 2, помещ. 1-н, ч. 34</span>
                    </address>
                    <div className={styles.footer__bottom_right}>
                        <a href="#top" className={styles.footer__link_to_top}>
                            Наверх <ArrowRight className={styles.footer__top_arrow} fill="#ffffff" />
                        </a>
                        <ExternalLink href="https://www.cedro.agency" className={styles.footer__cedro}>
                            Сделано в Cedro
                            <CedroIcon />
                        </ExternalLink>
                    </div>
                </footer>
            </Container>
        </footer>
    );
}

export default Footer;

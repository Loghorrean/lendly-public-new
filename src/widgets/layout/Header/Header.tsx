"use client";

import {ProjectImage} from "@/src/shared/ui/images";
import headerLogo from "@/public/images/logo/header-logo.png";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {ProjectLink} from "@/src/shared/ui/links";
import styles from "./Header.module.scss";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {Container} from "@/src/shared/ui/layout";
import {usePathname} from "next/navigation";
import LandingLogo from "@/src/widgets/landing/LandingLogo";
import {cn, resultIf} from "@/src/shared/utils";
import {useLayoutEffect, useRef, useState} from "react";
import MobileMenuButton from "@/src/widgets/layout/MobileMenuButton";

const Header = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isScrolled, setIsScrolled] = useState<boolean | null>(null);
    useLayoutEffect(() => {
        const onScroll = () => {
            const percentage = Math.round((1 - window.scrollY / window.innerHeight) * 100);
            setIsScrolled(percentage < 0);
        }
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);
    const location = usePathname();
    const isLanding = () => {
        return location === "/";
    }
    return (
        <header className={styles.header}>
            <Container>
                <div
                    ref={containerRef}
                    className={cn(
                        styles.header__container,
                        resultIf(isLanding(), styles.header__container___landing),
                        resultIf(isScrolled === true, styles.header__container___full)
                    )}
                >
                    { isLanding() ? ( isScrolled ? <ProjectLink href="/">
                        <ProjectImage src={headerLogo} alt="Header logo" />
                    </ProjectLink> : <LandingLogo /> ) : <ProjectLink href="/">
                        <ProjectImage src={headerLogo} alt="Header logo" />
                    </ProjectLink> }
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
                                <ProjectLink href="/auth/register" className={styles.header__register}>
                                    Регистрация
                                </ProjectLink>
                            </PrimaryButton>
                            <PrimaryButton color={PRIMARY_BUTTON_COLOR.BLACK}>
                                <ProjectLink href="/auth/login">
                                    Вход
                                </ProjectLink>
                            </PrimaryButton>
                            <MobileMenuButton />
                        </div>
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export default Header;

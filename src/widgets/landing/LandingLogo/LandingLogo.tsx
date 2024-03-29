"use client";

import landingLogoImage from "@/public/images/landing/lendly_logo.svg";
import {useEffect, useRef, useState} from "react";
import {ProjectImage} from "@/src/shared/ui/images";
import styles from "./LandingLogo.module.scss";
import {cn, resultIf} from "@/src/shared/utils";
import {Tooltip} from "@/src/shared/ui/utils";
import QuestionIcon from "@/src/shared/ui/svg/QuestionIcon";
import TooltipContent from "@/src/shared/ui/utils/Tooltip/composables/TooltipContent";
import HomeLink from "@/src/shared/ui/links/HomeLink";
import ExternalLink from "@/src/shared/ui/links/ExternalLink";

const minWidth = 120;
const minHeight = 40;

const LandingLogo = () => {
    const imageRef = useRef<HTMLImageElement | null>(null);
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const windowHeight = window.innerHeight;
        const initialWidth = imageRef.current!.width;
        const initialHeight = imageRef.current!.height;
        const onScroll = () => {
            const percentage = Math.round((1 - window.scrollY / windowHeight) * 100);
            const newWidth = initialWidth / 100 * percentage;
            const newHeight = initialHeight / 100 * percentage;
            if (imageRef.current !== null) {
                imageRef.current.width = newWidth < minWidth ? minWidth : newWidth;
                imageRef.current.height = newHeight < minHeight ? minHeight : newHeight;
            }
            if (textRef.current !== null) {
                textRef.current.style.transform = `translateY(${-percentage > 0 ? 0 : -percentage}%)`;
            }
        };
        onScroll();
        window.addEventListener("scroll", onScroll);
        setLoaded(true);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);
    return (
        <div className={cn(styles.landing_logo, resultIf(loaded, styles.landing_logo___loaded))}>
            <ProjectImage
                priority
                ref={imageRef}
                src={landingLogoImage}
                alt="Landing logo image"
                className={styles.landing_logo__image}
            />
            <div ref={textRef} className={styles.landing_logo__text}>
                <span>Инвестиционная платформа. Лицензия ЦБ №34</span>
                <Tooltip
                    tooltipContent={<TooltipContent>
                        <ExternalLink href="https://cbr.ru/finorg/foinfo/?ogrn=1187847185140">
                            Подробнее
                        </ExternalLink>
                    </TooltipContent>}
                ><QuestionIcon /></Tooltip>
            </div>
            <HomeLink className={styles.landing_logo__link} />
        </div>
    );
}

export default LandingLogo;

"use client"

import {ReactNode, useEffect, useRef, useState} from "react";
import styles from "./StatsSlider.module.scss";
import RubleSvg from "@/src/shared/ui/svg/currency/RubleSvg";
import StatsSlide from "@/src/widgets/landing/StatsSlide";

export type PlatformStat = {
    value: ReactNode;
    text: ReactNode;
    prefix?: ReactNode;
}

const defaultStats: Array<PlatformStat> = [
    {
        value: "1352",
        text: "инвестора на платформе"
    },
    {
        prefix: "от",
        value: "35%",
        text: "годовых для инвестиций в займы"
    },
    {
        prefix: "от",
        value: "27%",
        text: "годовых для инвестиций в займы"
    },
    {
        value: <><span>10.000</span><RubleSvg /></>,
        text: "минимальная сумма инвестиций для входа"
    },
]

const StatsSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const activeSlideRef = useRef(activeSlide);
    const renderSlides = () => {
        return defaultStats.map((stat, index) => <StatsSlide key={index} stat={stat} active={activeSlide === index} />);
    }
    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval>;
        intervalId = setInterval(() => {
            if (activeSlideRef.current === defaultStats.length - 1) {
                setActiveSlide(0);
                activeSlideRef.current = 0;
                return;
            }
            setActiveSlide(value => value + 1);
            activeSlideRef.current = activeSlideRef.current + 1;
            return () => {
                clearInterval(intervalId);
            }
        }, 4000);
    }, []);
    return (
        <ul className={styles.stats_slider}>
            {renderSlides()}
        </ul>
    );
}

export default StatsSlider;

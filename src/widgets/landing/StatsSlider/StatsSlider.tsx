"use client"

import {ReactNode, useEffect, useRef, useState} from "react";
import styles from "./StatsSlider.module.scss";
import StatsSlide from "@/src/widgets/landing/StatsSlide";
import {BlockProps, cn} from "@/src/shared/utils";
import {useGetStats} from "@/src/entities/stats/hooks/useGetStats";
import Loader from "@/src/shared/ui/loaders/Loader";

export type PlatformStat = {
    value: ReactNode;
    text: ReactNode;
    prefix?: ReactNode;
}

type Props = BlockProps<HTMLUListElement> & {
    initial?: number;
};

const StatsSlider = ({ initial = 0, ...props }: Props) => {
    const { data, isLoading } = useGetStats();
    const [activeSlide, setActiveSlide] = useState(initial);
    const activeSlideRef = useRef(activeSlide);
    const renderSlides = () => {
        if (isLoading) {
            return <Loader dark />
        }
        return <ul {...props} className={styles.stats_slider}>
            <StatsSlide
                key={0}
                stat={{ text: "инвестора на платформе", value: `${data?.countInvestors ?? 0}` }}
                active={activeSlide === 0}
            />
            <StatsSlide
                key={1}
                stat={{ text: "годовых для инвестиций в займы", value: `${data?.averageInterestRate.toFixed(1) ?? 0}%` }}
                active={activeSlide === 1}
            />
            <StatsSlide
                key={2}
                stat={{ text: "годовых для инвестиций в проекты", value: `${data?.averageInterestRate.toFixed(1) ?? 0}%` }}
                active={activeSlide === 2}
            />
        </ul>;
    }
    useEffect(() => {
        const slidesCount = 2
        let intervalId: ReturnType<typeof setInterval>;
        intervalId = setInterval(() => {
            if (activeSlideRef.current === slidesCount) {
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
        <ul {...props} className={cn(styles.stats_slider, props.className)}>
            {renderSlides()}
        </ul>
    );
}

export default StatsSlider;

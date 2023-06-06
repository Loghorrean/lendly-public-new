"use client";

import {useEffect, useRef, useState} from "react";
import styles from "./StatsSlider.module.scss";
import ForInvestorsFirstIcon from "@/src/shared/ui/svg/for-investors/ForInvestorsFirstIcon";
import ForInvestorsSecondIcon from "@/src/shared/ui/svg/for-investors/ForInvestorsSecondIcon";
import ForInvestorsThirdIcon from "@/src/shared/ui/svg/for-investors/ForInvestorsThirdIcon";
import ForInvestorsFourthIcon from "@/src/shared/ui/svg/for-investors/ForInvestorsFourthIcon";
import RubleSvg from "@/src/shared/ui/svg/currency/RubleSvg";
import {CSSTransition} from "react-transition-group";

const StatsSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const activeSlideRef = useRef(activeSlide);
    const defaultStats = [
        <CSSTransition
            in={activeSlide === 0}
            timeout={500}
            classNames={{
                enter: styles.stats_slider__cell___enter,
                enterActive: styles.stats_slider__cell___enter_active,
                enterDone: styles.stats_slider__cell___enter_done,
                exit: styles.stats_slider__cell___exit,
                exitActive: styles.stats_slider__cell___exit_active,
                exitDone: styles.stats_slider__cell___exit_done,
            }}
            mountOnEnter
        >
            <div className={styles.stats_slider}>
                <div className={styles.stats_slider__cell}>
                    <ForInvestorsThirdIcon />
                    <div className={styles.stats_slider__item}>
                        <p className={styles.stats_slider__value}>
                            35%
                        </p>
                        <p className={styles.stats_slider__text}>
                            Средняя доходность от инвестиций в проекты
                        </p>
                    </div>
                </div>
                <div className={styles.stats_slider__cell}>
                    <ForInvestorsFourthIcon />
                    <div className={styles.stats_slider__item}>
                        <p className={styles.stats_slider__value}>
                            27%
                        </p>
                        <p className={styles.stats_slider__text}>
                            Средняя доходность от инвестиций в займы
                        </p>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        <CSSTransition
            in={activeSlide === 1}
            timeout={500}
            classNames={{
                enter: styles.stats_slider__cell___enter,
                enterActive: styles.stats_slider__cell___enter_active,
                enterDone: styles.stats_slider__cell___enter_done,
                exit: styles.stats_slider__cell___exit,
                exitActive: styles.stats_slider__cell___exit_active,
                exitDone: styles.stats_slider__cell___exit_done,
            }}
            mountOnEnter
        >
            <div className={styles.stats_slider}>
                <div className={styles.stats_slider__cell}>
                    <ForInvestorsFirstIcon />
                    <div className={styles.stats_slider__item}>
                        <p className={styles.stats_slider__text}>
                            Все заёмщики и управляющие проектами проверены
                        </p>
                    </div>
                </div>
                <div className={styles.stats_slider__cell}>
                    <ForInvestorsSecondIcon />
                    <div className={styles.stats_slider__item}>
                        <p className={styles.stats_slider__value}>
                            10 000<RubleSvg />
                        </p>
                        <p className={styles.stats_slider__text}>
                            Минимальная инвестиция
                        </p>
                    </div>
                </div>
            </div>
        </CSSTransition>
    ];
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
        }, 5000);
    }, []);
    return (
        <>
            {defaultStats}
        </>
    );
}

export default StatsSlider;

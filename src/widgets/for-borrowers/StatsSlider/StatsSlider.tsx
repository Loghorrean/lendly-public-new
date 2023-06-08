"use client";

import {useEffect, useRef, useState} from "react";
import styles from "./StatsSlider.module.scss";

import {CSSTransition} from "react-transition-group";
import ForBorrowersFirstIcon from "@/src/shared/ui/svg/for-borrowers/ForBorrowersFirstIcon";
import ForBorrowersSecondIcon from "@/src/shared/ui/svg/for-borrowers/ForBorrowersSecondIcon";

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
            key={1}
        >
            <div className={styles.stats_slider}>
                <div className={styles.stats_slider__cell}>
                    <ForBorrowersFirstIcon />
                    <div className={styles.stats_slider__item}>
                        <p className={styles.stats_slider__small_heading}>
                            На любые цели
                        </p>
                    </div>
                </div>
                <div className={styles.stats_slider__cell}>
                    <ForBorrowersSecondIcon />
                    <div className={styles.stats_slider__item}>
                        <p className={styles.stats_slider__small_heading}>
                            Без большого пакета документов
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
            key={2}
        >
            <div className={styles.stats_slider}>
                <div className={styles.stats_slider__cell}>
                    <ForBorrowersFirstIcon />
                    <div className={styles.stats_slider__item}>
                        <p className={styles.stats_slider__value}>
                            18%
                        </p>
                        <p className={styles.stats_slider__text}>
                            Ставка от
                        </p>
                    </div>
                </div>
                <div className={styles.stats_slider__cell}>
                    <ForBorrowersSecondIcon />
                    <div className={styles.stats_slider__item}>
                        <p className={styles.stats_slider__value}>
                            2-5 дней
                        </p>
                        <p className={styles.stats_slider__text}>
                            Срок выдачи займа
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

import styles from "./RountTimer.module.scss";
import { useEffect, useState } from "react";
import { useEffectOnUpdate } from "@/src/shared/utils";

type Props = {
    size?: number;
    strokeWidth?: number;
    seconds: number;
    onTimerExpired: () => void;
};

const RoundTimer = ({ size = 40, strokeWidth = 4, seconds, onTimerExpired }: Props) => {
    const milliseconds = seconds * 1000;
    const radius = (size - strokeWidth) / 2;
    const dashArray = Math.PI * 2 * radius;
    const [countdown, setCountdown] = useState(milliseconds);
    const dashOffset = dashArray - (dashArray * countdown) / milliseconds;

    useEffectOnUpdate(() => {
        if (countdown === 0) {
            onTimerExpired();
            return;
        }
    }, [countdown]);

    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval>;
        if (seconds) {
            intervalId = setInterval(() => {
                setCountdown(prev => prev - 10);
            }, 10);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [seconds]);

    const viewBox = `0 0 ${size} ${size}`;
    return (
        <svg width={size} height={size} viewBox={viewBox} className={styles.round_timer}>
            <circle
                className={styles.round_timer__background}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
            />
            <circle
                className={styles.round_timer__progress}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                }}
            />
            <text className={styles.round_timer__text} x="50%" y="50%" dy=".3em" textAnchor="middle">
                {`${(countdown / 1000).toFixed()}`}
            </text>
        </svg>
    );
};

export default RoundTimer;

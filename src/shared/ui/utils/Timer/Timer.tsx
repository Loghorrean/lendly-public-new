import React, { useEffect, useState } from "react";

type Props = {
    seconds: number;
    onTimerExpired: () => void;
};

const Timer = ({ seconds, onTimerExpired }: Props) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const passSecond = () => {
        setTimeLeft(timeLeft => timeLeft - 1);
    };
    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval>;
        if (seconds) {
            intervalId = setInterval(() => {
                if (timeLeft === 0) {
                    return;
                }
                passSecond();
            }, 1000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [seconds]);
    useEffect(() => {
        if (timeLeft === 0) {
            onTimerExpired();
            return;
        }
    }, [timeLeft]);
    const formatTime = (time: number) => {
        let minutes: number | string = Math.floor(time / 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        let seconds: number | string = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        return `${minutes}:${seconds}`;
    };
    return <span>{formatTime(timeLeft)}</span>;
};

export default Timer;

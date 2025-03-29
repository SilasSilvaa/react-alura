import { useEffect } from 'react';
import style from './Clock.module.scss'

interface Props {
    time: number | undefined
}

export default function Clock({ time = 0 }: Props) {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minutesTenth, minutesUnit] = String(minutes);
    const [secondsTenth, secodnsUnit] = String(seconds);

    return (
        <>
            <span className={style.numberClock}>{minutesTenth}</span>
            <span className={style.numberClock}>{minutesUnit}</span>
            <span className={style.numberDivision}>:</span>
            <span className={style.numberClock}>{secondsTenth}</span>
            <span className={style.numberClock}>{secodnsUnit}</span>
        </>
    );
}
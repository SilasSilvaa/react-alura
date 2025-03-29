import { useEffect, useState } from "react";
import { ITask } from "../../types/ITask";
import Button from "../button";
import Clock from "./clock";
import styles from './Conometer.module.scss'
import { timeToSeconds } from "../../common/utils/time";

interface Props {
    selected: ITask | undefined
    finalizeTask: () => void;
}

export default function Conometer({ selected, finalizeTask }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(String(selected.time)));
        }
    }, [selected])

    function countDown(time: number = 0) {
        setTimeout(() => {
            if (time > 0) {
                setTime(time - 1);
                return countDown(time - 1);
            }

            finalizeTask();
        }, 1000);
    }

    return (
        <div className={styles.conometer}>
            <p className={styles.title}>Escolha um card e inicie o conometro</p>
            <div className={styles.clockWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => countDown(time)}>
                Começar
            </Button>
        </div >
    );
}
import React, { useState } from 'react';
import Button from '../button/';
import style from './Form.module.scss'
import { ITask } from '../../types/ITask';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function Form({ setTasks }: Props) {
    const [name, setName] = useState("");
    const [time, setTime] = useState("");

    function addNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const task: ITask = { name, time, completed: false, select: false, id: uuidv4()};

        setTasks(tasks => [...tasks, task])
    }

    return (
        <form action="submit" onSubmit={addNewTask} className={style.newTask}>
            <div className={style.inputContainer}>
                <label htmlFor='task'>
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name='task'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id='task'
                    placeholder='O que você quer estudar?'
                    required />

            </div>
            <div className={style.inputContainer}>
                <label htmlFor='time'>
                    Tempo
                </label>
                <input
                    type="time"
                    name='time'
                    value={time}
                    step="1"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    onChange={(e) => setTime(e.target.value)}
                />

            </div>
            <Button type="submit">Adicionar</Button>
        </form>
    )
}

import React from 'react';
import Button from '../button/';
import style from './Form.module.scss'
import { ITask } from '../../types/ITask';
import { v4 as uuidv4 } from 'uuid';

export default class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
    state = {
        name: "",
        time: "00:00:00"
    }

    addNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.setTasks((tasks) => [...tasks, {
            ...this.state,
            select: false,
            completed: false,
            id: uuidv4()
        }]);
        this.setState({
            name: "",
            time: "",
        })
    }
    render() {
        return (
            <form action="submit" onSubmit={this.addNewTask.bind(this)} className={style.newTask}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name='task'
                        value={this.state.name}
                        onChange={(e) => this.setState({ ...this.state, name: e.target.value })}
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
                        value={this.state.time}
                        step="1"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        onChange={(e) => this.setState({ ...this.state, time: e.target.value })}
                    />

                </div>
                <Button type="submit">Adicionar</Button>
            </form>
        );
    }
}
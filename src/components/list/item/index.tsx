import { ITask } from '../../../types/ITask';
import style from './Item.module.scss'

interface Props {
    task: ITask
    selectTask: (task: ITask) => void;
}

export default function Item({ task, selectTask }: Props) {
    return (
        <li
            className={`
                ${style.item} 
                ${task.select && style.selectedItem} 
                ${task.completed && style.completedItem}`
            }
            onClick={() => !task.completed && selectTask(task)}
        >
            <h3>{task.name}</h3>
            <span>{task.time}</span>
            {task.completed && (
                <span className={style.complete} aria-label='tarefa completada'>
                </span>
            )}
        </li>
    );
}
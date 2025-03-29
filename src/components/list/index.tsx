import { ITask } from '../../types/ITask';
import style from './List.module.scss';
import Item from "./item";

interface Props {
    tasks: ITask[]
    selectTask: (task: ITask) => void;
}

export default function List({ tasks, selectTask }: Props) {

    return (
        <aside className={style.taskList}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task) => (
                    <Item
                        task={task}
                        key={task.id}
                        selectTask={selectTask}
                    />
                ))}
            </ul>
        </aside >
    );
}
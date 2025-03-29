import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.scss'
import Conometer from '../components/conometer';
import { ITask } from '../types/ITask';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask | undefined>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(tasks => tasks.map((task) => ({
      ...task,
      select: task.id === selectedTask.id && !selectedTask.completed
    })))

  }

  function finalizeTask() {
    if (selected) {
      setSelected(undefined); 
      setTasks(tasks => tasks.map((task) => {
        if (task.id === selected.id) {
          return {
            ...task,
            select: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }

  return (

    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Conometer selected={selected} finalizeTask={finalizeTask}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { ToDo } from './ToDo';
import { Form } from './Form';
import { Stat } from './Stat';

export const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [oldText, setOldText] = useState('');
  const [selectTaskId, setSelectTaskId] = useState(null);

  const resolvedTasks = () =>
    tasks.filter((task) => task.isChecked);

  const toggleChecked = (taskId) => {
    const filterArr = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isChecked: !task.isChecked,
        };
      }
      return task;
    });

    setTasks(filterArr);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskId) => {
    const filterArr = tasks.filter(
      (task) => task.id !== taskId
    );

    setTasks(filterArr);
  };

  const taskEdit = (taskId, oldText) => {
    setOldText(oldText);
    setSelectTaskId(taskId);
  };

  return (
    <>
      <Stat quantity={tasks.length}>Your task</Stat>
      <Stat quantity={resolvedTasks().length}>
        Your resolved task
      </Stat>
      <h3>ToDo List</h3>
      <ul className="list">
        {tasks.map((task) => (
          <ToDo
            key={task.id}
            task={task}
            toggleChecked={toggleChecked}
            removeTask={removeTask}
            taskEdit={taskEdit}
          />
        ))}
      </ul>
      <Form
        addTask={addTask}
        changeText={oldText}
        tasks={tasks}
        selectedTaskId={selectTaskId}
      />
    </>
  );
};

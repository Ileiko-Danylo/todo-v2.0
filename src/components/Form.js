import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Form = ({
  addTask,
  changeText,
  tasks,
  selectedTaskId,
}) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(changeText);
  }, [changeText]);

  const onSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      text,
      isChecked: false,
    };

    const checkTaskById = tasks.filter(
      (task) => task.id === selectedTaskId
    );
    console.log(selectedTaskId, newTodo.id);
    console.log('checkTaskById', checkTaskById);

    if (checkTaskById) {
      addTask(checkTaskById);
    }

    const isElementWithSameText = tasks.find(
      (task) => task.text === newTodo.text
    );
    if (!isElementWithSameText) {
      addTask(newTodo);
    }
    setText('');
  };

  return (
    <>
      <h3>Add new task</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(event) =>
              setText(event.target.value)
            }
            placeholder="Enter text of the task"
          />
        </div>
        <button className="btn">Add Task</button>
      </form>
    </>
  );
};

import React, { useState } from 'react';
import uuid from 'uuid/v1';

import TodoInput from './../TodoInput';
import TodoList from './../TodoList';

const ComponentList = props => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks(state => {
      return [...state, { done: false, task, id: uuid() }];
    });
  };

  const checkTask = task => {
    setTasks(state => {
      return state.map(val => {
        if (val.id === task.id) val.done = !task.done;
        return val;
      });
    });
  };

  return (
    <div>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} checkTask={checkTask} />
    </div>
  );
};

export default ComponentList;

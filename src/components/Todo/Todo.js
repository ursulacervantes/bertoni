import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid/v1';

import { createTask, updateTask } from '../../actions/index';

import TodoInput from './../TodoInput';
import TodoList from './../TodoList';

const ComponentList = props => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const addTask = task => {
    dispatch(createTask({ done: false, task, id: uuid() }));
  };

  const checkTask = task => {
    dispatch(updateTask(task.id));
  };

  return (
    <div>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} checkTask={checkTask} />
    </div>
  );
};

export default ComponentList;

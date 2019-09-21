// Color's Action
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const READ_TASK = 'READ_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const createTask = task => ({
  type: CREATE_TASK,
  task
});

export const updateTask = taskId => ({
  type: UPDATE_TASK,
  taskId
});

export const deleteTask = taskId => ({
  type: DELETE_TASK,
  taskId
});

export const getTask = () => ({
  type: READ_TASK
});

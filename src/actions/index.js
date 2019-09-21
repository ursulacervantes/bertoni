// Tasks's Action
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
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

// Fetch Tasks Action
export const FETCH_TASKS_BEGIN = 'FETCH_TASKS_BEGIN';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

export const fetchTasksBegin = () => ({
  type: FETCH_TASKS_BEGIN
});

export const fetchTasksSuccess = tasks => ({
  type: FETCH_TASKS_SUCCESS,
  payload: { tasks }
});

export const fetchTasksFailure = error => ({
  type: FETCH_TASKS_FAILURE,
  payload: { error }
});

const tasksUri = '';
export function fetchTasks() {
  return dispatch => {
    dispatch(fetchTasksBegin());
    return fetch(tasksUri)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchTasksSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchTasksFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

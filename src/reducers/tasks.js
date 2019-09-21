import {
  CREATE_TASK,
  UPDATE_TASK,
  READ_TASK,
  DELETE_TASK
} from '../actions/index';

const initialState = [];

export default function components(state = initialState, action) {
  if (!action) return state;

  switch (action.type) {
    case CREATE_TASK:
      return [...state, action.task];
    case UPDATE_TASK:
      return state.map(val => {
        if (val.id === action.taskId) val.done = !val.done;
        return val;
      });
    case READ_TASK:
      return state;
    case DELETE_TASK:
      return state.filter(val => val.id !== action.taskId);

    default:
      return state;
  }
}

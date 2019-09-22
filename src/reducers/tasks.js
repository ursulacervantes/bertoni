import {
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  FETCH_TASKS_BEGIN,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE
} from '../actions/index';

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function components(state = initialState, action) {
  if (!action) return state;

  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        data: [...state.data, action.task]
      };
    case UPDATE_TASK:
      console.log(state);
      return {
        ...state,
        data: state.data.map(val => {
          if (val.id === action.taskId) val.done = !val.done;
          return val;
        })
      };
    case DELETE_TASK:
      return {
        ...state,
        data: state.data.filter(val => val.id !== action.taskId)
      };

    case FETCH_TASKS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.response.tasks
      };
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: []
      };

    default:
      return state;
  }
}

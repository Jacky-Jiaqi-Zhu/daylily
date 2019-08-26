import { INIT_TASKS, ADD_TASK, UPDATE_TASKS } from '../actions'

const initialState = {
  tasks: []
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_TASKS: {
      return state;
    }
    case UPDATE_TASKS: {
      return Object.assign({}, state, {
        tasks: action.tasks
      })
    }
    case ADD_TASK: {
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks,
          {
            name: action.name,
            desc: action.desc
          }
        ]
      })
    }
    default: {
      return state;
    }
  }
}

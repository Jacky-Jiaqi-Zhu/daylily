import { INIT_TASKS, ADD_TASK } from '../actions'

const initialState = {
  tasks: [
    {
      '_id': '5d4d5bfd67d1de044887e0ae',
      'name': 'clean garden',
      'desc': 'ada asdacasdasd',
      '__v': 0
    },
    {
      '_id': '5d4d5e3f6607c80448145d9a',
      'name': 'cook',
      'desc': '123\n45dasv ads4asd56',
      '__v': 0
    },
    {
      '_id': '5d4d68090f8ba2634cfa6f46',
      'name': 'cook',
      'desc': 'veg',
      '__v': 0
    },
    {
      '_id': '5d4d689bc5f8072f64ee44f2',
      'name': 'gym 444',
      'desc': 'push up 555',
      '__v': 0
    },
    {
      '_id': '5d4d68b97a952a51d407332b',
      'name': 'gym  3',
      'desc': 'push up',
      '__v': 0
    }
  ]
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_TASKS: {
      return state;
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

const initialState = {
  tasks: []
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'init': {
      return state;
    }
    default: {
      return state;
    }
  }
}

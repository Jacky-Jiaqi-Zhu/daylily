export const INIT_TASKS = 'INIT_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const GET_TASKS = 'GET_TASKS'
export const UPDATE_TASKS = 'UPDATE_TASKS'

export const updateTasks = (tasks) => ({
  type: UPDATE_TASKS,
  tasks: tasks
})

export const initTasks = () => ({
  type: INIT_TASKS
})

export const addTask = (name, desc) => ({
  type: ADD_TASK,
  name,
  desc
})

export const getTasks = () => ({
  type: GET_TASKS,
})
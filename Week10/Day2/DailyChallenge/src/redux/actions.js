export const ADD_TASK = 'add_task'
export const REMOVE_TASK = 'remove_task'
export const UPDATE_TASK = 'update_task'

export const addTask = (task, date) => {
  return {
    type: ADD_TASK,
    payload: { task, date },
  }
}
export const removeTask = (index) => {
  return {
    type: REMOVE_TASK,
    payload: index,
  }
}

export const updateTask = (index) => {
  return {
    type: UPDATE_TASK,
    payload: index,
  }
}
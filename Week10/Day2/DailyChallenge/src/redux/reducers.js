import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from './actions'
// Initial state for the reducer
const initialState = {
    task: ['Initial State task 05 - 13 - 2024'], // Default task array with an initial task
    filteredTasks: [], // Array to hold filtered tasks
  };
  
  // Reducer function to handle state changes based on dispatched actions
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        // Adding a new task to the task array
        return {
          ...state,
          task: [...state.task, action.payload], // Adding new task to the end of the array
        };
      case REMOVE_TASK:
        // Removing a task from the task array based on index
        return {
          ...state,
          task: state.task.filter((_, index) => index !== action.payload), // Filtering out the task at the specified index
        };
      case UPDATE_TASK:
        // Updating filteredTasks based on a filter date
        const filterDate = action.payload; // Extracting filter date from action payload
        const filteredTasks = filterDate ? state.task.filter(item => item.date === filterDate) : state.task; // Filtering tasks based on date, or using all tasks if no date is provided
        return {
          ...state,
          filteredTasks: filteredTasks, // Updating filtered tasks array
        };
      default:
        return state; // Default case returns current state
    }
  };
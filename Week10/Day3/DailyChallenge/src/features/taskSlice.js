import { createSlice } from '@reduxjs/toolkit';

//Define initial state for tasks slice
const initialState = {
  tasksByDay: {},   //Object to hold tasks grouped by day
  selectedDay: null, //Selected day, initially null
};

//Create tasks slice
const tasksSlice = createSlice({
  name: 'tasks', //Slice name
  initialState, //Initial state
  reducers: {
    //Reducer to add a task for a specific day
    addTask: (state, action) => {
      const { day, task } = action.payload;
      //Check if tasks for the given day exist, if not, initialize an empty array
      if (!state.tasksByDay[day]) {
        state.tasksByDay[day] = [];
      }
      //Add the task to the tasks array for the specified day
      state.tasksByDay[day].push(task);
    },
    //Reducer to remove a task for a specific day
    removeTask: (state, action) => {
      const { day, taskId } = action.payload;
      //Check if tasks for the given day exist
      if (state.tasksByDay[day]) {
        //Filter out the task with the specified taskId
        state.tasksByDay[day] = state.tasksByDay[day].filter(task => task.id !== taskId);
      }
    },
    //Reducer to update a task for a specific day
    updateTask: (state, action) => {
      const { day, task } = action.payload;
      //Check if tasks for the given day exist
      if (state.tasksByDay[day]) {
        //Find the index of the task with the same id as the updated task
        const taskIndex = state.tasksByDay[day].findIndex(t => t.id === task.id);
        //If the task is found, update it
        if (taskIndex > -1) {
          state.tasksByDay[day][taskIndex] = task;
        }
      }
    },
    //Reducer to set the selected day
    setSelectedDay: (state, action) => {
      //Set the selected day to the payload value
      state.selectedDay = action.payload;
    },
  },
});

//Export action creators
export const { addTask, removeTask, updateTask, setSelectedDay } = tasksSlice.actions;

//Export reducer
export default tasksSlice.reducer;
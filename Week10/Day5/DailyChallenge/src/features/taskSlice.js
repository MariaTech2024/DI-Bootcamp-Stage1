import { createSlice } from '@reduxjs/toolkit';

//Define initial state for tasks slice
const initialState = {
  tasks: [],
};

//Create task slice using createSlice from Redux Toolkit
const taskSlice = createSlice({
  name: 'tasks', //Name of the slice
  initialState, //Initial state defined above
  reducers: {
    //Action creator to add a new task
    addTask: (state, action) => {
      state.tasks.push(action.payload); //Push new task to tasks array
    },
    //Action creator to edit a task
    editTask: (state, action) => {
      const { id, newTask } = action.payload; //Destructure id and newTask from payload
      const index = state.tasks.findIndex(task => task.id === id); //Find index of task to be edited
      if (index !== -1) {
        state.tasks[index] = newTask; //Update task at found index
      }
    },
    //Action creator to delete a task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload); // Filter out task with given id
    },
    //Action creator to delete tasks by category
    deleteTasksByCategory: (state, action) => {
      const categoryId = action.payload; //Get category id from payload
      state.tasks = state.tasks.filter(task => task.categoryId !== categoryId); // Filter out tasks with given category id
    },
    //Action creator to update task progress
    updateTaskProgress: (state, action) => {
      const { id, progress } = action.payload; //Destructure id and progress from payload
      const task = state.tasks.find(task => task.id === id); //Find task with given id
      if (task) {
        task.progress = progress; //Update task progress
      }
    },
  },
});

//Export action creators and reducer from task slice
export const { addTask, editTask, deleteTask, deleteTasksByCategory, updateTaskProgress } = taskSlice.actions;
export default taskSlice.reducer;
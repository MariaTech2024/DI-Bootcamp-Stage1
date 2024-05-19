import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { taskId, updates } = action.payload;
      const task = state.find(task => task.id === taskId);
      if (task) {
        Object.assign(task, updates);
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    updateTaskProgress: (state, action) => {
      const { taskId, progress } = action.payload;
      const task = state.find(task => task.id === taskId);
      if (task) {
        task.progress = progress;
      }
    }
  }
});

export const { addTask, editTask, deleteTask, updateTaskProgress } = taskSlice.actions;
export default taskSlice.reducer;
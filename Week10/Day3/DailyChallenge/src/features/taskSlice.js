import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDay: {
    // Example structure
    // '2023-05-16': [{ id: 1, text: 'Buy groceries', completed: false }],
  },
  selectedDay: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { day, task } = action.payload;
      if (!state.tasksByDay[day]) {
        state.tasksByDay[day] = [];
      }
      state.tasksByDay[day].push(task);
    },
    removeTask: (state, action) => {
      const { day, taskId } = action.payload;
      if (state.tasksByDay[day]) {
        state.tasksByDay[day] = state.tasksByDay[day].filter(task => task.id !== taskId);
      }
    },
    updateTask: (state, action) => {
      const { day, task } = action.payload;
      if (state.tasksByDay[day]) {
        const taskIndex = state.tasksByDay[day].findIndex(t => t.id === task.id);
        if (taskIndex > -1) {
          state.tasksByDay[day][taskIndex] = task;
        }
      }
    },
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },
  },
});

export const { addTask, removeTask, updateTask, setSelectedDay } = tasksSlice.actions;

export default tasksSlice.reducer;
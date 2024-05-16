import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [],
};


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      addTodo: (state, action) => {
        const newTodo = {
          id: Date.now(),
          text: action.payload,
          completed: false
        };
        state.todos.push(newTodo);
      },
      toggleTodo: (state, action) => {
        const todo = state.todos.find(todo => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
      removeTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      }
    }
  });
  
  // Export the actions
  export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
  
  // Export the reducer
  export default todoSlice.reducer;
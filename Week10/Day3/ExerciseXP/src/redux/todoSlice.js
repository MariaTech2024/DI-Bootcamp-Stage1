import { createSlice } from "@reduxjs/toolkit";

//Define initial state for the todo slice
const initialState = {
    todos: [], //An array to hold todo items
};

//Create a todo slice using createSlice function
const todoSlice = createSlice({
    name: 'todos', //Name of the slice
    initialState, //Initial state defined above
    reducers: {
        //Action to add a new todo item
        addTodo: (state, action) => {
            //Create a new todo object with unique id, provided text, and default completion status
            const newTodo = {
                id: Date.now(),
                text: action.payload, //Payload contains the text of the todo item
                completed: false //Initially set to false as it's a new todo
            };
            //Add the new todo object to the todos array in the state
            state.todos.push(newTodo);
        },
        //Action to toggle the completion status of a todo item
        toggleTodo: (state, action) => {
            //Find the todo item in the todos array by id
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                //If todo item exists, toggle its completion status
                todo.completed = !todo.completed; // Toggle completion status
            }
        },
        //Action to remove a todo item from the list
        removeTodo: (state, action) => {
            //Filter out the todo item with the provided id from the todos array
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
});

//Export the actions (addTodo, toggleTodo, removeTodo)
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

//Export the reducer (a function that updates the state based on the given action)
export default todoSlice.reducer;
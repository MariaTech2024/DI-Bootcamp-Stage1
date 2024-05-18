import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/todoSlice'; 
import '../App.css';

//Functional component representing a single todo item
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch(); // Get the dispatch function from useDispatch hook

  //Function to handle toggling the completion status of the todo item
  const handleToggle = () => {
    //Dispatch the toggleTodo action with the id of the todo item
    dispatch(toggleTodo(todo.id));
  };

  //Function to handle removing the todo item
  const handleRemove = () => {
    //Dispatch the removeTodo action with the id of the todo item
    dispatch(removeTodo(todo.id));
  };

  //Render the todo item with text and buttons for toggling and removing
  return (
    <li>
      {/* Display todo text with a class 'completed' if it's completed */}
      <span
        className={todo.completed ? 'completed' : ''}
        //Clicking on the todo text toggles its completion status
        onClick={handleToggle}
      >
        {todo.text}
      </span>
      {/* Button to remove the todo item, onClick calls handleRemove function */}
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};


export default TodoItem;
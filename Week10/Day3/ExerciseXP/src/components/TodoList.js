import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem'; 
import '../App.css';

//Functional component representing a list of todos
const TodoList = () => {
  //Retrieve todos from the Redux store using useSelector hook
  const todos = useSelector((state) => state.todos.todos);

  //Render a list of TodoItem components, passing each todo item as a prop
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};


export default TodoList;
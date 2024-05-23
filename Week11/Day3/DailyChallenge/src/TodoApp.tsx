import React, { useState } from 'react';
import { Todo } from './types'; // Importing the Todo type
import List from './List'; // Importing the generic List component

// The TodoApp component is a function component
const TodoApp: React.FC = () => {
  // useState hook to manage the state of todo items, initialized with two todo items
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn TypeScript' },
    { id: 2, text: 'Build a React App' },
  ]);

  // Function to add a new todo item
  const addTodo = () => {
    const newTodo: Todo = {
      id: todos.length + 1, // Generating a new id based on the length of the todos array
      text: `New Todo at ${new Date().toLocaleTimeString()}`, // Using the current time as the text for the new todo
    };
    setTodos([...todos, newTodo]); // Adding the new todo item to the state
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={addTodo}>Add Todo</button> {/* Button to add a new todo */}
      {/* Rendering the List component with the current todos and a renderItem function */}
      <List items={todos} renderItem={(todo) => <span>{todo.text}</span>} />
    </div>
  );
};

export default TodoApp;
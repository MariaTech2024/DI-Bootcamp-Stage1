import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice'; 
import '../App.css';

//Functional component for adding a new todo
const AddTodo = () => {
  //Define state for input value
  const [input, setInput] = useState('');
  //Get the dispatch function from useDispatch hook
  const dispatch = useDispatch();

  //Function to handle adding a new todo
  const handleAddTodo = () => {
    //Check if the input value is not empty or only whitespace
    if (input.trim()) {
      //Dispatch the addTodo action with the input value as payload
      dispatch(addTodo(input));
      //Clear the input field after adding the todo
      setInput('');
    }
  };

  //Render input field and button for adding todo
  return (
    <div>
      {/* Input field for entering todo text */}
      <input
        type="text"
        value={input}
        //Update input state when input value changes
        onChange={(e) => setInput(e.target.value)}
      />
      {/* Button to add todo, onClick calls handleAddTodo function */}
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
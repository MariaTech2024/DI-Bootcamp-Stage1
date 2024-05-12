//Exercise 3: Implement a Todo List
//Create a React component that allows users to add and remove todo items using useReducer.

import { useReducer, useState } from 'react';

//Reducer function to manage todo state
function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            //Add a new to-do to the state
            return [...state, { id: Date.now(), text: action.text }];
        case 'REMOVE_TODO':
            //Remove a to-do by its id
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
}

//Component for displaying and managing todos
const TodoList = () => {
    //State and dispatch for managing todos
    const [todos, dispatch] = useReducer(todoReducer, []);
    //State for storing text of new todo
    const [todoText, setTodoText] = useState('');

    //Function to handle adding a new todo
    const handleAddTodo = () => {
        //Check if the todo text is empty
        if (todoText.trim() === '') return;
        //Dispatch action to add a new todo
        dispatch({ type: 'ADD_TODO', text: todoText });
        //Clear input field after adding todo
        setTodoText('');
    };

    //Function to handle removing a todo
    const handleRemoveTodo = (id) => {
        //Dispatch action to remove a todo by its id
        dispatch({ type: 'REMOVE_TODO', id });
    };

    return (
        <div>
            <h1>To-do List</h1>
            {/* Input field for adding new todos */}
            <input
                type="text"
                placeholder="Add a new todo"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            {/* Button to add todo */}
            <button onClick={handleAddTodo}>Add To-do</button>
            {/* Display list of todos */}
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        {/* Button to remove todo */}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
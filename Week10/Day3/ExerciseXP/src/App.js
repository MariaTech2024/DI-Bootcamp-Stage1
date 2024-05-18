//Exercise: Basic Todo List with React-Redux and Redux Toolkit
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store'; // Adjust the path as needed
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
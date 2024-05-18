//Daily Challenge: Planner Application using React-Redux

import './App.css';
import React from 'react';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="container">
      <Calendar />
      <TaskList />
    </div>
  );
};

export default App;
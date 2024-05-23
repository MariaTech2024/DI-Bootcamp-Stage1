//Daily Challenge: Building a TypeScript and React Todo List with Generic Components

import React from 'react';
import TodoApp from './TodoApp';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
};

export default App;
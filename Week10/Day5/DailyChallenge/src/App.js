//Daily Challenge: Productivity Tracker
//Build a productivity tracker that allows users to log their daily tasks and track their progress.
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import CategorySelector from './components/CategorySelector';
import Category from './components/Category';
import './App.css'


const App = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
 
  return (
    <div className="container">
      <h1>Productivity Tracker</h1>
      <div className="component">
        <Category />
      </div>
      <div className="component">
        <CategorySelector selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId} />
      </div>
      <div className="component">
        {selectedCategoryId && <TaskList categoryId={selectedCategoryId} />}
      </div>
    </div>
  );
};

export default App;

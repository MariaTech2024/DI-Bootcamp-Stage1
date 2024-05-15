//DailyChallenge: Planner Application
//Create a daily planner application allowing users to manage tasks for specific days.

import './App.css';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask, removeTask, updateTask } from './redux/actions';

function App({ task, addTask, removeTask, updateTask }) {
  // State hooks for task input and date input
  const [taskInput, setTaskInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskInput.trim() && dateInput) {
      addTask(taskInput, dateInput); // Dispatch action to add task
      setTaskInput(''); // Clear task input after submission
      setDateInput(''); // Clear date input after submission
    }
  };

  // Handler to remove a task
  const removeTaskHandler = (index) => {
    removeTask(index); // Dispatch action to remove task
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Task List</h2>

        <form onSubmit={handleSubmit}>
          {/* Input for selecting a date */}
          <input 
            type="date" 
            name="dateInput" 
            value={dateInput} 
            onChange={(e) => setDateInput(e.target.value)} 
            required 
          />
          <br />
          {/* Input for entering a task */}
          <input
            type="text"
            name="taskInput"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter task"
            required
          />
          {/* Submit button for the form */}
          <input type="submit" value="Add Task" />
        </form>

        {/* Display list of tasks */}
        <div className="display-task">
          {task.map((item, i) => (
            <div key={i}>
              <span>{item.task} </span>
              <span>{item.date} </span>
              {/* Button to remove a task */}
              <button onClick={() => removeTaskHandler(i)} id={i}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

// Map Redux state to component props
const mapStateToProps = (state) => ({
  task: state.reducer.task,
});

// Map dispatch actions to component props
const mapDispatchToProps = (dispatch) => ({
  addTask: (task, date) => dispatch(addTask(task, date)),
  removeTask: (index) => dispatch(removeTask(index)),
  updateTask: (index) => dispatch(updateTask(index)),
});

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
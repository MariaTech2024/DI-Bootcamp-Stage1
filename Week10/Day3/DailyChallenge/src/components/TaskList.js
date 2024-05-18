import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
import { addTask, removeTask, updateTask } from '../features/taskSlice';

//Functional component for the task list
const TaskList = () => {
  //Retrieve selectedDay and tasks from Redux store
  const selectedDay = useSelector((state) => state.tasks.selectedDay);
  const tasks = useSelector((state) => state.tasks.tasksByDay[selectedDay] || []);
  const dispatch = useDispatch(); //useDispatch hook to dispatch actions
  const [newTaskText, setNewTaskText] = useState(''); //State to manage new task input

  //Function to handle adding a new task
  const handleAddTask = () => {
    //If new task text is empty, return
    if (newTaskText.trim() === '') return;
    //Create new task object
    const newTask = { id: Date.now(), text: newTaskText, completed: false };
    //Dispatch action to add the new task
    dispatch(addTask({ day: selectedDay, task: newTask }));
    //Reset new task input
    setNewTaskText('');
  };

  //Function to handle removing a task
  const handleRemoveTask = (taskId) => {
    //Dispatch action to remove the task
    dispatch(removeTask({ day: selectedDay, taskId }));
  };

  //Function to handle toggling task completion
  const handleToggleTask = (task) => {
    //Dispatch action to update task completion status
    dispatch(updateTask({ day: selectedDay, task: { ...task, completed: !task.completed } }));
  };

  //JSX to render the task list component
  return (
    <div className="task-list-container">
      {/* Title */}
      <h2 className="task-list-title">Tasks for {selectedDay}</h2>
      {/* Container for adding new task */}
      <div className="add-task-container">
        <input
          type="text"
          placeholder="Enter task..."
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
      </div>
      {/* List of tasks */}
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            {/* Display task text with conditional styling based on completion */}
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            {/* Button to remove task */}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
            {/* Button to toggle task completion */}
            <button onClick={() => handleToggleTask(task)}>
              {task.completed ? 'Uncomplete' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TaskList;
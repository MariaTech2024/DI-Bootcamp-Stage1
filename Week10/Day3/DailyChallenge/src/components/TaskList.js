import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
import { addTask, removeTask, updateTask } from '../features/taskSlice';

const TaskList = () => {
    const selectedDay = useSelector((state) => state.tasks.selectedDay);
    const tasks = useSelector((state) => state.tasks.tasksByDay[selectedDay] || []);
    const dispatch = useDispatch();
    const [newTaskText, setNewTaskText] = useState('');
  
    const handleAddTask = () => {
      if (newTaskText.trim() === '') return;
      const newTask = { id: Date.now(), text: newTaskText, completed: false };
      dispatch(addTask({ day: selectedDay, task: newTask }));
      setNewTaskText('');
    };
  
    const handleRemoveTask = (taskId) => {
      dispatch(removeTask({ day: selectedDay, taskId }));
    };
  
    const handleToggleTask = (task) => {
      dispatch(updateTask({ day: selectedDay, task: { ...task, completed: !task.completed } }));
    };
  
    return (
      <div className="task-list-container">
        <h2 className="task-list-title">Tasks for {selectedDay}</h2>
        <div className="add-task-container">
          <input
            type="text"
            placeholder="Enter task..."
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="task-item">
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
              <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
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
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory } from '../features/selectors';
import { addTask, editTask, deleteTask, updateTaskProgress } from '../features/taskSlice';
import './Task.css'; 


const TaskList = ({ categoryId }) => {
  //Select tasks from Redux store based on category
  const tasks = useSelector(state => selectTasksByCategory(state, categoryId));
  const dispatch = useDispatch(); //Get dispatch function from Redux
  const [newTaskName, setNewTaskName] = useState(''); //State for new task name input
  const [editTaskName, setEditTaskName] = useState(''); //State for edited task name input
  const [taskIdBeingEdited, setTaskIdBeingEdited] = useState(null); //State to track task being edited

  //Function to handle adding a new task
  const handleAddTask = useCallback(() => {
    if (newTaskName) {
      //Create new task object
      const newTask = { id: Date.now().toString(), name: newTaskName, categoryId, progress: 0 };
      //Dispatch action to add task to Redux store
      dispatch(addTask(newTask));
      //Clear input field
      setNewTaskName('');
    }
  }, [newTaskName, categoryId, dispatch]);

  //Function to handle editing a task
  const handleEdit = useCallback((id, name) => {
    //Set task id and name to be edited
    setTaskIdBeingEdited(id);
    setEditTaskName(name);
  }, []);

  //Function to save edited task
  const handleSaveEdit = useCallback((id) => {
    //Dispatch action to edit task in Redux store
    dispatch(editTask({ id, newTask: { id, name: editTaskName, categoryId, progress: 0 } }));
    //Reset edit states
    setTaskIdBeingEdited(null);
    setEditTaskName('');
  }, [editTaskName, categoryId, dispatch]);

  //Function to handle task completion
  const handleComplete = useCallback((id, completed) => {
    //Dispatch action to update task progress in Redux store
    dispatch(updateTaskProgress({ id, progress: completed ? 100 : 0 }));
  }, [dispatch]);

  //Function to handle task deletion
  const handleDelete = useCallback((id) => {
    //Dispatch action to delete task from Redux store
    dispatch(deleteTask(id));
  }, [dispatch]);

  return (
    <div className="task-container">
      <h2>Tasks</h2>
      <input 
        className="task-input"
        type="text" 
        value={newTaskName} 
        onChange={e => setNewTaskName(e.target.value)} 
        placeholder="New task name" 
      />
      <button className="task-button" onClick={handleAddTask}>Add Task</button>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.progress === 100 ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.progress === 100}
              onChange={e => handleComplete(task.id, e.target.checked)}
            />
            {taskIdBeingEdited === task.id ? (
              <div>
                <input 
                  type="text" 
                  value={editTaskName} 
                  onChange={e => setEditTaskName(e.target.value)} 
                  placeholder="Edit task name" 
                />
                <button className="task-button" onClick={() => handleSaveEdit(task.id)}>Save</button>
                <button className="task-button" onClick={() => setTaskIdBeingEdited(null)}>Cancel</button>
              </div>
            ) : (
              <span>{task.name}</span>
            )}
            <div>
              <button className="task-button" onClick={() => handleEdit(task.id, task.name)}>Edit</button>
              <button className="task-button" onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
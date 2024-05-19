import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasksByCategory } from '../features/selectors';

const TaskList = ({ categoryId }) => {
  const tasks = useSelector(state => selectTasksByCategory(state, categoryId));

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name} - {task.progress}%</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
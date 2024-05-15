import React from 'react';

// TaskList component accepts tasksByDay as a prop
const TaskList = ({ tasksByDay }) => {
    return (
        // Container for all tasks
        <div className='all-tasks'>
            {/* Iterate over each day in tasksByDay object */}
            {Object.keys(tasksByDay).map(day => (
                // Key for each day to ensure unique identification in the virtual DOM
                <div key={day}>
                    {/* Display the day */}
                    <h2>{day}</h2>
                    
                    {/* Iterate over each task for the given day */}
                    {tasksByDay[day].map(task => (
                        // Key for each task to ensure unique identification in the virtual DOM
                        <div key={task.id}>
                            {/* Display task title */}
                            <h3>{task.title}</h3>
                            {/* Display task description */}
                            <p>{task.description}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TaskList;
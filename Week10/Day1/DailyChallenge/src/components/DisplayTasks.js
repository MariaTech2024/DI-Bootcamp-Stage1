import { useContext } from 'react';
import { TaskContext } from '../TaskContext';

//Component to display tasks and handle task actions
const DisplayTasks = () => {
    //Accessing task context
    const [state, dispatch] = useContext(TaskContext);

    //Function to toggle completion status of a task
    const toggleTask = id => {
        dispatch({ type: 'TOGGLE_TASK', payload: id });
    };

    //Function to remove a task
    const removeTask = id => {
        dispatch({ type: 'REMOVE_TASK', payload: id });
    };

    //Function to set the editing ID for a task
    const editTask = id => {
        dispatch({ type: 'SET_EDITING_ID', payload: id });
    }

    //Filtering tasks based on current filter
    let displayedTasks = [...state.tasks];
    if(state.filter === 'ACTIVE') {
        displayedTasks = displayedTasks.filter(task => !task.completed);
    } else if(state.filter === 'COMPLETED') {
        displayedTasks = displayedTasks.filter(task => task.completed);
    }

    //Rendering tasks
    return (
        <div>
            {/* Buttons to filter tasks */}
            <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'ALL' })}>All Tasks</button>
            <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'ACTIVE' })}>Active Tasks</button>
            <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'COMPLETED' })}>Completed Tasks</button>
            {/* Rendering tasks */}
            {displayedTasks.map(task => (
                <div key={task.id}>
                    {/* Checkbox to toggle completion status */}
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                    />
                    {/* Task text with strike-through if completed */}
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                    {/* Button to remove task */}
                    <button onClick={() => removeTask(task.id)}>Remove</button>
                    {/* Button to edit task */}
                    <button onClick={() => editTask(task.id)}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default DisplayTasks;
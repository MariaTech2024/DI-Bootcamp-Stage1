import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../TaskContext';

//Component to add or edit tasks
const AddTask = () => {
    // Accessing task context
    const [state, dispatch] = useContext(TaskContext);
    
    //State to hold task text input
    const [taskText, setTaskText] = useState('');

    //Function to add or edit a task
    const addOrEditTask = () => {
        //If editing an existing task
        if (state.editingId) {
            //Dispatching action to edit task
            dispatch({
                type: 'EDIT_TASK',
                payload: { id: state.editingId, text: taskText }
            });
            //Dispatching action to clear editing ID
            dispatch({
                type: 'SET_EDITING_ID',
                payload: null
            });
        } else { //If adding a new task
            //Dispatching action to add task
            dispatch({
                type: 'ADD_TASK',
                payload: { id: Date.now(), text: taskText, completed: false }
            });
        }
        //Clearing task text input
        setTaskText('');
    };

    //Effect to update task text input when editing
    useEffect(() => {
        const taskToEdit = state.tasks.find(task => task.id === state.editingId);
        if (taskToEdit) {
            setTaskText(taskToEdit.text);
        }
    }, [state.editingId]);

    //Rendering task input and button
    return (
        <div>
            {/* Input for task text */}
            <input value={taskText} onChange={e => setTaskText(e.target.value)}/>
            {/* Button to add or edit task */}
            <button onClick={addOrEditTask}>{state.editingId ? 'Edit' : 'Add'}</button>
        </div>
    );
};


export default AddTask;
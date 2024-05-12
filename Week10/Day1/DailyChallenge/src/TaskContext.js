import { createContext, useReducer } from 'react';

//Initial state for the context
const initialState = {
    tasks: [],            //Array to hold tasks
    editingId: null,      //ID of task being edited
    filter: 'ALL'         //Current filter for tasks
};

//Creating the context with initial state
export const TaskContext = createContext(initialState);

//Reducer function to handle state changes
const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            //Add a task to the tasks array
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'REMOVE_TASK':
            //Remove a task from the tasks array
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case 'TOGGLE_TASK':
            //Toggle completion status of a task
            return { ...state, tasks: state.tasks.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task) };
        case 'EDIT_TASK':
            //Edit the text of a task
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? { ...task, text: action.payload.text } : task)
            };
        case 'SET_EDITING_ID':
            //Set the ID of the task being edited
            return { ...state, editingId: action.payload };
        case 'FILTER_TASKS':
            //Set the filter for tasks
            return { ...state, filter: action.payload };
        default:
            //Return current state if action type is not recognized
            return state;
    }
};

//Component to provide the task context to its children
export const TaskProvider = props => {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    return (
        <TaskContext.Provider value={[state, dispatch]}>
            {props.children}
        </TaskContext.Provider>
    );
};
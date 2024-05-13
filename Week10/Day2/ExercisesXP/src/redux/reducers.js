import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from "./actions";

//Initial state for the tasks
const InitialState = {
    tasks: [],
}

//Reducer function to handle state updates for tasks
export const taskReducer = (state = InitialState, action) => {
    switch (action.type) {
        //Case for adding a new task
        case ADD_TASK:
            //Copy the current tasks array and add the new task
            const updatedTasksAdd = [...state.tasks]
            updatedTasksAdd.push(action.payload)
            //Return the updated state with the new tasks array
            return { ...state, tasks: updatedTasksAdd }

        //Case for removing a task
        case REMOVE_TASK:
            //Copy the current tasks array and remove the task at the specified index
            const updatedTasksRemove = [...state.tasks]
            updatedTasksRemove.splice(action.payload, 1)
            //Return the updated state with the modified tasks array
            return { ...state, tasks: updatedTasksRemove }

        //Case for completing a task
        case COMPLETE_TASK:
            //Map through the tasks array and toggle the completion status of the task at the specified index
            const updatedTasksComplete = state.tasks.map((task, index) => {
                if (index === action.payload) {
                    return { ...task, isCompleted: !task.isCompleted };
                }
                return task;
            });
            //Return the updated state with the modified tasks array
            return { ...state, tasks: updatedTasksComplete };

        //Default case: return the current state
        default:
            return state
    }
};
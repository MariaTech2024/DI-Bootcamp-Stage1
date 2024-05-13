//Exercise: Basic Todo List with React-Redux. Create a todo list application using React and Redux to manage the state of the todos.

import { useRef } from 'react'
import './App.css'
import { addTask, removeTask, completeTask } from './redux/actions'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  //Get tasks from the Redux store
  const tasks = useSelector((state) => state.taskReducer.tasks)
  const dispatch = useDispatch()
  const inputRef = useRef()

  //Function to handle adding a new task
  const handleAddTask = () => {
    //Dispatch an action to add a new task to the Redux store
    dispatch(addTask({ name: inputRef.current.value, isCompleted: false }))
    //Clear the input field after adding the task
    inputRef.current.value = null
  }

  return (
    <div className="container">
      {/* Title */}
      <h1>TODO List</h1>
      {/* Input field and button to add a new task */}
      <div className="input-container">
        <input placeholder='Add task' ref={inputRef}/>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {/* Task list */}
      <div className="task-container">
        {/* Map through tasks and display each task */}
        {tasks.map((item, i) => {
          return (
            <div key={i} className={`task ${item.isCompleted ? 'completed' : ''}`}>
              <span>
                {/* Display task name with or without line-through based on completion status */}
                {item.isCompleted ? <p style={{ textDecoration: 'line-through' }}>{item.name}</p> : <p>{item.name}</p>}
                {/* Button to mark task as completed */}
                <button onClick={() => dispatch(completeTask(i))}>Complete</button> 
                {/* Button to remove task */}
                <button onClick={() => dispatch(removeTask(i))}>Remove</button>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App;
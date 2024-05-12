//Daily Challenge: Enhanced Task Manager
//Enhance the Task Manager application by adding new features, including the ability to edit tasks and filter tasks by completion status, using useContext, useReducer, and useRef.


import './App.css';
import { TaskProvider } from './TaskContext';
import AddTask from './components/AddTask';
import DisplayTasks from './components/DisplayTasks';

function App() {
  return (
    <TaskProvider>
      <AddTask/>
      <DisplayTasks/>
    </TaskProvider>
  );
}

export default App;
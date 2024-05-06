import React from "react";
import './App.css';
import Car from './Components/Car';
import Garage from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone'; 
import Color from './Components/Color';

/** 
EXERCISE 1: Car and components

const carInfo = { name: "Ford", model: "Mustang" };

function App() {
    return (
        <div>
            <Car model={carInfo.model} />
        </div>
    );
}

export default App;
*/


/** 
//EXERCISE 2: Events
function App() {
  return (
      <div>
          <Events />
      </div>
  );
}

export default App;
*/


/** 
//EXERCISE 3: Phone and components

function App() {
  return (
      <div>
          <Phone />
      </div>
  );
}

export default App;
*/


//EXERCISE 4: UseEffect hook

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Color/>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

/** 
//EXERCISE 1: With JSX

function App() {
  //Display a “Hello World!” message in a paragraph.
  const helloMessage = <p>Hello World!</p>;
  //Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
  const myelement = <h1>I Love JSX!</h1>;
  //Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"
  const sum = 5 + 5;

  return (
    <div className="App">
      {helloMessage}
      {myelement}
      <p>React is {sum} times better with JSX</p>
    </div>
  );
}

export default App;
*/


/** 
//EXERCISE 2: Object 
import UserFavoriteAnimals from './UserFavoriteAnimals';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
};

function App() {
  return (
    <div>
      <h3>First Name: {user.firstName}</h3>
      <h3>Last Name: {user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </div>
  );
}

export default App;
*/


//EXERCISE 3: HTML Tags in React
import Exercise from './Exercise3';

function App() {
  return (
    <div className="App">
      {/* Render the Exercise component */}
      <Exercise />
    </div>
  );
}

export default App;
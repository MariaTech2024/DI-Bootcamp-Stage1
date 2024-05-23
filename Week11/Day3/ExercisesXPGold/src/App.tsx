/** 
//Exercise 1: Using TypeScript with a Custom Hook
//Create a custom hook called useCounter that manages a counter state and returns functions to increment and decrement the counter. Demonstrate how to use the hook in a functional React component.

import React from 'react';
import CounterComponent from './CounterComponent';

const App: React.FC = () => {
  return (
    <div>
      <CounterComponent />
    </div>
  );
};

export default App;
*/


/** 
//Exercise 2: Extending an Interface in TypeScript with React
//Create a Profile interface with properties name and age, and extend it with a UserProfile interface that adds a bio property. Use the UserProfile interface as the props type for a React component.
import React from 'react';
import UserProfileComponent from './UserProfileComponent';

const App: React.FC = () => {
  const user: { name: string; age: number; bio: string } = {
    name: 'John Doe',
    age: 30,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <div>
      <UserProfileComponent {...user} />
    </div>
  );
};

export default App;
*/


/** 
//Exercise 3: Combining Multiple Hooks in a React Component with TypeScript
//Create a functional React component that uses multiple hooks: useState for managing a name, useEffect for fetching data from an API, and a custom hook for managing a counter. Combine the hooks in a single component and demonstrate their usage.
import React from 'react';
import MyComponent from './MyComponent';

const App: React.FC = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

export default App;
*/
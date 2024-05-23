/** 
//Exercise 2: Creating a React Component with TypeScript
//Create a simple React component called Greeting that accepts a name prop (a string) and displays a greeting message using that prop.

import React from 'react';
import Greeting from './Greeting';

const App: React.FC = () => {
  return (
    <div>
      <Greeting name="John" />
    </div>
  );
};

export default App;

//OUTPUT:  http://localhost:5173/
*/



/** 
//Exercise 3: Using useState Hook with TypeScript in React
//Create a functional React component that uses the useState hook to manage a counter. The component should display the current count and have buttons to increment and decrement the count.
import React from 'react';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;

//OUTPUT:  http://localhost:5173/
*/



/** 
//Exercise 4: Creating a React Component with Optional Props
//Create a React component called UserCard that accepts optional props name and age and displays them in a card. If the props are not provided, the component should display a default message.
import React from 'react';
import UserCard from './UserCard';

const App: React.FC = () => {
  return (
    <div>
      <UserCard name="Jack Smith" age={35} />
      <UserCard name="Jane Smith" />
      <UserCard age={25} />
      <UserCard />
    </div>
  );
};

export default App;
//OUTPUT:  http://localhost:5173/
*/



//Exercise 5: Using useEffect Hook with TypeScript in React
//Create a functional React component that uses the useEffect hook to fetch data from an API when the component mounts. Display the fetched data in the component.
import React from 'react';
import DataFetcher from './DataFetcher';

const App: React.FC = () => {
  return (
    <div>
      <DataFetcher />
    </div>
  );
};

export default App;
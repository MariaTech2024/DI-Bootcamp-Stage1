//Exercise 2: Creating a React Component with TypeScript
//Create a simple React component called Greeting that accepts a name prop (a string) and displays a greeting message using that prop.

import React from 'react';

// Define the props type
interface GreetingProps {
  name: string;
}

// Define the Greeting component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;
//Exercise 3: Using useState Hook with TypeScript in React
//Create a functional React component that uses the useState hook to manage a counter. The component should display the current count and have buttons to increment and decrement the count.

import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
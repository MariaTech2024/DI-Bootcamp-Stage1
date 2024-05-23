import React from 'react';
import useCounter from './useCounter'; // Importing the custom hook for managing the counter

// Functional component for a counter
const CounterComponent: React.FC = () => {
  // Using the custom hook to manage the counter state and functions
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      {/* Displaying the current count */}
      <h1>Counter: {count}</h1>
      {/* Button to increment the counter */}
      <button onClick={increment}>Increment</button>
      {/* Button to decrement the counter */}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
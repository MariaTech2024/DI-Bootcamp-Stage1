import { useState } from 'react';

// Custom hook for managing a counter state
const useCounter = (initialValue: number = 0) => {
  // Initialize the counter state using useState hook
  const [count, setCount] = useState(initialValue);

  // Function to increment the counter
  const increment = () => setCount(prevCount => prevCount + 1);

  // Function to decrement the counter
  const decrement = () => setCount(prevCount => prevCount - 1);

  // Return the counter state and functions to increment and decrement the counter
  return {
    count,
    increment,
    decrement,
  };
};

export default useCounter;
import React, { useState, useEffect } from 'react';
import useCounter from './useCounter';

const MyComponent: React.FC = () => {
  // State hook for managing name
  const [name, setName] = useState<string>('');

  // Effect hook for fetching data from an API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        setName(data.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once

  // Custom hook for managing a counter
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
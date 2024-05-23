//Exercise 5: Using useEffect Hook with TypeScript in React
//Create a functional React component that uses the useEffect hook to fetch data from an API when the component mounts. Display the fetched data in the component.

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the type for the data you are fetching
interface Data {
  id: number;
  title: string;
  body: string;
}

const DataFetcher: React.FC = () => {
  // State to hold the fetched data
  const [data, setData] = useState<Data[]>([]);
  // State to hold loading status
  const [loading, setLoading] = useState<boolean>(true);
  // State to hold error status
  const [error, setError] = useState<string | null>(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Data[]>('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
//Exercise 4: Creating a React Component with Optional Props
//Create a React component called UserCard that accepts optional props name and age and displays them in a card. If the props are not provided, the component should display a default message.
import React from 'react';

// Define the props type
interface UserCardProps {
  name?: string;
  age?: number;
}

// Define the UserCard component
const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  return (
    <div style={styles.card}>
      {name || age ? (
        <>
          <h2 style={styles.name}>{name || "Name not provided"}</h2>
          <p style={styles.age}>{age !== undefined ? `Age: ${age}` : "Age not provided"}</p>
        </>
      ) : (
        <p style={styles.defaultMessage}>No user information provided</p>
      )}
    </div>
  );
};

// Define some basic styles for the card
const styles: { [key: string]: React.CSSProperties } = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    maxWidth: '300px',
    margin: '16px auto',
    textAlign: 'center' as 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  name: {
    margin: '0',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  age: {
    margin: '8px 0 0',
    fontSize: '18px',
    color: '#555',
  },
  defaultMessage: {
    margin: '0',
    fontSize: '18px',
    color: '#999',
  },
};

export default UserCard;
import React from 'react';

// Define the Profile interface with name and age properties
interface Profile {
  name: string;
  age: number;
}

// Extend the Profile interface to include the bio property
interface UserProfile extends Profile {
  bio: string;
}

// Functional component that takes props of type UserProfile
const UserProfileComponent: React.FC<UserProfile> = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfileComponent;
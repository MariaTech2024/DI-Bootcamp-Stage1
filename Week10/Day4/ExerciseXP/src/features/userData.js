import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from './userSlice';

const UserData = () => {
  //Get the dispatch function from Redux to dispatch actions
  const dispatch = useDispatch();

  //Extract user-related state from the Redux store
  const { userData, loading, error } = useSelector((state) => state.user);

  //useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    //Dispatch the fetchUserData thunk action to fetch user data
    dispatch(fetchUserData());
  }, [dispatch]);

  //Show loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  //Show error message if there was an error fetching data
  if (error) {
    return <div>Error: {error}</div>;
  }

  //Render user data if available
  return (
    <div>
      <h1>User Data</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* Add more user fields as needed */}
    </div>
  );
};

export default UserData;
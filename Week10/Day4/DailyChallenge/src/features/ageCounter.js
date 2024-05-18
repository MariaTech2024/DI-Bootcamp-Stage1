import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ageUpAsync, ageDownAsync } from './ageSlice';


const AgeCounter = () => {
    //Use useSelector to get the age value from the Redux store
    const age = useSelector((state) => state.age.value);
    //Use useSelector to get the loading state from the Redux store
    const loading = useSelector((state) => state.age.loading);
    //Use useDispatch to get the dispatch function from the Redux store
    const dispatch = useDispatch();
  
    return (
      <div>
        <h1>Age: {age}</h1> {/* Display the current age */}
        {loading ? ( //Conditionally render based on the loading state
          <p>Loading...</p> //Show a loading message if an async action is in progress
        ) : (
          <div>
            <button onClick={() => dispatch(ageUpAsync())}>Age Up</button> {/* Dispatch ageUpAsync action when clicked */}
            <button onClick={() => dispatch(ageDownAsync())}>Age Down</button> {/* Dispatch ageDownAsync action when clicked */}
          </div>
        )}
      </div>
    );
  };

export default AgeCounter;
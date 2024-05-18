import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';

const Component = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(state => state.someReducer);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Display fetched data */}
    </div>
  );
};

export default Component;
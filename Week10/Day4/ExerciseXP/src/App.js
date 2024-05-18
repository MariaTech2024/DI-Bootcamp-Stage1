//Exercise: Fetching User Data with Redux Thunk.
//Create a simple React-Redux application that fetches and displays user data from an API using Redux Thunk for asynchronous logic.

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserData from './features/userData';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UserData />
      </div>
    </Provider>
  );
};

export default App;
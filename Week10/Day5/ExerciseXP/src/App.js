// Exercise: Book Inventory Selector
//You’re tasked with building a simple book inventory management application using Redux. The application maintains information about various books, including their titles, authors, and genres.
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BookList from './features/BookList';
import './App.css';


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BookList />
      </div>
    </Provider>
  );
};

export default App;
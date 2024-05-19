import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks
} from './booksSlice';

const BookList = () => {
    const [genre, setGenre] = useState('All');  //State to track the selected genre
    const books = useSelector(selectBooks);  //Getting all books from the store
    const horrorBooks = useSelector(selectHorrorBooks);  //Getting horror books from the store
    const fantasyBooks = useSelector(selectFantasyBooks);  //Getting fantasy books from the store
    const scienceFictionBooks = useSelector(selectScienceFictionBooks);  //Getting science fiction books from the store
  
    //Determine which books to display based on the selected genre
    let displayedBooks;
    switch (genre) {
      case 'Horror':
        displayedBooks = horrorBooks;
        break;
      case 'Fantasy':
        displayedBooks = fantasyBooks;
        break;
      case 'Science Fiction':
        displayedBooks = scienceFictionBooks;
        break;
      default:
        displayedBooks = books;
    }
  
    return (
      <div className="container">
        <h1>Book Inventory</h1>
        <div className="button-container">
          {/* Buttons to set the genre filter */}
          <button onClick={() => setGenre('All')}>All</button>
          <button onClick={() => setGenre('Horror')}>Horror</button>
          <button onClick={() => setGenre('Fantasy')}>Fantasy</button>
          <button onClick={() => setGenre('Science Fiction')}>Science Fiction</button>
        </div>
        <ul>
          {/* Displaying the filtered list of books */}
          {displayedBooks.map(book => (
            <li key={book.id}>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <p>{book.genre}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BookList;
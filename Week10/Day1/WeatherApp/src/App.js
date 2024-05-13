import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WeatherPage from './components/WeatherPage';
import FavoritesPage from './components/FavoritesPage';
import { Container } from '@mui/material';

function App() {
  //State to manage favorite cities
  const [favorites, setFavorites] = useState([]);
  
  const apiKey = 'QQgbVFZ5ibkFV7ilN0VqJ4BJ95DZ7xqN';

//Function to add a city to favorites
  const addToFavorites = (city) => {
    setFavorites([...favorites, city]);
  };

  //Function to remove a city from favorites
  const removeFromFavorites = (city) => {
    setFavorites(favorites.filter((fav) => fav !== city));
  };

  return (
    <Router>
      <Container maxWidth="sm">
      <Link to="/favorites">Go to Favorites</Link> {/* Link to navigate to Favorites page */}
        <Routes>
          <Route
            path="/"
            element={<WeatherPage addToFavorites={addToFavorites} apiKey={apiKey} />} // Pass apiKey prop here
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                removeFromFavorites={removeFromFavorites}
              />
            }
          />
        </Routes>
</Container>
    </Router>
    
  );
}

export default App;
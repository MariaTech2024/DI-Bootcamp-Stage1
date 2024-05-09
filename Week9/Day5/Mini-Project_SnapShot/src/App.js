import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Mountain, Beaches, Birds, Food } from './components/Images';
import Search from './components/Search';

const App = () => {
  // Initialize searchTerm state using useState
  const [searchTerm, setSearchTerm] = useState("");

  // Handler function for performing a search
  const handleSearch = () => {
      // Perform search based on searchTerm
      console.log("Search triggered for:", searchTerm);
  };

  return (
      <Router>
          <NavBar
              onSearch={handleSearch}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
          />
          <Routes>
              <Route path="/mountain" element={<Mountain />} />
              <Route path="/beaches" element={<Beaches />} />
              <Route path="/birds" element={<Birds />} />
              <Route path="/food" element={<Food />} />
          </Routes>
      </Router>
  );
};

export default App;
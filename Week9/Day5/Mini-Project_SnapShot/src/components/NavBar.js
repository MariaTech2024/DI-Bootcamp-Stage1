import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ onSearch, searchTerm, setSearchTerm }) => {
    return (
        <header className="navbar">
            {/* Title: Snapshot */}
            <h1>Snapshot</h1>

            {/* Search bar and button */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for images..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button onClick={(event) => { event.preventDefault(); onSearch(); }} className="search-button">Search</button>
            </div>

            {/* Category Buttons */}
            <div className="category-buttons">
                <Link to="/mountain" className="category-button">Mountain</Link>
                <Link to="/beaches" className="category-button">Beaches</Link>
                <Link to="/birds" className="category-button">Birds</Link>
                <Link to="/food" className="category-button">Food</Link>
            </div>
        </header>
    );
};

export default NavBar;
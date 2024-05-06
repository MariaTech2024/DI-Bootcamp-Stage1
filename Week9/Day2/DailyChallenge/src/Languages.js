import React, { useState } from 'react';
import './App.css'; // Importing the CSS file

function App() {
    const [languages, setLanguages] = useState([
        { name: 'Php', votes: 0 },
        { name: 'Python', votes: 0 },
        { name: 'JavaScript', votes: 0 },
        { name: 'Java', votes: 0 },
    ]);

    // Function to handle voting for a specific language
    const voter = (index) => {
        setLanguages((prevLanguages) =>
            prevLanguages.map((language, i) =>
                i === index ? { ...language, votes: language.votes + 1 } : language
            )
        );
    };

    return (
        <div className="app-container">
            <h1>Programming Language Voting App</h1>
            <ul className="language-list">
                {languages.map((item, i) => (
                    <li key={i} className="language-item">
                        <span className = "language-votes">{item.votes}</span> 
                        <span className="language-name" style={{ fontWeight: 'bold' }}>{item.name}</span>
                        <button className="vote-button" onClick={() => voter(i)}>
                            Click Here
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
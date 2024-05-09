import { useState, useEffect } from "react";
import quotes from '../quotes.js';

const Quote_gen = (props) => {
const [currentQuote, setCurrentQuote] = useState({});
const [textColor, setTextColor] = useState('#000000');
const [buttonColor, setButtonColor] = useState('#000000');
const [usedQuotes, setUsedQuotes] = useState([]);

useEffect(() => {
  document.body.style.backgroundColor = textColor;
}, [textColor]);

useEffect(() => {
  generateRandomQuote();
}, []);

const generateRandomQuote = () => {
  if (usedQuotes.length === quotes.length) {
    setUsedQuotes([]);
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (usedQuotes.includes(randomIndex));

  setCurrentQuote(quotes[randomIndex]);
  setUsedQuotes([...usedQuotes, randomIndex]);
  changeColors();
};

const changeColors = () => {

  const newTextColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const newButtonColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  
  setTextColor(newTextColor);
  setButtonColor(newButtonColor);
};

return (
  <div style={{ color: textColor, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
    <div style={{ backgroundColor: '#f8f9fa', color: textColor, textAlign: 'center',  padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '600px', maxWidth: '100%' }}>
      <h1 style={{ color: textColor }}>{currentQuote.quote}</h1>
      <p style={{ color: textColor }}>— {currentQuote.author}</p>
      <button
        onClick={generateRandomQuote}
        style={{
          backgroundColor: buttonColor,
          color: '#ffffff',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        New Quote
      </button>
    </div>
  </div>
);
}

export default Quote_gen;
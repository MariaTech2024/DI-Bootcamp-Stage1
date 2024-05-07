import React, { useState } from 'react';
import Modal from './Components/Modal';
import './App.css';

function App() {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Error details array
  const errorDetails = [
      "in r",
      "in div",
      "in ir",
      "in StrictMode"
  ];

  // Function to handle button click
  const handleButtonClick = () => {
      setIsModalOpen(true);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
      setIsModalOpen(false);
  };

  return (
      <div className="App">
          <button onClick={handleButtonClick}>Occur an error</button>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} errorDetails={errorDetails} />
      </div>
  );
}

export default App;
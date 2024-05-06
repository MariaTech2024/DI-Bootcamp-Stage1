import React, { useState } from 'react';

/** 
//Part I
const Forms = () => {
  const [username, setUsername] = useState('');

  // Function to handle changes to the input field
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <h1>{username}</h1> 
      <form>
        <label>
          Name:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Forms;
*/

/** 
//Part II: Conditional Rendering
const Forms = () => {
    const [username, setUsername] = useState('');
  
    const handleInputChange = (event) => {
      setUsername(event.target.value);
    };
  
    let header = null;
    if (username) {
      header = <h1>{username}</h1>;
    }
  
    return (
      <div>
        {header}
        <form>
          <label>
            Name:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
          </label>
        </form>
      </div>
    );
  };

export default Forms;
*/

/** 
//PART III: Submitting Forms
const Forms = () => {
    const [username, setUsername] = useState('');
  
    const handleInputChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent the form from submitting in the traditional way
      alert(username);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

export default Forms;
*/

/** 
//PART IV: Multiple Input Fields
const Forms = () => {
    const [formData, setFormData] = useState({
      username: '',
      age: null,
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent the form from submitting in the traditional way
      alert(`Name: ${formData.username}, Age: ${formData.age}`);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {formData.username && formData.age && (
          <h1>
            Name: {formData.username}, Age: {formData.age}
          </h1>
        )}
      </div>
    );
  };

export default Forms;
*/

/** 
//PART V: Validating Form Input
const Forms = () => {
    const [formData, setFormData] = useState({
      username: '',
      age: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
  
      if (name === 'age' && isNaN(value)) {
        setErrorMessage('Your age must be a number.');
      } else {
        setErrorMessage('');
      }
  
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent form submission
  
      if (isNaN(formData.age)) {
        alert('Please enter a numeric age.');
      } else {
        alert(`Name: ${formData.username}, Age: ${formData.age}`);
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  };

export default Forms;
*/

/** 
//PART VI: Textarea
const Forms = () => {
    const [textAreaValue, setTextAreaValue] = useState('Initial content...');
  
    const handleTextAreaChange = (event) => {
      setTextAreaValue(event.target.value);
    };
  
    return (
      <div>
        <form>
          <label>
            Textarea:
            <textarea
              value={textAreaValue}
              onChange={handleTextAreaChange}
            />
          </label>
        </form>
      </div>
    );
  };

export default Forms;
*/


//PART VII: Select
const Forms = () => {
    const [selectedCar, setSelectedCar] = useState('Volvo');
  
    const handleSelectChange = (event) => {
      setSelectedCar(event.target.value);
    };
  
    return (
      <div>
        <form>
          <label>
            Car:
            <select value={selectedCar} onChange={handleSelectChange}>
              <option value="Volvo">Volvo</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
            </select>
          </label>
        </form>
      </div>
    );
  };

export default Forms;
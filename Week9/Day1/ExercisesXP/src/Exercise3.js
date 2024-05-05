import React, { Component } from 'react';
import './Exercise.css';

//In a separate Javascript file, named Exercise3.js, create a new Class Component called Exercise that contains some HTML tags. 

class Exercise extends Component {
  render() {
    // Object to style the <h1> tag
    const styleHeader = {
      color: 'white',
      backgroundColor: 'DodgerBlue',
      padding: '10px',
      fontFamily: 'Arial'
    };

    return (
        <div>
          {/* Create a <h1> tag with red text color and lightblue background color */}
          <h1 style={styleHeader}>This is a header</h1>
  
          {/* Create a paragraph */}
          <p className="para">This is a paragraph.</p>
  
          {/* Create a link */}
          <a href="https://example.com">This is a link</a>

          <h3>This is a Form: </h3>
  
          {/* Create a form */}
          <form>
            <label>
              Enter your name:
              <p><input type="text" /><button type="submit">Submit</button></p>
            </label>
            
          </form>
          <h4>Here is an Image: </h4>
          {/* Create an image */}
          <img src="https://k2bindia.com/wp-content/uploads/2015/08/React.png" alt="React image" width="500" height="300" />
  
          {/* Create a list */}
          <h5>This is a List: </h5>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      );
  }
}

export default Exercise;
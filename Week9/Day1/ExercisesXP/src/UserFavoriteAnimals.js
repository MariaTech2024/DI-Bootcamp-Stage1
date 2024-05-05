import React, { Component } from 'react';

//Create a new Class Component called UserFavoriteAnimals. Use props to pass the favAnimals array to the UserFavoriteAnimals component.

class UserFavoriteAnimals extends Component {
  render() {
    //Destructure favAnimals from props
    const { favAnimals } = this.props;

    //Use the map method to create <li> elements for each animal
    const animalList = favAnimals.map((animal, index) => (
      <li key={index}>{animal}</li>
    ));

    return (
      <ul>
        {animalList}
      </ul>
    );
  }
}

export default UserFavoriteAnimals;
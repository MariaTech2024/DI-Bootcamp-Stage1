//Create an array which value is the planets of the solar system.
//For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
//Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
//Finally append each div to the <section> in the HTML (presented below).

const solarSystem = [
    { name: 'Mercury', color: '#bcbcbc'},
    { name: 'Venus', color: '#ffcc66'},
    { name: 'Earth', color: '#66ccff'},
    { name: 'Mars', color: '#ff9966'},
    { name: 'Jupiter', color: '#ff6666'},
    { name: 'Saturn', color: '#ffe066'},
    { name: 'Uranus', color: '#66ffcc'},
    { name: 'Neptune', color: '#6699ff'}
];

const listPlanets = document.querySelector('.listPlanets');

solarSystem.forEach(planet => {
    let planetDiv = document.createElement('div');
    planetDiv.className = 'planet';
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.innerText = planet.name;
    listPlanets.appendChild(planetDiv);
});
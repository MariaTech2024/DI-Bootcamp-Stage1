import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/*
const BootstrapCard = ({ title, imageUrl, buttonLabel, buttonUrl, description }) => {
  return (
    <div className="card m-5" style={{ width: '30rem' }}>
      <img className="card-img-top" src={imageUrl} alt={`${title} image`} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={buttonUrl} className="btn btn-primary">{buttonLabel}</a>
      </div>
    </div>
  );
};

const celebrities = [
  {
    title: 'Bob Dylan',
    imageUrl: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
    buttonLabel: 'Go to Wikipedia',
    buttonUrl: 'https://en.wikipedia.org/wiki/Bob_Dylan',
    description:
      'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
  },
  {
    title: 'Paul McCartney',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg',
    buttonLabel: 'Go to Wikipedia',
    buttonUrl: 'https://en.wikipedia.org/wiki/Paul_McCartney',
    description:
      'Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.',
  },
];

const App = () => {
  return (
    <div>
      <BootstrapCard
        title={celebrities[0].title}
        imageUrl={celebrities[0].imageUrl}
        buttonLabel={celebrities[0].buttonLabel}
        buttonUrl={celebrities[0].buttonUrl}
        description={celebrities[0].description}
      />
      <BootstrapCard
        title={celebrities[1].title}
        imageUrl={celebrities[1].imageUrl}
        buttonLabel={celebrities[1].buttonLabel}
        buttonUrl={celebrities[1].buttonUrl}
        description={celebrities[1].description}
      />
    </div>
  );
};

export default App;

*/

const App = () => {
  // Array of planets
  const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

  // Render the planets as list items within a Bootstrap list-group
  return (
    <div className="container">
      <ul className="list-group mt-4">
        {planets.map((planet, index) => (
          <li key={index} className="list-group-item"
            style={{ padding: '10px 20px', fontSize: '14px' }}>
            {planet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
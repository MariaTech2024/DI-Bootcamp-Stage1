import './FormData.css';

const FormData = ({
  name,
  lastName,
  age,
  gender,
  destination,
  nuts_free,
  lactose_free,
  vegan_meal,
}) => {
  return (
    <section className="display">
      <h3>Entered information:</h3>
      
      {/* Displaying the user's full name */}
      <p>
        Your name: {name} {lastName}
      </p>
      
      {/* Displaying the user's age */}
      <p>Your age: {age}</p>
      
      {/* Displaying the user's gender */}
      <p>Your gender: {gender}</p>
      
      {/* Displaying the user's selected destination */}
      <p>Your destination: {destination}</p>

      {/* Displaying the user's dietary restrictions */}
      <p>Your dietary restrictions:</p>
      
      {/* Displaying whether the user has a nuts-free diet */}
      <p className="restriction">**Nuts free: {nuts_free}</p>
      
      {/* Displaying whether the user has a lactose-free diet */}
      <p className="restriction">**Lactose free: {lactose_free}</p>
      
      {/* Displaying whether the user has a vegan meal preference */}
      <p className="restriction">**Vegan meal: {vegan_meal}</p>
    </section>
  );
};

export default FormData;
import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import FormData from "./Components/FormData";

function App() {
  // Declare state variables to hold form input data
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [destination, setDestination] = useState("");
  const [nuts_free, setNuts_free] = useState("No");
  const [lactose_free, setLactose_free] = useState("No");
  const [vegan_meal, setVegan_meal] = useState("No");

  return (
    <div className="App">
      {/* Render the Form component to collect user input */}
      {/* Pass state update functions as props to allow the Form component to update the state */}
      <Form
        setName={setName}
        setLastName={setLastName}
        setAge={setAge}
        setGender={setGender}
        setDestination={setDestination}
        setNuts_free={setNuts_free}
        setLactose_free={setLactose_free}
        setVegan_meal={setVegan_meal}
      />

      {/* Horizontal rule to visually separate the form from the form data display */}
      <hr />

      {/* Render the FormData component to display the user's input data */}
      {/* Pass the current state values as props to display them in the FormData component */}
      <FormData
        name={name}
        lastName={lastName}
        age={age}
        gender={gender}
        destination={destination}
        nuts_free={nuts_free}
        lactose_free={lactose_free}
        vegan_meal={vegan_meal}
      />
    </div>
  );
}

export default App;
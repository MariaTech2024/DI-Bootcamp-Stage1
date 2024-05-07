import "./Form.css";

const Form = ({
    setName,
    setLastName,
    setAge,
    setGender,
    setDestination,
    setNuts_free,
    setLactose_free,
    setVegan_meal,
  }) => {
    return (
      <section className="form">
        <h1>Sample form</h1>
        <form>
          {/* Input for First Name */}
          <input
            type="text"
            name="name"
            placeholder="First Name"
            onChange={(e) => setName(e.target.value)} // Calls setName with input value on change
          />
          
          {/* Input for Last Name */}
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)} // Calls setLastName with input value on change
          />
          
          {/* Input for Age */}
          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)} // Calls setAge with input value on change
          />
          
          {/* Radio button for selecting gender (Male) */}
          <div className="gender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={(e) => setGender(e.target.value)} // Calls setGender with input value on change
            />
            <label htmlFor="male">Male</label>
          </div>
          
          {/* Radio button for selecting gender (Female) */}
          <div className="gender">
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(e) => setGender(e.target.value)} // Calls setGender with input value on change
            />
            <label htmlFor="female">Female</label>
          </div>
  
          {/* Select dropdown for choosing a travel destination */}
          <div className="select_destination">
            <h5>Select your destination</h5>
            <div>
              <select
                name="destination"
                id="dest"
                onChange={(e) => setDestination(e.target.value)} // Calls setDestination with selected value on change
              >
                <option>--Please choose a destination--</option>
                <option value="Israel">Israel</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
          </div>
          
          {/* Section for dietary restrictions */}
          <h5>Dietary restrictions:</h5>
          <div>
            {/* Checkbox for specifying nuts-free diet */}
            <div className="restriction">
              <input
                type="checkbox"
                name="nuts_free"
                id="nuts_free"
                onChange={(e) => setNuts_free(e.target.checked ? "Yes" : "No")} // Calls setNuts_free with "Yes" or "No" based on checkbox state
              />
              <label htmlFor="nuts_free">Nuts free</label>
            </div>
            
            {/* Checkbox for specifying lactose-free diet */}
            <div className="restriction">
              <input
                type="checkbox"
                name="lactose_free"
                id="lactose_free"
                onChange={(e) => setLactose_free(e.target.checked ? "Yes" : "No")} // Calls setLactose_free with "Yes" or "No" based on checkbox state
              />
              <label htmlFor="lactose_free">Lactose free</label>
            </div>
            
            {/* Checkbox for specifying vegan meal */}
            <div className="restriction">
              <input
                type="checkbox"
                name="vegan"
                id="vegan"
                onChange={(e) => setVegan_meal(e.target.checked ? "Yes" : "No")} // Calls setVegan_meal with "Yes" or "No" based on checkbox state
              />
              <label htmlFor="vegan">Vegan</label>
            </div>
          </div>
          
          {/* Submit button (no event handler added) */}
          <input type="submit" />
        </form>
      </section>
    );
  };
  
  export default Form;
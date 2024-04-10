//The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. 
//Afterwards, the program will output the correct exchange rate based on the data from the APIs.

fetchCurrencies();
//Get elements from the DOM
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const switchButton = document.getElementById("switch");

//Add event listeners for conversion and currency switch buttons
document.getElementById("convert").addEventListener("click", handleClick);
switchButton.addEventListener("click", switchCurrencies);

//Add the “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted. 
function switchCurrencies() {
    [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value];
    handleClick();
}

//Fetch supported currency codes and populate dropdown menus
function fetchCurrencies() {
    const url = "https://v6.exchangerate-api.com/v6/7104d718542c6bdfbae44f33/codes";
    fetch(url)
      .then((res) => res.json())
      .then((res) => populateDropdown(res.supported_codes))
      .catch((error) => console.error(error));
}

//Populate dropdown menus with currency codes and names
function populateDropdown(codes) {
    //Convert object to array of key-value pairs
    const entries = Object.entries(codes);
//Iterate over entries and populate dropdowns
    for (const entry of entries){
       const [index, [code, name]] = entry;
        const option = document.createElement("option");
        const option2 = document.createElement("option");
        option.innerText = code + ", " + name;
        option2.innerText = code + ", " + name;
        option.value = code;
        option2.value = code;
        fromSelect.appendChild(option);
        toSelect.appendChild(option2);
    }
}

async function handleClick() {
    //Get selected currencies and input amount from dropdowns and input field
   const curr1 = fromSelect.value;
   const curr2 = toSelect.value;
   const input = document.getElementById("input");
   const summary = document.getElementById("summary");
//API URL to fetch conversion rate between selected currencies
    const url = `https://v6.exchangerate-api.com/v6/7104d718542c6bdfbae44f33/pair/${curr1}/${curr2}`;
    try {
    //Fetch data from the API
      const res = await fetch(url);
      const resJson = await res.json();
      const rate = resJson.conversion_rate;
      const amount = Number(input.value);
      const total = amount * rate;
    //Display conversion summary
      summary.innerText = `${amount} ${curr1} = ${total} ${curr2}`;
      console.log("total:", total);
   }  catch (error) {
      console.error(error);
   }
}

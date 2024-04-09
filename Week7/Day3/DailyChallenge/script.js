fetchCurrencies();
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const switchButton = document.getElementById("switch");

document.getElementById("convert").addEventListener("click", handleClick);
switchButton.addEventListener("click", switchCurrencies);

function switchCurrencies() {
    [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value];
    handleClick();
}

function fetchCurrencies() {
    const url = "https://v6.exchangerate-api.com/v6/7104d718542c6bdfbae44f33/codes";
    fetch(url)
      .then((res) => res.json())
      .then((res) => populateDropdown(res.supported_codes))
      .catch((error) => console.error(error));
}

function populateDropdown(codes) {
    const entries = Object.entries(codes);

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
   const curr1 = fromSelect.value;
   const curr2 = toSelect.value;
   const input = document.getElementById("input");
   const summary = document.getElementById("summary");

    const url = `https://v6.exchangerate-api.com/v6/7104d718542c6bdfbae44f33/pair/${curr1}/${curr2}`;
    try {
      const res = await fetch(url);
      const resJson = await res.json();
      const rate = resJson.conversion_rate;
      const amount = Number(input.value);
      const total = amount * rate;
      summary.innerText = `${amount} ${curr1} = ${total} ${curr2}`;
      console.log("total:", total);
   }  catch (error) {
      console.error(error);
   }
}

//Exercise 1 : Select a kind of Music
// Get the select element
const selectElement = document.getElementById('genres');
  
// Function to display the value of the selected option
function displaySelectedValue() {
  const selectedValue = selectElement.value;
  document.getElementById('selectedValue').innerText = `Selected Genre: ${selectedValue}`;
}

// Call the function initially to display the default selected value
displaySelectedValue();

// Add an additional option to the select element
const newOption = document.createElement('option');
newOption.value = 'classic';
newOption.text = 'Classic';
newOption.selected = true; // Set the newly added option as selected by default
selectElement.appendChild(newOption);

// Add an event listener to update the displayed value whenever the selection changes
selectElement.addEventListener('change', displaySelectedValue);

// Update the displayed value after adding the new option
displaySelectedValue();



//Exercise 2: Delete colors

// Function to remove the selected option from the dropdown list
function removecolor() {
    // Get the select element
    const selectElement = document.getElementById('colorSelect');
    // Get the index of the selected option
    const selectedIndex = selectElement.selectedIndex;
    // If a valid index is selected, remove the option
    if (selectedIndex !== -1) {
      selectElement.remove(selectedIndex);
    }
  }

  // Add a click event listener to the button
  document.getElementById('removeButton').addEventListener('click', removecolor);



  //Exercise 3 : Create a shopping list

  // Create an empty array to hold the shopping list items
let shoppingList = [];

// Function to add an item to the shopping list
function addItem(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the value from the input field
    const input = document.getElementById('itemInput');
    const newItem = input.value.trim(); // Trim to remove extra spaces

    // Check if the input is not empty
    if (newItem !== '') {
        // Add the new item to the shopping list array
        shoppingList.push(newItem);

        // Clear the input field
        input.value = '';

        // Update the display of the shopping list
        updateShoppingListDisplay();
    }
}

// Function to clear all items from the shopping list
function clearAll() {
    // Clear the shopping list array
    shoppingList = [];

    // Update the display of the shopping list
    updateShoppingListDisplay();
}

// Function to update the display of the shopping list
function updateShoppingListDisplay() {
    // Get the root div where the shopping list will be displayed
    const root = document.getElementById('root');

    // Clear the root div
    root.innerHTML = '';

    // Create a list element to hold the shopping list items
    const ul = document.createElement('ul');

    // Iterate through the shopping list and add each item to the list element
    shoppingList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    // Append the list element to the root div
    root.appendChild(ul);
}

// Create a form containing a text input field and an "AddItem" button
function createForm() {
    // Get the root div where the form will be added
    const root = document.getElementById('root');

    // Create the form element
    const form = document.createElement('form');

    // Create the input element
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'itemInput'; // Assign an ID for easy access
    input.placeholder = 'Enter item'; // Placeholder text for the input

    // Create the "AddItem" button
    const addButton = document.createElement('button');
    addButton.type = 'submit';
    addButton.textContent = 'AddItem';

    // Append the input and button to the form
    form.appendChild(input);
    form.appendChild(addButton);

    // Add an event listener to the form for the submit event
    form.addEventListener('submit', addItem);

    // Append the form to the root div
    root.appendChild(form);
}

// Create the "ClearAll" button
function createClearAllButton() {
    // Get the root div where the button will be added
    const root = document.getElementById('root');

    // Create the "ClearAll" button
    const clearButton = document.createElement('button');
    clearButton.type = 'button';
    clearButton.textContent = 'ClearAll';

    // Add an event listener to the button for the click event
    clearButton.addEventListener('click', clearAll);

    // Append the button to the root div
    root.appendChild(clearButton);
}

// Initialize the application
function init() {
    // Create the form
    createForm();

    // Create the "ClearAll" button
    createClearAllButton();
}

// Call the init function to start the application
init();
document.getElementById("userForm").onsubmit = function(event) {
    event.preventDefault(); //Prevent the default form submission

    // Retrieve input values
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;

    const jsonString = JSON.stringify({ name: name, lastName: lastName });//Create JSON string

    document.getElementById("output").innerText = jsonString;//Append JSON string to the DOM
};
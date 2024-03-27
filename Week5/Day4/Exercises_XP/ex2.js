//Exercise 2 : Work with forms.
//Retrieve the form and console.log it.
let form = document.querySelector("form");
console.log(form);

//Retrieve the inputs by their id and console.log them.
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
console.log(fname, lname);

//Retrieve the inputs by their name attribute and console.log them.
let firstnameInputs = document.getElementsByName("firstname");
let lastnameInputs = document.getElementsByName("lastname");
console.log(firstnameInputs, lastnameInputs);

//When the user submits the form (ie. submit event listener) use event.preventDefault().
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Get the values of the input tags and make sure that they are not empty
    if (fname.value && lname.value) {
        let ul = document.querySelector(".usersAnswer");
    // Create an li per input value and append them to the <ul class="usersAnswer">
        let li1 = document.createElement("li");
        li1.textContent = fname.value;
        let li2 = document.createElement("li");
        li2.textContent = lname.value;
        ul.appendChild(li1);
        ul.appendChild(li2);
    }
  });

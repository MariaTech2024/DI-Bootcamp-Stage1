//Retrieve the div and console.log it. 

let container = document.getElementById("container");
console.log(container);

// Change the name “Pete” to “Richard”.
let lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";

// Delete the second <li> of the second <ul>.
lists[1].removeChild(lists[1].children[1]);

// Change the name of the first <li> of each <ul> to your name.
for (let list of lists) {
    list.firstElementChild.textContent = "Mariia";
}

// Add a class called student_list to both of the <ul>'s
for (let list of lists) {
    list.classList.add("student_list");
}

// Add the classes university and attendance to the first <ul>
lists[0].classList.add("university", "attendance");

// Add a “light blue” background color and some padding to the <div>
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// Do not display the <li> that contains the text node “Dan”
let danLi = document.querySelector("li:contains('Dan')");
if (danLi) danLi.style.display = "none";

// Add a border to the <li> that contains the text node “Richard”
let richardLi = document.querySelector("li:contains('Richard')");
if (richardLi) richardLi.style.border = "1px solid black";

// Change the font size of the whole body
document.body.style.fontSize = "18px";

//Exercise 1: Timer
//In your Javascript file, using setTimeout, call a function after 2 seconds.The function will alert “Hello World”.
setTimeout(function() {
    alert("Hello World");
}, 2000);

//In your Javascript file, using setTimeout, call a function after 2 seconds.
//The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
setTimeout(function() {
    let container = document.getElementById("container");
    let paragraph = document.createElement("p");
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
}, 2000);
//In your Javascript file, using setInterval, call a function every 2 seconds.
//The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
//The interval will be cleared (ie. clearInterval), when the user will click on the button.
//Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
let interval = setInterval(function() {
    let container = document.getElementById("container");
    let pCount = container.getElementsByTagName("p").length;
    if (pCount < 5) {
        let paragraph = document.createElement("p");
        paragraph.textContent = "Hello World";
        container.appendChild(paragraph);
    } else {
        clearInterval(interval);
    }
}, 2000);
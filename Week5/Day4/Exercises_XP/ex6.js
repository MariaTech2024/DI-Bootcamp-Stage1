//Exercise 2 : Move the box
//Use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
//The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
function myMove() {
    let elem = document.getElementById("animate");
    let container = document.getElementById("container");
    let pos = 0;
    let widthOfContainer = container.offsetWidth;
    let widthOfElem = elem.offsetWidth;

    let id = setInterval(frame, 1);

    function frame() {
        if (pos >= widthOfContainer - widthOfElem) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}
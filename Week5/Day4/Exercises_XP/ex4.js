//Exercise 4 : Volume of a sphere.
//Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base
document.getElementById("MyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let radius = parseFloat(document.getElementById("radius").value);
    if (!isNaN(radius) && radius > 0) {
        let volume = (4/3) * Math.PI * Math.pow(radius, 3);
        document.getElementById("volume").value = volume.toFixed(2);
    }
});
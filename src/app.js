//Main Renderer
let renderer = require("./renderer.js");

document.querySelector('.toggle-dark').addEventListener('click', myFunction);
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
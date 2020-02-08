var form = document.querySelector("form");
let plusButton = document.getElementById('plus');

let minusButton = document.getElementById('minus');
let input = document.getElementById('seattle');
let display = document.getElementById('display');
console.log(display);
console.log(input);
//let count;
var form = document.querySelector("form");
//let input1 = form.elements["input"].value;
//var display = document.querySelector("display");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log(input.value)
// })

let handleClick = function(event) {
    console.log(input.value)
    if (event.target == plusButton) {
        display.innerText = parseInt(display.innerText) + parseInt(input.value);
    } else if (event.target == minusButton) {
        display.innerText = parseInt(display.innerText) - parseInt(input.value);
    }
}

plusButton.addEventListener('click', handleClick);
minusButton.addEventListener('click', handleClick);








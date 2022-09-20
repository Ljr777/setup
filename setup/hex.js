
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// to locate the button element 
let btn = document.getElementById("btn");

// to locate the element with class color 
let color = document.querySelector(".color");
 
// an event listener that listens for clicks on the button
btn.addEventListener("click", function () {

// a variable with an initial string
let hexColor = "#";

// a for loop to
for (let  i = 0; i < 6; i++){

let hexUnit = hex[generateRandomNumber()];

// to push the elements into the empty array
hexColor += hexUnit;

}


document.body.style.backgroundColor = hexColor;

color.textContent = hexColor;

});


function generateRandomNumber() {

 return  Math.floor(Math.random() * hex.length);
       
}


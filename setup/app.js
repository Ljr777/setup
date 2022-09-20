// an array of all the colours that may be generated randomly
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//to locate the class : button.
const btn = document.getElementById("btn");

//to locate the class : color.
const color = document.querySelector(".color");

//an event listener for clicks on the button.

btn.addEventListener("click", function () {

//  a variable that takes the random number generated from the getRandomNumber function
  const randomNumber = getRandomNumber();
  
  document.body.style.backgroundColor =        colors[randomNumber];
  
  
// to change the text content of the element that has a class color to the current color generated     
color.textContent = colors[randomNumber];
     
});

// a function to generate a random number between 0 and total number of elements in the colors array. 

function getRandomNumber() {

 return Math.floor(Math.random() * colors.length);
    
}

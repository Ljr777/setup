// characters we are going to loop through 
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.getElementById("btn");

let color = document.querySelector(".color")

btn.addEventListener("click", function () {

// an empty array that we will push the member of the array but i want that array to have # as the first element 
let hexColor = ["#"]; 


// a for loop to push what we generated using elementOfHexArray into the array that has "#" as its first element
for(let i = 0; i < 6; i++){

  // the generated number is used to locate a certain element of the hex array 
   
let elementOfHexArray = hex[generateRandomNumber()];
 
hexColor.push(elementOfHexArray);
   
}

// we have to convert the array to a string 
let hexColorString = hexColor.join("");


   
document.body.style.backgroundColor = hexColorString;
    
    color.textContent = hexColorString;
   
});

// a function to generate a random number between 0 and hex.length 
function generateRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

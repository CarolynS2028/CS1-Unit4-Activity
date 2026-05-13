// Create a boolean variable to track current mode
let darkMode = false; 

/* NEW JS FUNCTION: document.querySelector()
  lets us select an HTML ELEMENT and store a 
  reference to it in a VARIABLE  
*/

// select by tage type 
const body = document.querySelector("body");
// heading is a variable that points to the h1 ELEMENT with an id="main-heading" -> just like CSS selection !
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");

// JS can now change attributes and properties 
heading.textContent = "Light and Dark Mode Website";
 // JS wrote HTML code !
heading.style.color = "purple";
heading.style.background = "plum";
body.style.background = "lavender";

// define what happens whne button is clicked 
function toggleMode() {
    // 1. flip the value of darkMode (boolean variable)
    darkMode = !darkMode;
    console.log(darkMode);

    // 2. conditionally apply styles based on the mode
    if (darkMode == true) {
      console.log("apply dark mode");
      body.style.background = "black";
      heading.style.color = "lightgrey;"
      description.style.color = "white";
      heading.style.background = "lightgrey"; 
      toggleBtn.style.color = "darkgrey";
      description.textContent = "Welcome to the Dark Side ! >.<";
      toggleBtn.textContent = "Switch to Light";
    }
    else {
      console.log("apply light mode");
      body.style.background = "white";
      heading.style.color = "darkgrey";
      description.style.color = "black";
      heading.style.background = "lightgrey";
      toggleBtn.style.color = "lightgrey";
      description.textContent = "Welcome to the Bright Side :D";
      toggleBtn.textContent = "Switch to Dark";

    }

}

// attach function to the button
toggleBtn.addEventListener("click", toggleMode);



// REVIEW
// 1. select an HTML element for JS to target
const hackerBtn = document.querySelector("#hacker"); 
// 2. attach click event listener to trigger a function
hackerBtn.addEventListener("click", setHackerMode); 
// 3. define what happens when clicked (when event triggers function)
function setHackerMode() {
  body.style.background = "black";
  body.style.fontFamily = "monospace";
  description.style.color = "rgb(224, 0, 0)";
  description.textContent = "YOU'VE BEEN HACKED ...:c";
  Image.src = "";
  
}


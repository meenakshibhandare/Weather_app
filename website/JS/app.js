/* Global Variables */






// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById("date").innerHTML = d;

document.getElementById('generate').addEventListener('click',performAction);
function performAction(e){
  const generate = document.getElementById('generate').value;
}


function myFunction() {
  var z;

  // Get the value of the input field with id="numb"
  z = document.getElementById("zip").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(z) || (z != ([0-9]{5}))) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}

z = z.match(/[^\s\-]+?/g).join("");
var n = (z.length < 9) ? 5 : 9;
re = new RegExp("^\\d{" + n + "}$");
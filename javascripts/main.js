$("#jquery_output").html("This content generated with jQuery");


//1. Write a function named modulus that takes two arguments. The function should use the modulo operator
 // to return the remainder between the first and second arguments. 
 // e.g. modulus(10, 3) // Should return 1.
var answer = modulus(10,3);

function modulus(a,b) {
 return a % b;
}
document.write("Functions and operators first question answer is " + answer + "<br>");


// 2. Write a function named doMath. This function takes three arguments. The first two will contain 
// integer values. The third argument will be a function reference. Write two more functions named 
// add and subtract. Execute the doMath function to add two numbers together. Then execute the doMath function
// to subtract the two numbers.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
	return a - b;
}

function doMath(val1, val2, math) {
	return math(val1, val2);
}

var addAnswer = doMath(2, 2, add);
document.write("Functions and operators part 1 second question answer is " + addAnswer + "<br>");
var subAnswer = doMath(10, 5, subtract);
document.write("Functions and operators part 2 second question answer is " + subAnswer + "<br>");




var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];


// 1. Write a function named sortedPlanets that returns an array of the planet names sorted alphabetically.
function sortedPlanets() {
	Planets.sort();
	document.write(Planets);
}
sortedPlanets();

// 2. Write a function named reversedPlanets that returns an array of planet names that are reversed (i.e. "htraE").

function reversedPlanets(array) {
	var backwardsPlanets = [];
	for ( var i = 0; i < array.length; i++) {
		backwardsPlanets.push(array[i].split("").reverse().join(""));
	}
	return backwardsPlanets;
}
reversedPlanets(Planets);
document.write("<br>" + reversedPlanets(Planets));


// 3. Write a function named longPlanets that returns an array containing only the planet names
//  that are 7 characters long, or longer.

function longPlanets(array) {
  var sevenLong = [];
  for (var i=0; i<array.length; i++) {
    if (array[i].length >=7) {
      sevenLong.push(array[i]);
    }
  }
  return sevenLong;
}

document.write("<br>" + longPlanets(Planets));


//XHR
// 1. Write a function named getAnimals that uses the jQuery ajax method to retrieve the 
// data/animals.json file. When you execute the functions, it should just log just the array 
// of animals to the console when the async is complete. Make sure you provide a prompt 
// of "animals" when logging the array.

function getAnimals() {
  $.ajax({
    method: "GET",
    url: "data/animals.json"
  }).done(function(data) {
    console.log("animals", data.animals);
  });
}






// Function Declaration: Addition
// Addition Feature - Function Declaration
function add(number1, number2){
        return number1 + number2;
  }
  
  // Addition Feature - Function Declaration
  function addNumbers() {
      let addNumber1 = Number(document.querySelector('#add1').value);
      let addNumber2 = Number(document.querySelector('#add2').value);
      document.querySelector('#sum').value = add(addNumber1, addNumber2);
    }
  
  // Add a "click" event listener to the HTML button with an ID of addNumbers
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);


  // Function Expression: Subtraction
  const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  // Function Expression: Subtract Numbers from HTML Form
  const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  };
  
  // Add Event Listener for Subtraction Button
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  
  // Arrow Function: Multiplication
  const multiply = (number1, number2) => number1 * number2;
  
  // Arrow Function: Multiply Numbers from HTML Form
  const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
  };
  
  // Add Event Listener for Multiplication Button
  document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
  
  // Function Declaration & Expression: Division
  function divide(number1, number2) {
    if (number2 !== 0) {
      return number1 / number2;
    } else {
      return "Cannot divide by zero!";
    }
  }
  
  const divideNumbers = function() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
  };
  

  // Add Event Listener for Division Button
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

  // Declare and instantiate a variable to store the current date.
const currentDate = new Date();
// Declare a variable to hold the current year.
const currentYear = currentDate.getFullYear();
// Assign the current year variable to an HTML form element with an ID of "year".
document.querySelector('#year').textContent = currentYear;



// Declare and instantiate an array variable to hold the numbers 1 through 13.
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with an ID of array.
document.querySelector('#array').textContent = numbersArray.join(', ');

// Use the filter() array method to find all of the odd numbers of the array variable
// and assign the result to the HTML element with an ID of odds.
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').textContent = oddNumbers.join(', ');

// Use the filter() array method to find all of the even numbers of the array variable
// and assign the result to the HTML element with an ID of evens.
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers.join(', ');

// Use the reduce() array method to sum the array variable elements
// and assign the result to the HTML element with an ID of sumOfArray.
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;

// Use the map() array method to multiply each element in the array variable by 2
// and assign the result to the HTML element with an ID of multiplied.
const multipliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = multipliedArray.join(', ');

// Use the map() and reduce() array methods to sum the array elements
// after multiplying each element by two. Assign the result to the HTML element with an ID of sumOfMultiplied.
const sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;
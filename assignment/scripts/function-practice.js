console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
  let greetings = helloName("Jordan");
  console.log(greetings);


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
let total = addNumbers(5, 9);
console.log(total);


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber ){
 return firstNumber * secondNumber * thirdNumber;
}

let result = multiplyThree(10, 8, 15);
console.log(result);


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } 
  else {
    return false;
  }
}
let positiveResult = isPositive(10);
console.log(positiveResult);

negativeResult = isPositive(-2);
console.log(negativeResult);

// Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

function myDisplaer(some) {
  console.log("say " + some);
}

function myFirst() {
  myDisplaer("Hello");
}

//this is not fact if a function define first or last .it will executed by the sequence when they being called .
function mySecond() {
  myDisplaer("GoodBye! ");
}

mySecond(); // this will come first bcz it's called first .first come first serve
myFirst();

// Sequence Control
// Sometimes you would like to have better control over when to execute a function.
// Suppose you want to do a calculation, and then display the result.

// You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:

function displaySum(sum) {
  console.log("Sum: " + sum);
}

//Example functin one
// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// let resultSum = myCalculator(4, 4);
// displaySum(resultSum);

//or you could call the myCalculator function . and let calculator function call the displaySum function

//example function two
//num1 and num2 are parapeter . function(parameter1, 2) . when called functi0on it will be argument.
function myCalculator(num1, num2) {
  let sum = num1 + num2;
  displaySum(sum);
}
myCalculator(6, 6); // this is argument

// The problem with the first example above, is that you have to call two functions to display the result.

// The problem with the second example, is that you cannot prevent the calculator function from displaying the result.

// Now it is time to bring in a callback.

// function parameter are the names listed in function difinition
function example(parameter) {
  console.log(parameter); // Output = foo Parameters are initialized to the values of the arguments supplied.
}

const argument = "foo"; // argumetn is the actual raal  value

example(argument);

// A callback is a function passed as an argument to another function. or
// A callback function ia a functin that is passed to another function as a parameter is a callback function
function callback(sayName) {
  console.log(sayName);
}
function print(callback) {
  let sayName = "i m callback function ";

  callback(sayName);
}
print(callback);

function didplayMultiply(multy) {
  console.log("2 times 4 = " + multy);
}

function multiplyCal(num1, num2, callbackF) {
  let multy = num1 * num2;
  callbackF(multy);
}

//function which takes another function as an arguments is called higher order function  here multiplyCal is a higher order function . and a function which get passed as an argument to another function is called callback function . here didplayMultiply is callback function
multiplyCal(2, 4, didplayMultiply);
// here displayMultiply is the name of a funciton
// it is passed to multiplyCal as an argument
// When you pass a function as an argument, remember not to use parenthesis.

// Right: myCalculator(5, 5, myDisplayer);

// Wrong: myCalculator(5, 5, myDisplayer());
// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

//Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.
//The functions that take a function as an argument, or return a function as a return value are called higher order functions.

// When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

// Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. Note that the getTea function has been modified so it now takes a function as the first argument.
const prepareGreenTea = () => "greenTea";
const prepareBlackTea = () => "blackTea";

function getTea(prepareTea, numOfCups) {
  let teaCups = [];
  for (i = 1; i <= numOfCups; i++) {
    let teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
}

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

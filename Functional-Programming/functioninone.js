// One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.
// The global variable

// Avoid Mutations and Side Effects Using Functional Programming

let fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}

// Pass Arguments to Avoid External Dependence in a Function

// The global variable
let fixedValue1 = 4;

function incrementer(incrementbyone) {
  return incrementbyone + 1;
}
incrementer(fixedValue1);

// Refactor Global Variables Out of Functions

// So far, we have seen two distinct principles for functional programming:

// Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

// Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

// The global variable
// const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// // Change code below this line
// function add(bookName) {

//   bookList.push(bookName);
//   return bookList;

//   // Change code above this line
// }

// // Change code below this line
// function remove(bookName) {
//   const book_index = bookList.indexOf(bookName);
//   if (book_index >= 0) {

//     bookList.splice(book_index, 1);
//     return bookList;

//     // Change code above this line
//     }
// }

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {
  bookName = [...bookName, "A Brief History of Time"];

  return bookName;

  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  var index = 2;

  var result = [...bookName.slice(0, 1), ...bookName.slice(index)];

  console.log(result);
  return result;

  // Change code above this line
}

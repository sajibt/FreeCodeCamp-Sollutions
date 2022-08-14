let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a);

let sumAB = a + b;
console.log(sumAB);
// console.clear();

// Use typeof to Check the Type of a Variable

let seven = 7;
console.log(typeof seven);
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
console.log(typeof true);
console.log(typeof Null);
console.log(typeof undefined);

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// Catch Mixed Usage of Single and Double Quotes

const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it. ";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
console.log(grouchoContraction + "\n" + quoteInString);
// use backslash to escape a character
const uhOhGroucho = "I've had a perfectly wonderful evening, but this wasn't it.";
console.log(uhOhGroucho);
let innerHtml = '<p>Click here to <a href="#Home">return home</a></p>';
console.log(innerHtml);

let x = 1;
let y = 2;
if (x == y) {
  console.log("running");
} else {
  console.log("stopping");
}

function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
console.log(varOne());

let varTwo = myFunction();
console.log(varTwo);

function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower;
console.log(power(base, exp));

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  for (let i = 1; i < len; i++) {
    console.log(firstFive[i]);
  }
  for (let i = 0; i <= len; i++) {
    console.log(firstFive[i]);
  }
  for (let i = 0; i < len; i++) {
    console.log(firstFive[i]);
  }
}

countToFive();

function zeroArray(m, n) {
  let newArray = [];
  let row = [];

  for (var i = 0; i < m; i++) {
    row = [];

    for (var j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

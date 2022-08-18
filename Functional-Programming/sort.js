// Sort an Array Alphabetically using the sort Method

function ascendingOrder(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

let ascend = ascendingOrder([1, 5, 2, 3, 4]);
console.log(ascend);
// This would return the value [1, 2, 3, 4, 5].

function reverseAlpha(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

let reversealpha = reverseAlpha(["l", "h", "z", "b", "s"]);
console.log(reversealpha);
// This would return the value ['z', 's', 'l', 'h', 'b'].

function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort(function (a, b) {
    return a === b ? false : a > b ? true : -1; // ocndition:value
  });
  // Only change code above this line
}

let normallpha = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
console.log(normallpha);

// Conditional chains
// The ternary operator is right-associative, which means it can be "chained" in the following way, similar to an if … else if … else if … else chain:

// condition ? exprIfTrue : exprIfFalse

function example() {
  return condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4;
}

// compareFn(a, b) return value	sort order
// > 0	sort a after b . a to z  a>b  Alphabetically ascending
// < 0	sort a before b z - a a<b = reverse  ascending
// === 0	keep original order of a and b
// a-b for number 1-10

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(items);

const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']

//sort with map

// the array to be sorted
const data = ["delta", "alpha", "charlie", "bravo"];

// temporary array holds objects with position and sort-value
const mapped = data.map((v, i) => {
  // return { i, value: someSlowOperation(v) };
  return { i };
});

// sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map((v) => data[v.i]);

// Return a Sorted Array Without Changing the Original Array

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  return (arr = [...arr].sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  }));

  // Only change code above this line
}

let ascendings = nonMutatingSort(globalArray);
console.log(ascendings);

// Split a String into an Array Using the split Method

// The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.
const str = "Hello World";
const bySpace = str.split(" ");
console.log(bySpace);

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
console.log(byDigits);

const aStr = "Hello Randy, I-am playing video games";
function byWords(str) {
  return str.split(/\W/);
}
console.log(byWords(aStr));
// would return ["Hello", "Randy", "I", "am", "playing", "video", "games"]

// bySpace would have the value ["Hello", "World"] and byDigits would have the value ["How", "are", "you", "today"].

// Since strings are immutable, the split method makes it easier to work with them.
// Split the characters, including spaces:
// const myArray = text.split("");
// Use the limit parameter:
// const myArray = text.split(" ", 3);

// Combine an Array into a String Using the join Method
// The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

const arr = ["Hello", "World"];
const convertArr = arr.join(" ");
console.log(convertArr);

// str would have a value of the string Hello World.

function sentensify(str) {
  // Only change code below this line

  const newStr = str.split(/\W+/); //find the not letters
  return newStr.join(" ");

  // Only change code above this line
}

let senA = sentensify("May-the-force-be-with-you");
console.log(senA);

// Apply Functional Programming to Convert Strings to URL Slugs
// The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

const orig = "   foo  ";
console.log(orig.trim()); // 'foo'

// Only change code below this line
function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-");
}
// \s	A whitespace character: [ \t\n\x0B\f\r]

// function urlSlug(title) {
//   return title
//     .split(" ")
//     .filter(substr => substr !== "")
//     .join("-")
//     .toLowerCase();
// }
// Only change code above this line
let slug = urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
console.log(slug);

// Use the every Method to Check that Every Element in an Array Meets a Criteria

// The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.

// For example, the following code would check if every element in the numbers array is less than 10:

const numbers = [1, 5, 8, 0, 10, 11];

let chevery = numbers.every(function (currentValue) {
  return currentValue < 10;
});
console.log(chevery);

// The every method would return false here.

function checkPositive(arr) {
  // Only change code below this line

  return arr.every(function (current) {
    return current > 0;
  });
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

// Use the some Method to Check that Any Elements in an Array Meet a Criteria

// The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.

// For example, the following code would check if any element in the numbers array is less than 10:

const numbers2 = [10, 50, 8, 220, 110, 11];

let n2 = numbers2.some(function (currentValue) {
  return currentValue < 11; // any element smaller than 11 yes
});
console.log(n2);

// The some method would return true.
// function checkPositive(arr) {
// Only change code below this line
// return arr.some(function(current){
//   return current > 0
// })

//   // Only change code above this line
// }

// checkPositive([1, 2, 3, -4, 5]);

// Introduction to Currying and Partial Application
// The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

// In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

// Here's an example:

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function (y) {
    return x + y;
  };
}

const curried = (x) => (y) => x + y;

curried(1)(2);
curried(1)(2); // would return 3.

// This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

const funcForY = curried(1);
console.log(funcForY(2)); // 3
// Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13

// Fill in the body of the add function so it uses currying to add parameters x, y, and z.
const add = (x) => (y) => (z) => x + y + z;
add(10)(20)(30);

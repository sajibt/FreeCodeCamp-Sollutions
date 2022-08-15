// Convert Celsius to Fahrenheit
// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

let mainC = convertCtoF(30);
console.log(mainC);

// Reverse a String
function reverserString(rs) {
  let str = "";
  for (let i = rs.length - 1; i >= 0; i--) {
    str += rs[i];
    console.log(str);
  }
  return str;
}

let myName = "sajib";
// let myName = prompt("Enter your  name: ");

const result = reverserString(myName);

function reverseString(str) {
  let newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
    console.log(newStr);
  }

  return newStr;
}

reverseString("hello");

// Factorialize a Number

function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

let factorializen = factorialize(5);
console.log(factorializen);

// Find the Longest Word in a String

function findLongestWord(str) {
  var longestWord = str.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0].length;
}
let res = findLongestWord("The quick brown fox jumped over the lazy dog");
function findLongestWordLength(str) {
  let strSplit = str.split(" ");
  console.log(strSplit);
  let longest = 0;
  for (var i = 0; i < strSplit.length; i++) {
    var varStr = strSplit[i].length;
    console.log(varStr);
    if (varStr > longest) {
      longest = varStr;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return Largest Numbers in Arrays

function largestOfFour(mainArray) {
  return mainArray.map(function (subArray) {
    return Math.max.apply(null, subArray);
  });
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// Confirm the Ending

function confirmEnding(str, target) {
  var newStr = "";

  newStr = str.substring(str.length - target.length);

  return newStr === target;
}

confirmEnding("Bastian", "n");

// Repeat a String Repeat a String

// function repeatStringNumTimes(str, num) {
//   var newStr = "";

//   if (num < 0) return newStr;

//   newStr = str.repeat(num);

//   return newStr;
// }

// repeatStringNumTimes("abc", 3);

function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);

// Truncate a String
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Finders Keepers

function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// Boo who

function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);

// Title Case a Sentence

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

titleCase("I'm a little tea pot");

// Slice and Splice
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Falsy Bouncer

function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
bouncer([7, "ate", "", false, 9]);

// Where do I Belong
function getIndexToIns(arr, num) {
  return arr.filter((val) => num > val).length;
}
getIndexToIns([40, 60], 50);

// Mutations

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
mutation(["hello", "hey"]);

// Chunky Monkey

function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(chunkArrayInGroups(arr.slice(size), size));
  }
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// sum all number in a range
function sumAll(arr) {
  let biggerNumber = Math.max(...arr);
  let smallerNumber = Math.min(...arr);

  let total = biggerNumber + smallerNumber;

  for (let i = smallerNumber + 1; i < biggerNumber; i++) {
    total += i;
  }

  return total;
}

sumAll([1, 4]);

// Diff Two Arrays

function diffArray(arr1, arr2) {
  var newArr = [];

  newArr = arr1.concat(arr2);

  function checkNum(num) {
    if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
      return num;
    }
  }

  return newArr.filter(checkNum);
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

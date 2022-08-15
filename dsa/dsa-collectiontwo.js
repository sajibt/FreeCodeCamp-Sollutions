// Combine Arrays with the Spread Operator

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence;
}

console.log(spreadOut());

// Check For The Presence of an Element With indexOf()

let fruits = ["apples", "pears", "oranges", "peaches", "pears"];

// avaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1

fruits.indexOf("dates"); // return -1
fruits.indexOf("oranges");
let fruitsi = fruits.indexOf("pears"); // return index 1
console.log(fruitsi);

function quickCheck(arr, elem) {
  // Only change code below this line

  if (arr.indexOf(elem) !== -1) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

// Iterate Through All an Array's Items Using For Loops

function greaterThanTen(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
const Sarr = [2, 12, 8, 14, 80, 0, 1];
let gTen = greaterThanTen(Sarr);
console.log(gTen);

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

// Create complex multi-dimensional arrays

let nestedArray = [["deep"], [["deeper"], ["deeper"]], [[["deepest"], ["deepest"]], [[["deepest-est?"]]]]];
// console.log(nestedArray[2][1][0][0][0]);
console.log(nestedArray[1][1]); // deeper
console.log(nestedArray[2][1]); // deepest-est?

let myNestedArray = [
  // Only change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  [["loop", "deep", 6, 7, 1000, "method"]],
  [
    [
      ["concat", false, true, "spread", "array"],
      ["mutate", 1327.98, "deeper", "slice", "push"],
    ],
    [[["deepest", 1.3849, 7, "8.4876", "arbitrary", "depth"]]],
  ],
  // Only change code above this line
];

// Add Key-Value Pairs to JavaScript Objects

const tekkenCharacter = {
  player: "Hwoarang",
  fightingStyle: "Tae Kwon Doe",
  human: true,
};
console.log(tekkenCharacter);
// If you want to add an additional property, such as "origin", it can be done by assigning origin to the object:
tekkenCharacter.origin = "South Korea";
console.log(tekkenCharacter);
// You can add this property with bracket notation by doing:

tekkenCharacter["Hair Color"] = "Akagami shanks"; // it shows "Hair Color": "Akagami" this is ugly . instead write this
const eyes = "eye color";
tekkenCharacter.eyes = "brow";
console.log(tekkenCharacter);

let foods1 = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods1.bananas = 13;
foods1.grapes = 35;
foods1.strawberries = 27;

console.log(foods1);

// Modify an Object Nested Within an Object

let nestedObject = {
  id: 28802695164,
  date: "December 31, 2016",
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8,
    },
  },
};
let busy = nestedObject.data.onlineStatus.busy;
console.log(busy);

console.log(nestedObject);

// Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

// Access Property Names with Bracket Notation

let fooods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

console.log(fooods);
delete fooods.plums; // use delete keyword for delete object propertices from an object
delete fooods.strawberries;
console.log(fooods);

function checkInventory(scannedItem) {
  return fooods[scannedItem];
}

console.log(fooods["apples"]);

console.log(checkInventory("apples"));
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};
let hasow = foods.hasOwnProperty("apples"); // use first  bracket always for checking hasOwnProperty
// or you can try also this one to check propertices availability
let chekcProp = "grapes" in foods;
console.log(hasow);
console.log(chekcProp);

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods);

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  if ("Jeff" in userObj && "Alan" in userObj && "Sarah" in userObj && "Ryan" in userObj) {
    return true;
  } else {
    return false;
  }
}

console.log(isEveryoneHere(users));

// Iterate Through the Keys of an Object with a for...in Statement
// NOTE: Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

for (let user in users) [console.log(user)];

function countOnline(obj) {
  let count = 0;
  for (let user in obj) {
    if (obj[user].online === true) {
      count++;
    }
  }
  return count;
}
console.log(countOnline(users));
const people = {
  Alan: {
    name: "Alan",
  },
  Jeff: {
    name: "Jeff",
  },
  Sarah: {
    name: "Sarah",
  },
};

let i = 0;
for (var sm in people) {
  i++;
  console.log(i);
}

// Generate an Array of All Object Keys with Object.keys()
let nusers = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(nusers));

// Modify an Array Stored in an Object

let userp = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);

  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(userp, "Pete"));

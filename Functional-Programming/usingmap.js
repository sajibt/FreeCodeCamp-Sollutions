// Use the map Method to Extract Data from an Array

// The global variable
const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster: "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster: "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster: "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer: "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster: "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster: "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

// Only change code below this line

// const ratings = [];
// for (let i = 0; i < watchList.length; i++) {
//   ratings.push({ title: watchList[i]["Title"], rating: watchList[i]["imdbRating"] });
// }

// let watchpam = watchList.map((rating) => {
//   return rating.Title;
// });
// console.log(watchpam);

const ratings = watchList.map((rating) => {
  return {
    title: rating.Title,
    rating: rating.imdbRating,
  };
});
console.log(ratings);

// Only change code above this line

// console.log(JSON.stringify(ratings));

// const users = [
//   { name: "John", age: 34 },
//   { name: "Amy", age: 20 },
//   { name: "camperCat", age: 10 },
// ];

// const names = users.map((user) => user.name + " age " + user.age);
// console.log(names);

// Implement map on a Prototype

// As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

// In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

// You might learn a lot about the map method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

// The global variable
const s = [23, 65, 98, 5];

// Array.prototype.myMap = function (callback) {
//   const newArray = [];
//   // Only change code below this line
//   for (var i = 0; i < s.length; i++) {
//     newArray.push(s[i] * 2);
//   }

//   // Only change code above this line
//   return newArray;
// };

// The global variable

// let arr = [10, 20, 30, 40, 50, 60, 70];
// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// in for loops i = index
// arr[i] = Element/value

// const new_s = s.myMap(function (item) {
//   return item * 2;
// });

// console.log(new_s);
Array.prototype.myMap = function (callbackfunction) {
  const newArray = [];
  // Only change code below this line
  for (var i = 0; i < this.length; i++) {
    newArray.push(callbackfunction(this[i]));
  }
  console.log(newArray);
  // Only change code above this line
  return newArray;
};

function multiply(item) {
  return item * 2;
}
const new_s = s.myMap(multiply);
console.log(s);

// Use the filter Method to Extract Data from an Array

// filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.

const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const usersUnder30 = users.filter((user) => user.age > 30);
console.log(usersUnder30);
console.log(users);

// Use the filter Method to Extract Data from an Array
const filteredList = watchList
  .filter((rating) => rating.imdbRating >= 8.0)

  .map((favlist) => {
    return {
      title: favlist.Title,
      rating: favlist.imdbRating,
    };
  });
console.log(filteredList);

// Implement the filter Method on a Prototype

// The global variable
const sf = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // Only change code below this line
  const newArray = [];
  for (i = 0; i < this.length; i++) {
    // newArray.push(callback(this[i]));
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }
  // the callback method should evaluate to true in order to filter method work
  // Only change code above this line
  return newArray;
};

const new_sf = sf.myFilter(function (item) {
  return item % 2 === 1;
});
console.log(new_sf);

// Return Part of an Array Using the slice Method

// The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

// Here's an example:

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
console.log(newArray);

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  let newArray = anim.slice(beginSlice, endSlice);
  console.log(newArray);
  return newArray;
  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

// Remove Elements from an Array Using slice Instead of splice
// A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the splice method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the splice method changed the original array it is called on. Here's an example:

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
console.log(cities);
// Here splice returns the string London and deletes it from the cities array. cities will have the value ["Chicago", "Delhi", "Islamabad", "Berlin"].
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0, 3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

// Combine Two Arrays Using the concat Method

function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
// [1, 2, 3].concat([4, 5, 6]);

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

// Add Elements to the End of an Array Using concat Instead of push

// Functional programming is all about creating and using non-mutating (oporibortoniyo)functions.

// The last challenge introduced the concat method as a way to combine arrays into a new one without mutating the original arrays. Compare concat to the push method. push adds an item to the end of the same array it is called on, which mutates that array. Here's an example:

const arr1 = [1, 2, 3];
arr1.push([4, 5, 6]); //originial value will be change

// arr1 would have a modified value of [1, 2, 3, [4, 5, 6]], which is not the functional programming way
console.log(arr1);

let arrCon = [4, 5, 6];
console.log(arrCon); // originial value will not change

let arrC2 = [7, 8, 9];
const concatArr = arrCon.concat([arrC2]);
console.log(concatArr);

function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}

// const first = [1, 2, 3];
// const second = [4, 5];
// nonMutatingPush(first, second);

// Use the reduce Method to Analyze Data

// Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the reduce method.

// The reduce method allows for more general forms of array processing, and it's possible to show that both filter and map can be derived as special applications of reduce. The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.

// The callback function accepts four arguments. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which reduce is called.

// In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.

// See below for an example using reduce on the users array to return the sum of all the users' ages. For simplicity, the example only uses the first and second arguments.

const rusers = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

// reduce callback function accepts four argument
//   1. accumulator / savings , which gets assigned the return value of previous iteration.
//   2. current element
//   3. index of that element
//   4. the array upon which reduce is called.

const sumOfAges = rusers.reduce((sum, user) => sum + user.age, 0);
// 0+24(accumulator) -> 34 + 20 -> 54 + 10 -> 64

console.log(sumOfAges);
// The console would display the value 64.

// In another example, see how an object can be returned containing the names of the users as properties with their ages as values.

const users2 = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 41 },
];

const usersObj = users2.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});

function getRating(watchList) {
  let averageRating = watchList.reduce((sum, rating) => sum + rating.age, 0);

  return averageRating;
}

console.log(getRating(users2));

console.log(usersObj);
// The console would display the value { John: 34, Amy: 20, camperCat: 10 }.

function getRating(watchList) {
  // Only change code below this line
  let averageRating =
    watchList
      // use filter to find the film directed by Nolan
      .filter((film) => film.Director === "Christopher Nolan")
      //use map convert string to number
      .map((film) => Number(film.imdbRating))

      //sum and average
      .reduce((sum, rating) => sum + rating, 0) / watchList.filter((film) => film.Director === "Christopher Nolan").length;

  // Only change code above this line
  return averageRating;
}
console.log(getRating(watchList));
// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(),

// 1.Filter out non-integers
// 2.Filter out non-positives
// 3.Square each remaining value
// So you’ll need three corresponding functions to carry out those tasks, and then pass those functions to the appropriate higher-order functions in a chain in that order.

// As for choosing between filter, map, and reduce, I generally follow these guidelines.

// filter - when you want to remove elements from an array based on a condition
// Array => Array
// The new array’s length is less than or equal to the old array’s length
// Elements may be removed, but not changed
// Ex. “Remove all numbers less than 10”
// arr.filter(x => x >= 10)
// map - when you want to transform each element in an array uniformly
// Array => Array
// The new array’s length is equal to the old array’s length
// Elements may be changed
// Ex. “Add 5 to every number”
// arr.map(x => x + 5)
// Ex. “Convert all elements to strings”
// arr.map(x => String(x))
// reduce - when you want to transform (‘reduce’) an array into a single value
// Array => any
// Result can be of any type, even another array
// Ex. “Calculate the sum of all numbers in the array (Array => Number)”
// arr.reduce((sum, x) => sum + x)

const squareList = (arr) => {
  // Only change code below this line

  return arr

    .filter((num) => num > 0 && num % parseInt(num) === 0)

    .map((num) => Math.pow(num, 2));

  // {

  // return arr.reduce((sqrIntegers, num) => {

  //   return Number.isInteger(num) && num > 0

  //   ? sqrIntegers.concat(num * num)

  //   : sqrIntegers;
  // };

  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

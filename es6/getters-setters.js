class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel._author);
console.log(novel.writer); //get writter
novel.writer = "newAuthor"; // update writter
console.log(novel.writer);

// Only change code below this line
// class Thermostat {
//   constructor(temperature) {
//     this._temperature = temperature;
//   }

//   get temperature() {
//     return this._temperature;
//   }
//   set temperature(updateTemperature) {
//     return (this._temperature = updateTemperature);
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// console.log(temp);

// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius
// console.log(temp);
class Thermostat {
  constructor(temperature) {
    this._temperature = temperature;
  }

  get temperature() {
    return (5 / 9) * (this._temperature - 32);
  }
  set temperature(updateTemperature) {
    return (this._temperature = (updateTemperature * 9.0) / 5 + 32);
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// <script type="module" src="filename.js"></script>
// A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.

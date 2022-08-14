// let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// const hl = testRegex.test(testStr);
// console.log(hl); //true 

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line


let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
const to = testRegex.test(testStr);
console.log(to); //trure 

let tesk = "Hello , my name is Kevin";
let testRegxj = /kevin/;
const result2 = testRegxj.test(tesk)
console.log(result2); // falst bcz it is case sensetive . 

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let resul = petRegex.test(petString);
console.log(resul);
// Ignore Case While Matching put i end of the test file 

let myString2 = "freeCodeCamp";
let fccRegex = /FreeCodeCamp/i;
let resu = fccRegex.test(myString);

// Extract Matches

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

let extractStr = "Extract the word 'coding' from this string.";

let codingRegex = /coding/; // Change this line
let re= extractStr.match(/coding/); // Change this line

// Find More Than the First Match
// To search or extract a pattern more than once, you can use the global search flag: g.

let testStr3 = "Repeat, Repeat, Repeat";
let ourRegex3 = /Repeat/;
const single = testStr3.match(ourRegex3);
console.log(single);

let love = "love, love ,  love"
let repeatRegex = /love/g;
const loveu = love.match(repeatRegex);
console.log(loveu);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let resultTwink = twinkleStar.match(starRegex); // Change this line

// Match Anything with Wildcard Period

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
let las = huRegex.test(humStr);
console.log(las);

let hu = huRegex.test(hugStr);
console.log(hu);

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /run.|sun.|fun.|pun.|nun.| bun./; // Change this line
let resulta = unRegex.test(exampleStr);
console.log(resulta);


// Match Single Character with Multiple Possibilities

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/; // single Character with multiple Possibilities
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let quresult = quoteSample.match(vowelRegex); // Change this line
// let result = vowelRegex.test(quoteSample);
console.log(quresult);

// Match Letters of the Alphabet
let quoteSampleex = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let resultex = quoteSample.match(alphabetRegex); // Change this line
console.log(resultex);
// Match Numbers and Letters of the Alphabet
let jennyStr = "Jenny8675309";
let myRegexn = /[a-z0-9]/ig;
let ren = jennyStr.match(myRegexn);
console.log(ren);
// Match Single Characters Not Specified
// /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.

// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
let quoteSamplech = "3 blind mice.";
let myRegexch = /[^aeiou0-9]/gi; // checking all characters are not a number or a vowel  
let resultch = quoteSamplech.match(myRegexch); // Change this line
console.log(resultch);

// Match Characters that Occur One or More Times
// You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

// For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

// If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.

// You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.
let difficultSpelling = "Mississippi";
let myRegexma = /s+/gi; // Change this line
let resultma = difficultSpelling.match(myRegexma);
console.log(resultma);










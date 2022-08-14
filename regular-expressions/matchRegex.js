// Match Characters that Occur Zero or More Times
// The character to do this is the asterisk or star: *.


let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // ["goooooooooo"]
gPhrase.match(goRegex); // ["g"]

let test1 = oPhrase.match(goRegex);
console.log(test1); // null 
// Find Characters with Lazy Matching

const tiStr = "titanic"
const regexS = /t[a-z]*i/ 
const res1 = tiStr.match(regexS)
console.log(res1);

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// Match Beginning String Patterns

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
let wir = firstRegex.test(firstString);
console.log(wir);

let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);

// Match Ending String Patterns with $ sign 
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a will have to end story";
let fj = storyRegex.test(noEnding);
console.log(fj);

// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

// Match Everything But Letters and Numbers
// let shortHand = /\W/;
// let numbers = "42%";
// let sentence = "Coding!";
// numbers.match(shortHand);
// sentence.match(shortHand);
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;

// Match All Numbers
// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9],

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result22 = movieName.match(numRegex).length;
console.log(result22);

// Match All Non-Numbers
// The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

let nmovieName = "2001: A Space Odyssey";
let nnoNumRegex = /\D/g; // Change this line
let nresult = nmovieName.match(nnoNumRegex).length;
console.log(nresult);

// Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([a-z]+\d*|\d{2,})$/i;
let resultuser = userCheck.test(username);

// Match Whitespace

// You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);

// Match Non-Whitespace Characters

// Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

let nonwhiteSpace = "Whitespace. Whitespace everywhere!"
let nnonSpaceRegex = /\S/g;
let nons = nonwhiteSpace.match(nnonSpaceRegex).length;
console.log(nons);

// iSpecify Upper and Lower Number of Matches
// Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

// You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

// For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);


// Specify Only the Lower Number of Matches
// You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.

// To only specify the lower number of patterns, keep the first number followed by a comma.

// For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

let A4a = "haaaah";
let A2a = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let amultipleA = /ha{3,}h/;
amultipleA.test(A4a);
amultipleA.test(A2a);
amultipleA.test(A100);

// Specify Exact Number of Matches

// You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.

// To specify a certain number of patterns, just have that one number between the curly brackets.

// For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.

let Ae4 = "haaaah";
let Ae3 = "haaah";
let Ae100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(Ae4);
multipleHA.test(Ae3);
multipleHA.test(Ae100);
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let timresult = timRegex.test(timStr);
console.log(timresult);

// Check for All or None
// Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

// You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

// For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);

// Both uses of the test method would return true.
let favWord = "favorite";
let favRegex = /favou?rite/g; // Change this line
let resultfav = favRegex.test(favWord);


// Positive and Negative Lookahead
// Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

// There are two kinds of lookaheads: positive lookahead and negative lookahead.

// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

// On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

// Lookaheads are a bit confusing but some examples will help.

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
// Both of these match calls would return ["q"].

// A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;//Change this line
let simresult = pwRegex.test(sampleWord);
console.log(simresult);

// Check For Mixed Grouping of Characters
// Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

// If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

// Then check whether the desired string groups are in the test string by using the test() method.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);

// The test method here would return true.

let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*Roosevelt/; // Change this line
let elresult = myRegex.test(myString); // Change this line

// Reuse Patterns Using Capture Groups
// Say you want to match a word that occurs multiple times like below.

let repeatStr = "row row row row your boat";
// You could use /row row row/, but what if you don't know the specific word repeated? Capture groups can be used to find repeated substrings.

// Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.

// The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.

// The example below matches a word that occurs thrice separated by spaces:

let repeatRegex = /(\w+) \1 \1 \1/;
repeatRegex.test(repeatStr); // Returns true
let jfs = repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
console.log(jfs);

// capture group with /(\w+)/.

// Using the .match() method on a string will return an array with the matched substring, along with its captured groups.

// Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let resultnum = reRegex.test(repeatNum);

// Use Capture Groups to Search and Replace
// Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

// You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// The replace call would return the string The sky is blue..

// You can also access capture groups in the replacement string with dollar signs ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// The replace call would return the string Camp Code.

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result30 = str.replace(fixRegex, replaceText);

// Remove Whitespace from Start and End

// Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

// Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let resul21t = hello.replace(wsRegex, ""); // Change this line
console.log(resul21t);




























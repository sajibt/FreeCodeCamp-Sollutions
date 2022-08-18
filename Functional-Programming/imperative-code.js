// Splice and Slice both are Javascript Array functions.

// Splice vs Slice

// The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.

// The splice() method changes the original array and slice() method doesn’t change the original array.

// The splice() method can take n number of arguments and slice() method takes 2 arguments.

// Splice with Example

// Argument 1: Index, Required. An integer that specifies at what position to add /remove items, Use negative values to specify the position from the end of the array.

// Argument 2: Optional. The number of items to be removed. If set to 0(zero), no items will be removed. And if not passed, all item(s) from provided index will be removed.

// Argument 3…n: Optional. The new item(s) to be added to the array.

var array = [1, 2, 3, 4, 5];
console.log(array.splice(2));
// shows [3, 4, 5], returned removed item(s) as a new array object.

console.log(array);
// shows [1, 2], original array altered.

var array2 = [6, 7, 8, 9, 0];
console.log(array2.splice(2, 1));
// shows [8]

console.log(array2.splice(2, 0));
//shows [] , as no item(s) removed.

console.log(array2);
// shows [6,7,9,0]

// Slice with Example

// Argument 1: Required. An integer that specifies where to start the selection (The first element has an index of 0). Use negative numbers to select from the end of an array.

// Argument 2: Optional. An integer that specifies where to end the selection but does not include. If omitted, all elements from the start position and to the end of the array will be selected. Use negative numbers to select from the end of an array.

var array = [1, 2, 3, 4, 5];
console.log(array.slice(2));
// shows [3, 4, 5], returned selected element(s).

console.log(array.slice(-2));
// shows [4, 5], returned selected element(s).
console.log(array);
// shows [1, 2, 3, 4, 5], original array remains intact.

var array2 = [6, 7, 8, 9, 0];
console.log(array2.slice(2, 4));
console.log(array2.slice(1, 3));

// shows [8, 9]

console.log(array2.slice(-2, 4));
// shows [9]

console.log(array2.slice(-3, -1));
// shows [8, 9]

console.log(array2);
// shows [6, 7, 8, 9, 0]

//Change Window.prototype.tabClose so that it removes the correct tab.

// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push("new tab"); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  // Only change code below this line

  const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
};

// Let's create three browser windows
const workWindow = new Window(["GMail", "Inbox", "Work mail", "Docs", "freeCodeCamp"]); // Your mailbox, drive, and other work sites
const socialWindow = new Window(["FB", "Gitter", "Reddit", "Twitter", "Medium"]); // Social sites
const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

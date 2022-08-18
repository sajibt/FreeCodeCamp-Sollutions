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
    return a === b ? 0 : a > b ? 1 : -1;
  });
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

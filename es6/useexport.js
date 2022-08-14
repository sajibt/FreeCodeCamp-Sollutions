const useexport = (x, y) => {
  return x + y;
};

export { useexport };

const uppercaseString = (string) => {
  return string.toUpperCase();
};

const lowercaseString = (string) => {
  return string.toLowerCase();
};
export { uppercaseString, lowercaseString };

//this is names function
export default function add(x, y) {
  return x + y;
}
////this is called anonymous function
//export default function (x,y) {
//  return x-y
//}

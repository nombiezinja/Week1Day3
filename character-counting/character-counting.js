// Signature:
//   Name: countChar
//   Arguments: strings
//   Return type: object
// Contract:
//   Given a sring, returns an object whose keys are the
//   individual letters of strings in the input, and whose
//   values are the number of occurrences of each letter

// Need to cycle through the string, record each letter
// as it occurs, and add 1 to the counter each time it occurrs

// Declare empty object
// Use charAt  to cycle through string
//***problem: can you use forEach on strings or just arrays?
// convert string into array?
// if letter does not exist, create new key with value of 1
// if letter already exists as key, add 1 to its value
// return the object

//var str = process.argv.slice(2)
//note: come back later and add .toString so can process
//argument passed in node as one string

function countChar(str) {
  var strNoSpaces = str.split(" ").join("");
  // console.log(strNoSpaces);
  output = {};
  for (var i = 0; i < strNoSpaces.length; i++) {
    output[strNoSpaces[i]] = strNoSpaces.split(strNoSpaces[i]).length-1;
  }
  return output;
}

console.log(countChar("assassins creed"));
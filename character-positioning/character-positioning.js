
function charPosit(str) {
  var output = {};
  for (var i = 0; i < str.length; i++) {
    if (output[str[i]] === undefined) {
      output[str[i]] = [i];
    } else {
      output[str[i]].push(i);
    }

  }
     return output
}

console.log(charPosit("assasins creed"));

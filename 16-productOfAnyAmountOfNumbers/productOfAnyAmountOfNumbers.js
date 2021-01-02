function productOfAnyAmountOfNumbers(...args) {
  var prod=1;
  for(let arg of args){
     prod*=arg; 
  }
  return prod;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;

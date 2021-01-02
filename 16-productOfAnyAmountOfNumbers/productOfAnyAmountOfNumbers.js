function productOfAnyAmountOfNumbers(...args) {
  var prod=0;
  for(let arg of args){
     prod*=arg; 
  }
  return prod;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;

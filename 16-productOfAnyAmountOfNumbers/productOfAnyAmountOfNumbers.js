function productOfAnyAmountOfNumbers(...args) {
  var prod=0;
  for(let args of args){
     prod*=args; 
  }
  return prod;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;

function setUnionOfAnyAmountOfSets(...args) {
  var unSet =new Set();
  for(let arg of args ){
    unSet =unSet.add(arg);
  }
  return unSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;

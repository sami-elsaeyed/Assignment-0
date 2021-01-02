function setUnionOfAnyAmountOfSets(...args) {
  var unSet =new Set();
  for(let arg of args ){
    for(let elem of arg)
    unSet =unSet.add(elem);
  }
  return unSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;

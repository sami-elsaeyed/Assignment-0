function setUnionOfAnyAmountOfSets(...args) {
  var unSet =new Set();
  for(var i=0;i<=arguments.length;i++ ){
    unSet =unSet.union(arguments[i]);
  }
  return unSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;

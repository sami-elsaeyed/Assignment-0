function countOfAllBooleans(arr) {
  int count =0;
  for(int i =0;i<=arr.length();i++){
    if(arr[i] instanceOf Boolean)
      count++;
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;

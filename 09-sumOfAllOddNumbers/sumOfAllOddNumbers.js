function sumOfAllOddNumbers(nums) {
  var count =0;
  for(var i=0;i<nums.length){
    if(nums[i]%2!=0)
      count++;
  }  
  return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;

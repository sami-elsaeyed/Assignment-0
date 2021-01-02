function pairSum(nums, target) {
  for(var i=0;i<=nums.length;i++){
    for(var k=0;k<=nums.length;k++){
      if(target-nums[i]==nums[k])
        return true;
      else 
        return false;
    }
  }
}

// Do not edit this line;
module.exports = pairSum;

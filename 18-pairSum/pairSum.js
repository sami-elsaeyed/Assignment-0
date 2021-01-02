function pairSum(nums, target) {
  for(var i=0;i<=nums.length;i++){
    for(var k=i+1;k<=nums.length;k++){
      if(target-nums[i]==nums[k])
        return true;
    }
  }
        return false;
  
}

// Do not edit this line;
module.exports = pairSum;

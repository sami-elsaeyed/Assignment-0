class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    var mid= nums.length/2;
    if(nums(mid)==target){
      return true;
    }
    if (mid+1>=hi)
      return false;
    if(nums[mid]<target)
      return this.binarySearch(nums.slice(mid+1,nums.length),target);
    if(nums[mid]>target)
      return this.binarySearch(nums.slice(0,mid-1),target);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;

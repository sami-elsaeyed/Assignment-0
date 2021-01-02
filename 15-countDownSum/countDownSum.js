class MySolution {
  countDownSum(num) {
    if(num==2)
      return 3;
    return num+countDownSum(num-1);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;

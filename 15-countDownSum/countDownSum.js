class MySolution {
  countDownSum(num) {
    if(this.num==2)
      return 3;
    else
    return this.num+this.countDownSum(num-1);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;

function fizzBuzz(start, end) {
  var fizz =[];
  for(var i=start;i<=end;i++){
    if(i%3==0){
      if(i%5==0){
        fizz.push("FizzBuzz");
      }
      else
        fizz.push("Fizz");
    }
    else if(i%5==0)
      fizz.push("Buzz");
    else 
      fizz.push(i);
  }
}

// Do not edit this line;
module.exports = fizzBuzz;

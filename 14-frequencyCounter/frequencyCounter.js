function frequencyCounter(word) {
 var freq=new Object();
  for(var i=0;i<=word.length;i++){
    if(freq.word.charAt(i)==null)
      freq.word.charAt(i)=1;
    else
      freq.word.charAt(i)++;
    return freq;
  }
}

// Do not edit this line;
module.exports = frequencyCounter;

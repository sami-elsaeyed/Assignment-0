function isPalindrome(word) {
  if(word.length<=3 && word.charAt(0)==word.charAt(word.length))
    return true;
  if(word.charAt(0)==word.charAt(word.length))
    return isPalindrome(word.substring(1,word.lenth-1))
  else 
    return false;
    
}

// Do not edit this line;
module.exports = isPalindrome;

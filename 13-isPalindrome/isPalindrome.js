function isPalindrome(word) {
  if(word.length<=3 && word.charAt(0)==word.charAt(word.length-1))
    return true;
  if(word.charAt(0)==word.charAt(word.length))
    return isPalindrome(word.substring(1,word.length-2))
  else 
    return false;
    
}

// Do not edit this line;
module.exports = isPalindrome;

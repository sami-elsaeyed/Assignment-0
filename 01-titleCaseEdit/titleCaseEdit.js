function titleCaseEdit(title) {
  title=title.charAt(0).toUpperCase().concat(title.substring(1))
  for(var i =1;i <=title.length;i++){
    if(title.charAt(i)==" "){
  if(title.charAt(i+1)==title.charAt(i+1).toLowerCase()){
    title=title.substring(0,i).concat(" "+title.charAt(i+1).toUpperCase().concat(title.substring(i+2)));
  }
  }
  }
return s;
}

// Do not edit this line;
module.exports = titleCaseEdit;

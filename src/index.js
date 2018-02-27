module.exports = function check(str, bracketsConfig) {
  // your solution
  var strArr = str.split('');
  if (strArr.length % 2 > 0) {
    return false;
  } 
  var temp = [],
      openB = [],
      closeB = [],
      count = 0;
  for (var i=0; i < bracketsConfig.length; i++) {
    openB.push(bracketsConfig[i][0]);
    closeB.push(bracketsConfig[i][1]);
  }
  for (var i=0; i < strArr.length; i++) {
    for (var j=0; j < openB.length; j++) {
      if (strArr[i] == openB[j]) {
        temp.push(strArr[i]);
        count++;
      }
      if ((strArr[i] == closeB[j])&&(temp[temp.length-1] == openB[j])) {
        temp.pop();
        count--;
      }
    }
  }
  if (count==0) {
    return true;
  } else {
    return false;
  }

}

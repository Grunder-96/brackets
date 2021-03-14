  
module.exports = function check(str, bracketsConfig) {
  let strPair = bracketsConfig.map(function mass(currentValue) {
    return currentValue.join("");
  });
  let strCheck = str;

  for (let i = 0; i < strPair.length; i++) {
      if (str.includes(strPair[i])) {
          strCheck = str.replace(strPair[i], "");
          i = -1;
      }
      str = strCheck;
  }

  if (strCheck === "") {
    return true;
  } else {
    return false;
  }
};
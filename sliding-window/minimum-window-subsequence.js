function minWindowSubseq(str1, str2) {
  let minSubStr = "";
  if (str2.length > str1.length) return minSubStr;
  
  const windowSlide = (subStr1, string2) => {
    if (subStr1.length > string2.length) return;
    let string2Tracker = 0;
    
    for (let i = 0; i < subStr1.length; i++) {
      if (subStr1[i] === string2[string2Tracker]) {
        if (string2Tracker === string2.length - 1) return subStr1.slice(0, i + 1);
        string2Tracker++;
      }
    }
    return;
  }
  
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[0]) {
      let subString = windowSlide(str1.slice(i + 1), str2.slice(1));
      if (subString && (minSubStr === "" ||  minSubStr.length > (str1[i] + subString).length > 0)) minSubStr = str1[i] + subString
    }
  }
  
  return minSubStr;

}

console.log('ex1', minWindowSubseq("abbcb", "ab")); // => "abbc"
console.log(minWindowSubseq("abbcb", "abd")); // => ""
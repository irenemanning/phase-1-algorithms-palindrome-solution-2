function isPalindrome(word) {
  // Write your algorithm here
  word.length - 1/2
  for (let i=0; i < word.length / 2; i++) {
    const j = word.length - 1 - i
    
    if (word[i] !== word[j]) return false;
  }
  return true
}

/* 
  Add your pseudocode here
  compare the 
*/

/*
  Add written explanation of your solution here
  in a string, if the last letter is the the same as the first letter, and seccond to last letter is same as the seccond letter and so on untill a middle is reached, 
  return true
  if any letter doesn't match, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

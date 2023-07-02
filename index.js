function isPalindrome(word) {
  // Write your algorithm here
    const reversedWord = word.split('').reverse().join('');
  
    return word === reversedWord;
  }
  





/* 
  Add your pseudocode here
*/


 /* Add written explanation of your solution here
The use of `split('')` reversed() and join('') allows the function to reverse the
characters of the `word` and compare it to the original*/


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

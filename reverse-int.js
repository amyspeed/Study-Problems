////////    Given a 32-bit signed integer, reverse digits of an integer.

////// Assume we are dealing with an environment which could only store 
// integers within the 32-bit signed integer range: [−231,  231 − 1]. 
// For the purpose of this problem, assume that your function returns 
// 0 when the reversed integer overflows.



//My answer:

const reverse = (num) => {
    let stringNum = num.toString();
    let reverseStrNum = "";
    
    if (num < 0) {
        stringNum = stringNum.substring(1);
        reverseStrNum = loopToReverse(stringNum);
        reverseStrNum = Number(`-${reverseStrNum}`);
    }
    else {
        reverseStrNum = loopToReverse(stringNum)
        reverseStrNum = Number(reverseStrNum);
    }
    if ((reverseStrNum > (2 ** 31 - 1)) || (reverseStrNum < (2 ** 31 * -1))) {
        reverseStrNum = 0;
    }
    return reverseStrNum
};

const loopToReverse = (stringNum) => {
    let reverseStrNum = "";
    for (let i=0; i < stringNum.length; i++) {
        reverseStrNum = stringNum[i] + reverseStrNum;
        }
    return Number(reverseStrNum);
}



// Another answer
// https://www.youtube.com/watch?v=XpvNcex-rc0&feature=youtu.be
let reverse = function(x) {    
    let negative = x < 0;
    let reversed = 0;
    
    if (negative) {
        x *= -1;
    }
    
    while (x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    
    if (reversed > (2 ** 31 - 1)) {
        return 0;
    }
    
    return negative ? (reversed * -1) : reversed;
};


// And Another answer
var reverse = function(x) {
    let a = Math.abs(x).toString().split('').reverse().join('')
    if (a > Math.pow(2,31) - 1) {
      return 0
    } else if (x > 0) {
      return Number(a)
    } else {
      return a * -1
    }
  };
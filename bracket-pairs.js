// NOT FINISHED!!!!!

///////// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

/////// An input string is valid if:

//////// Open brackets must be closed by the same type of brackets.
/////// Open brackets must be closed in the correct order.
//////// Note that an empty string is also considered valid.


//// MY SOLUTION NOT DONE
const BRACKET_STORE = {
    "[" : "]",
    "{" : "}",
    "(" : ")"
}

const isValid = (bracketStr) => {
    // if empty, return true
    if (bracketStr === "") return true;
    
    // else, continue to explore
    // loop through str
    let storeStr = bracketStr;
    for (let i = 0; i < storeStr.length; i++) {
        
    // if bracket is NOT a key in the object return false, because it is a closing bracket
        
        if (!(storeStr[0] in BRACKET_STORE)) {
            return false;
        }
    
    // THE STRING WILL GET SHORTER HERE:
        
    // if the last character in the string is the match, remove the pair
        if (storeStr[storeStr.length - 1] === BRACKET_STORE[storeStr[0]]) {
            console.log(`removing ${0} and ${storeStr.length - 1}`)
            storeStr = removeChar(storeStr, storeStr.length - 1);
            storeStr = removeChar(storeStr, 0)
        }
        
   // if the next character is the match, remove the pair
        if (storeStr[0 + 1] === BRACKET_STORE[storeStr[0]] ) {
            console.log(`removing ${0} and ${0 + 1}`)
            storeStr = removeChar(storeStr, 0 + 1);
            storeStr = removeChar(storeStr, 0)
        }
        
    // if the match is in the string, but not first or last, we need to go deeper
        if (storeStr.includes(BRACKET_STORE[storeStr[0]])) {
            let matchIndex = storeStr.indexOf(BRACKET_STORE[storeStr[0]]);
            console.log(matchIndex)
        }
    }
    console.log(storeStr)
    return storeStr === "";
};


const removeChar = (str, index) => {
  part1 = str.substring(0, index);
  part2 = str.substring(index + 1, str.length);
  return (part1 + part2);
}


///// OTHER SOLUTIONS

var isValid = function(s) {
    if (s.length%2 == 1) //if there is an odd number of symbols, must be false since we have an unmatched pair.
      return false;
      
    let brackets = {  //left brackets as keys, right as their respective values
      "(":")",
      "{":"}",
      "[":"]"
     }
     
    let stack = [];
    for (i=0; i<s.length; i++) {
       if(brackets[s[i]]) // matches a left bracket, so add to top of stack
         stack.unshift(s[i]);
     else if (s[i] != brackets[stack.shift()]) // not a left bracket, so if doesn't match top of stack, badly nested
       return false;
    }
    return (stack.length==0); // make sure all elements have been removed from the stack, else return false
  };

  ///////////////////

  var isValid = function(s) {
    const match = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (match[s[i]]) {
            stack.push(s[i]);
        } else {
            let open = stack.pop();
            if (!match[open] || match[open] !== s[i]) {
                return false;
            }
        }
    }
    return !stack.length;
};

////////////////////

const isValid = function(s) {
    // Solution: Remove all pairs.
    for (let a = 0, b = s.length; a !== b;)
        a = b, s = s.replace(/\(\)|{}|\[\]/g, ''), b = s.length
    return !s.length // Still do not understand?
};

//////////////

var isValid = function(str) {
    const dictionary = new Map([["(", ")"], ["[", "]"], ["{", "}"]]);
    
    if ( str && ( str.length % 2 !== 0 || !dictionary.has(str[0]) ) ) 
      return false;
    
    return str.split("").reduce((memo, bracket) => {
      if (dictionary.has(bracket))
        memo.push(bracket);
      else if (dictionary.get( memo[memo.length - 1] ) === bracket)
        memo.pop();
      
      return memo;
    }, []).length === 0;
  };
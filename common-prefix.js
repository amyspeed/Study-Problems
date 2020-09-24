///////////////////   Write a function to find the longest common prefix string amongst an array of strings.
////////////////////  If there is no common prefix, return an empty string "".


/// MY ANSWER

const longestCommonPrefix = (strsArr) => {
    let prfx = "";
    if (strsArr.length) {
        prfx = strsArr[0];
        for (let i = 0; i < strsArr.length; i++) {
            
            let word = strsArr[i];
            
            while (word.indexOf(prfx) != 0 && prfx !== "") {
                prfx = prfx.substring(0, prfx.length -1);
            }
        }
    }
    return prfx;
};







// other answers
var longestCommonPrefix = function(strs) {
    // if the string is empty, return ''
     if(!strs || strs.length === 0) {
         return ''
     }
     // sort strings by length in descending order.
     const sortedString = strs.sort((a,b)=> a.length < b.length);
     let commonPrefix = '';
     const longestString = strs[0]
     
     for(let i = 0; i<=longestString.length; i++) {
         
         const currentSubstring = longestString.substring(0,i+1);
         const isCommonPrefix = strs.every((singleString)=>singleString.startsWith(currentSubstring));
         
         if(isCommonPrefix) {
             commonPrefix = currentSubstring
         }
     }
     return commonPrefix
 };

/////////////////

 const longestCommonPrefix = (strs) => {
    if (strs.length === 0) return '';
  
    let prefix = '';
  
    for (let i = 0; i < strs[0].length; i += 1) {
      if (strs.every((str) => str[i] === strs[0][i])) {
        prefix += strs[0][i];
      } else {
        break;
      }
    }
  
    return prefix;
  };

/////////////////

  const longestCommonPrefix = (strs) => {
    const firstStr = strs[0] || '';
    let result = '';
    for (let i = 0; i < firstStr.length; i++) {
      let l = firstStr[i];
      if (strs.some(s => s[i] !== l)) {
        return result;
      } else {
        result += l;
      }
    }
    return result;
  };

  /////////////////

  var longestCommonPrefix = (strs) => {
    if(!strs.length || !strs[0])return ''
    let prefix = '', i = 0
    while(strs[0][i] && strs.every(x => x[i] === strs[0][i]))prefix += strs[0][i++]
    return prefix
};

/////////////////

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs.pop();
    
    // sort, then compare the 2 shortest strings
    const matrix = strs.sort((s1, s2) => s1.length - s2.length);
    matrix[0] = matrix[0].split('');
    matrix[1] = matrix[1].split('');
    
    let counter = 0;
    
    while (!!isColumnSame(arrayColumn(matrix, counter))) {
        counter++;
    }
        
    return counter === 0 ? '' : matrix[0].join('').substring(0, counter);
};

const arrayColumn = (arr, n) => arr.map(x => x[n]);
const isColumnSame = (arr) => arr.reduce((c,n) => c === n ? c : false)

/////////////////

var longestCommonPrefix = function(strs) {
    if (strs.length < 1) {
        return '';
    }
    
    let pre = '';
    let j = 0;
    
    while (true) {
        for (let i = 0; i < strs.length; i++) {
            if (!pre[j]) { // set pre at first
                pre += strs[i][j];
            }
            
            if (strs[i][j] !== pre[j]) { // something didnt match, return pre[j-1]
                return pre.substring(0, j);
            }
            
            if (j === strs[i].length) { // break if we get to the end of one string
                break;
            }
        }
        
        j++;
    }
    
    return pre;
};


////////

var longestCommonPrefix = function(strs) {
    
    if(strs.length == 0) {
        return "";
    }
    
    let str = strs[0];
    
    for (const word of strs) {
        while (word.indexOf(str) != 0) {
            str = str.substring(0, str.length - 1);              // remove one character from the end
            if (str === "")
                break;
        }
    }
    return str;
};


////////

var longestCommonPrefix = function(strs) {

    let searchStr =""; 
    for(let i=0;i<strs.length;i++){
      if (searchStr =="" || searchStr.length > strs[i].length){
        searchStr = strs[i];
      }
    }
    console.log(searchStr);
    var i = 0; 
    while(i < strs.length){
      if(strs[i].indexOf(searchStr) == 0 ){
        i++;
      }
      else{
        searchStr = searchStr.substr(0,searchStr.length-1);
        console.log(searchStr);
      }
    }    
    return searchStr;   
    }
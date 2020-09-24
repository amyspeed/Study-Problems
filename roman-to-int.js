///////// Given a roman numeral, convert it to an integer.
///////// Input is guaranteed to be within the range from 1 to 3999.

// MY FOURTH ANSWER
const romIntObj = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,
}

const romanToInt = (s) => {
    // loop through string of roman numbers, adding or subtracting to newInt
    let newInt = 0;
    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length) {
        let nextVal = s[i + 1];
        if ((s[i] === 'I') && (nextVal === 'V' || nextVal === 'X') ||
            (s[i] === 'X') && (nextVal === 'L' || nextVal === 'C') ||
            (s[i] === 'C') && (nextVal === 'D' || nextVal === 'M')) {
            newInt = (romIntObj[nextVal] - romIntObj[s[i]]) + newInt;
            i++;
            }
            else {
                newInt = newInt + romIntObj[s[i]];
            }
        }
        else {
            newInt = newInt + romIntObj[s[i]];
        }
    }
    return newInt;
};

// MY THIRD ANSWER
const romIntObj = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,
}

const romanToInt = (s) => {
    // loop through string of roman numbers, adding or subtracting to newInt
    let newInt = 0;
    for (let i = 0; i < s.length; i++) {
        let nextVal = s[i + 1];
        if ((s[i] === 'I') && (nextVal === 'V' || nextVal === 'X') ||
            (s[i] === 'X') && (nextVal === 'L' || nextVal === 'C') ||
            (s[i] === 'C') && (nextVal === 'D' || nextVal === 'M')) {
            newInt = (romIntObj[nextVal] - romIntObj[s[i]]) + newInt;
            i++;
        }
        else {
            newInt = newInt + romIntObj[s[i]];
        }
    }
    return newInt;
};



// MY Second Answer
const romIntObj = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,
}

const romanToInt = (s) => {
    // loop through string of roman numbers, adding or subtracting to newInt
    let newInt = 0;
    for (let i = 0; i < s.length; i++) {
        let nextVal = romIntObj[s[i + 1]];
        if (((romIntObj[s[i]] === 1) && (nextVal === 5 || nextVal === 10)) ||
            ((romIntObj[s[i]] === 10) && (nextVal === 50 || nextVal === 100)) ||
            ((romIntObj[s[i]] === 100) && (nextVal === 500 || nextVal === 1000))) {
            let subtrInt = nextVal - romIntObj[s[i]];
            newInt = newInt + subtrInt;
            i++;
        }
        else {
            newInt = newInt + romIntObj[s[i]];
        }
    }
    return newInt;
};

// MY First ANSWER
var romanToInt = function(s) {
    // create array to convert to integers
    let intArr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I') {
            intArr.push(1)
        }
        if (s[i] === 'V') {
            intArr.push(5)
        }
        if (s[i] === 'X') {
            intArr.push(10)
        }
        if (s[i] === 'L') {
            intArr.push(50)
        }
        if (s[i] === 'C') {
            intArr.push(100)
        }
        if (s[i] === 'D') {
            intArr.push(500)
        }
        if (s[i] === 'M') {
            intArr.push(1000)
        }
    }
    console.log(intArr);
    // loop through new array, adding or subtracting to newInt
    let newInt = 0;
    for (let i = 0; i < intArr.length; i++) {
        let nextVal = intArr[i + 1];
        if (((intArr[i] === 1) && (nextVal === 5 || nextVal === 10)) ||
            ((intArr[i] === 10) && (nextVal === 50 || nextVal === 100)) ||
            ((intArr[i] === 100) && (nextVal === 500 || nextVal === 1000))) {
            let subtrInt = nextVal - intArr[i];
            newInt = newInt + subtrInt;
            i++;
        }
        else {
            newInt = newInt + intArr[i];
        }
    }
    return newInt;
};



// Another answer
const romanToInt = (str) => {
    const map = { I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L : 50, XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000 };
    let result = 0;
    for (let i = 0; i < str.length;) {
      const doubleVal = map[str.slice(i, i + 2)];
      if (doubleVal) {
        result += doubleVal;
        i += 2;
      } else {
        result += map[str[i]];
        i += 1;
      }
    }
    return result;
  };


  // another 
  const romanToInt = s => {
    const strArray = s.split('');
    let total = 0;
    for (let i=0; i<strArray.length; i++){
        switch(strArray[i]){
            case 'I':
                if (strArray[i+1]==='V'){
                    total += 4;
                    i++;
                } else if(strArray[i+1]==='X'){
                    total += 9;
                    i++;
                } else{
                    total += 1;
                }
                break;
            case 'V':
                total += 5;
                break;
            case 'X':
                if (strArray[i+1]==='L'){
                    total += 40;
                    i++;
                } else if(strArray[i+1]==='C'){
                    total += 90;
                    i++;
                } else{
                    total += 10;
                }
                break;
            case 'L':
                total += 50;
                break;
            case 'C':
                if (strArray[i+1]==='D'){
                    total += 400;
                    i++;
                } else if(strArray[i+1]==='M'){
                    total += 900;
                    i++;
                } else{
                    total += 100;
                }
                break;
            case 'D':
                total += 500;
                break;
            default:
                total += 1000;
                break;
        }
    }
    return total;
};

// another 
var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var total=0;
    for (let i=0; i<s.length; i++) {
        map[s[i]] < map[s[i+1]] ? total-=map[s[i]] : total+=map[s[i]];
    }
    return total;
};
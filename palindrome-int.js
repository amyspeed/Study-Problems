/////// Determine whether an integer is a palindrome. 
// An integer is a palindrome when it reads the same backward as forward.



// My solution:
const isPalindrome = (x) =>  {
    // negatives are false because of the "-"
    if (x < 0) {
        return false;
    }
    let reverseInt = 0;
    let xRemaining = x;
    while (xRemaining > 0) {
        reverseInt = (reverseInt * 10) + (xRemaining % 10);
        xRemaining = Math.floor(xRemaining / 10);
        console.log(reverseInt, xRemaining, x)
    }
    // if the reverse found above is equal to the input, success!
    if (reverseInt === x) {
        return true;
    }
    else {
        return false;
    }
};

// Other solutions:

var isPalindrome = function(x) {
    if(x<0) return false;
    if(x<10) return true;
    let palindrome = x+'';
    let p1=0, p2=palindrome.length-1;
    while(p1<p2){
        if(palindrome[p1]!==palindrome[p2])
            return false;
        else {p1++; p2--}
    }
    return true;
};

var isPalindrome = function(x) {
    if(x<0) return false;
    if(x<10) return true;
    let reversed=0, num=x;
    while(num>0){
        reversed=reversed*10 + num%10;
        num=Math.floor(num/10);
    }
    return reversed===x;
}

// without converting to string
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    };
    
	// calculate how many digits x has
    let decimalPlace = 0;
    while (Math.floor(x / 10 ** decimalPlace) >= 1) {
        decimalPlace++;
    };
    
	// initialize an array to store digits of x
	// i.e. given x as 1221
	// we are going to generate an array [1, 2, 2, 1] from x
    let decimalArr = [];
    
    for (let i = decimalPlace - 1; i >= 0; i--) {
        const currentDecimal = Math.floor(x / 10 ** i);
        decimalArr.push(currentDecimal);
		
		// remember to remove the digit that is just pushed to decimalArr
        x -= currentDecimal * 10 ** i;
    };
    
	// run a regular two-pointer palindrome check for decimalArr and you are done
	// initialize two pointers
    let i = 0, j = decimalArr.length - 1;
    
    while (i < j) {
        if (decimalArr[i] !== decimalArr[j]) {
            return false;
        }
        
        i++;
        j--;
    };
    
    return true;
}

// with converting the number to a string
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    };
    
    const temp = x.toString();
    
    let i = 0, j = temp.length - 1;
    while (i < j) {
        if (temp[i] === temp[j]) {
            i++;
            j--;
        }
        else {
            return false;
        }
    };
    
    return true;
};
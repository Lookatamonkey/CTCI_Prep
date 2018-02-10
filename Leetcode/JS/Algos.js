// Add Digits #258
var addDigits = function(num) {
    if (num < 10) {return num;}
    let newNum = 0;
    
    while (num > 9) {
      newNum += num % 10;
      num = Math.floor(num / 10);
    }
    newNum += num;
    
    if (newNum > 9) {
        return addDigits(newNum);
    } else {
        return newNum;
    }
};
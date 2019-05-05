function isEven(number){
    number = Math.abs(number);
    if(number == 0){
        return true;
    }
    else if(number == 1){
        return false;
    }
    else{
       
        return isEven(number-2);
    }
}



/*var isEven = function(num) {
    num = Math.abs(num); //convert to absolute value to account for negative numbers
    if (num === 0)
        return true;
    else if (num === 1)
        return false;
    else
        return isEven(num - 2);
}
*/
console.log(isEven(-1));
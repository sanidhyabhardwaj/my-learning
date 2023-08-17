/*function additionalFunction(num1, num2){
    var sum=num1+num2;
    return sum;
}

function subtractFunction(num3, num4){
    var difference=num3-num4;
    return difference;
}

function multiplyFunction(num5, num6){
    var multiply=num5*num6;
    return multiply;
}

function divideFunction(num7, num8){
    var divide=num7/num8;
    return divide;
}*/

 function mathOp(num1, num2, operation) {
    switch(operation){
        case "+":
            return num1+num2;
            break;

        case "-":
            return num1-num2;
            break;

        case "*":
            return num1*num2;
            break;

        case "/":
            return num1/num2;
            break;
        
        default:
            return "Invalid operation";
}
 }
result  = mathOp(4, 4, "/");
// result = mathOp(5, 1);
// result = mathOp(3, 2);
// result = mathOp(3, 2);
console.log(result);



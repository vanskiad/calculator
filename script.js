function add(num1, num2){
    return num1+num2;
}

function substract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function devide(num1, num2){
    return num1/num2;
}

let num1;
let num2;
let operator;

function operate(num1, num2, operator){
    if (operator==="+")
        return add(num1,num2);

        if (operator==="-")
        return substract(num1,num2);
    
        if (operator==="*")
        return multiply(num1,num2);

        if (operator==="/")
        return devide(num1,num2);
}
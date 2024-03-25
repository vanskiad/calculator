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

let displayValue="";
let num1=0;
let num2=0;
let operator="";
let displayNum1="";
let displayNum2="";
let num1Exists=false;

document.querySelectorAll('button').forEach((btn)=>{
    btn.addEventListener('click', event=>{

        if(btn.value=="="){
            
            if (num1Exists && displayNum2 && operator){
                num2=Number(displayNum2);
                document.querySelector('.display').textContent =operate(num1, num2, operator);
                operator="";
                num1=Number(document.querySelector('.display').textContent);
                displayNum2="";
                num2=0;
        }

           
        }
        else if(btn.value=="C"){
            
            document.querySelector('.display').textContent ="0";
            
            num1=0;
            num2=0;
            operator="";
            displayNum1="";
            displayNum2="";
            num1Exists=false;
            
        }
        else if(btn.value=="+"|| btn.value=="-" || btn.value=="*" || btn.value=="/"){
            //check if a number has been keyed first
            
            if (num1Exists && operator){
                    num2=Number(displayNum2);
                    document.querySelector('.display').textContent =operate(num1, num2, operator);
                    operator=btn.value;
                    num1=Number(document.querySelector('.display').textContent);
                    displayNum2="";
                    num2=0;
                    document.querySelector('.display').textContent  +=operator;
                    //console.log ("1")

            }
            else if (num1Exists && !operator) {
                operator=btn.value;  
                document.querySelector('.display').textContent  +=operator;   
                //console.log ("2")        
            }

            else if (!operator){
                num1=Number(displayNum1);
                num1Exists=true;
                operator=btn.value;
                document.querySelector('.display').textContent  +=operator;
                //console.log ("3")
                
            }
            displayValue= document.querySelector('.display').textContent;

        }
        else {   
            // Clear the 0 first
            if (document.querySelector('.display').textContent=="0") 
            document.querySelector('.display').textContent="";

                if (!operator && num1Exists){
                    displayNum1="";
                    num1Exists=false;
                    document.querySelector('.display').textContent="";
                }
                
                if (!operator) {                      
                    displayNum1 +=btn.textContent;
                    //console.log ("number1="+displayNum1);
                }
                else{
                    displayNum2 +=btn.textContent;
                   // console.log ("number2="+displayNum2);
                }
            
            document.querySelector('.display').textContent +=btn.textContent;
            displayValue= document.querySelector('.display').textContent;
        }
    });
});
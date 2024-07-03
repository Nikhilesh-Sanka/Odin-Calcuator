const add= (a,b) => a+b;
const subtract =(a,b) => a-b;
const divide = (a,b) => {
    if(b===0){
        return "ERROR";
    }
    else{
        return (a/b).toFixed(2);
    }
};
const multiply =(a,b) => a*b;
function operate (a,b,operation){
    switch (operation) {
        case "add":
            return add(a,b);
        case "subtract":
            return subtract(a,b);
        case "multiply":
            return multiply(a,b);
        case "divide":
            return divide(a,b);
        default:
            return;
    }
};
const clearButton=document.querySelector("#clear");
const screen =document.querySelector(".screen");
const numButtons=document.querySelectorAll(".digit");
const operateButtons=document.querySelectorAll(".operate");
const equalButton=document.querySelector(".equal");
let numberTyped=false;
let operationAllowed=false;
let numOneBeingProcessed=true;
let numTwoBeingProcessed=false;
let canShowResult=false;
let operation;
let numButtonAllowed=true;
const addButtonContentToScreen = (event) => {
    if(numButtonAllowed){
        screen.textContent+=event.target.textContent;
        if(numOneBeingProcessed){
            num1+=event.target.id;
            operationAllowed=true;
        }
        else{
            num2+=event.target.id;
            canShowResult=true;
            operationAllowed=false;
        }
    }
};
const processOperateButton = (event) => {
    if(operationAllowed){
        operation=event.target.id;
        operationAllowed=false;
        screen.textContent+=event.target.textContent;
        numOneBeingProcessed=false;
        numTwoBeingProcessed=true;
        console.log(num1);
        console.log(num2);
        console.log(operation);
        numButtonAllowed=true;
    }
}
const processEqualButton = (event) => {
    if(canShowResult){
        screen.textContent=operate(parseInt(num1),parseInt(num2),operation);
        num1=operate(parseInt(num1),parseInt(num2),operation);
        num2=0;
        canShowResult=false;
        operationAllowed=true;
        numButtonAllowed=false;
    }
}
//clearing screen code//
const clearScreen = () => {
    screen.textContent="";
    numberTyped=false;
    operationAllowed=false;
    numButtonAllowed=true;
    numOneBeingProcessed=true;
    numTwoBeingProcessed=false;
    num1="";
    num2="";
}
clearButton.addEventListener("click",clearScreen);
//clearing screen code//
//********************************************************************************/
//getting user input//
let num1="";
let num2="";
numButtons.forEach((numButton)=> {
    numButton.addEventListener("click",addButtonContentToScreen);
})
operateButtons.forEach((operateButton) => {
    operateButton.addEventListener("click",processOperateButton);
})
//getting user input//
//**********************************************************************************/
//final display and resetting the values//
equalButton.addEventListener("click",processEqualButton);
//final display and resetting the values;





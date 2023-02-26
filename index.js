let displayValue = "";

let numbersArray = [];

let num1 

let num2

let numberButtons = document.querySelectorAll(".button");

let plusButton = document.querySelector(".plus");

let equalButton = document.querySelector(".equal");

let clearButton = document.querySelector(".clear");

let displayScreen = document.querySelector(".calculator-screen>h1");

let resultScreen = document.querySelector(".calculator-screen>h2");

let isNumberOneEntered = false;

let operatorFunction 



function add(number1, number2) {
    return number1 + number2;
}

function substract(number1, number2) {
    return number1 - number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function operator (number1, number2, calculatingFunction){
    return calculatingFunction(number1,number2);
}



for (let index = 0; index < numberButtons.length; index++) {
    numberButtons[index].addEventListener("click", function(event){
        displayValue = displayValue + this.innerText;
        displayScreen.innerText =  displayValue;
    })
    
}



plusButton.addEventListener("click", function (params) {
    operatorFunction = add;
    if (num1 && num2 != true) {
        console.log("am");
        num2 = parseInt(displayValue.slice(displayValue.indexOf('+') + 1));
        resultScreen.innerText = operator(num1, num2, operatorFunction);
        num1 = parseInt(resultScreen.innerText);
        num2 = 0;
        displayValue = num1 + "+";
        displayScreen.innerText = displayValue;
        
    } else{
        num1 = parseInt(displayValue.replace("+", ""));
        
    }

})


equalButton.addEventListener("click", function (params) {
    
    num2 = parseInt(displayValue.slice(displayValue.indexOf('+') + 1));
    resultScreen.innerText = operator(num1, num2, operatorFunction);
})

clearButton.addEventListener("click", function (params) {
    num1 = 0;
    num2 = 0;
    displayValue = "";
    displayScreen.innerText = "";
    resultScreen.innerText = "Cleared";
})
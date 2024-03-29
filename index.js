let displayValue = "";

let numbersArray = [];

let num1;

let num2;

let numberButtons = document.querySelectorAll(".button");

let plusButton = document.querySelector(".plus");

let minusButton = document.querySelector(".minus");

let multiplyButton = document.querySelector(".multiply");

let divideButton = document.querySelector(".divide");

let equalButton = document.querySelector(".equal");

let clearButton = document.querySelector(".clear");

let displayScreen = document.querySelector(".calculator-screen>h1");

let resultScreen = document.querySelector(".calculator-screen>h2");

let isNumberOneEntered = false;

let operatorFunction;

let slicerCharacter;

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

function operator(number1, number2, calculatingFunction) {
  return calculatingFunction(number1, number2);
}


function emptyScreenOperatorHandle(){
  if (displayValue === "+" ||
  displayValue === "-" ||
  displayValue === "*" || 
  displayValue === "=" ||
  displayValue === "/") {
    alert("No number input dedected");
    displayScreen.innerText = "";
    displayValue = "";
    window.classList.remove("pressed");
  }
}

function operatorButtonToggle(pressedButton, op1, op2, op3, op4, noneOrAutoString ) {
  pressedButton.classList.remove("pressed");
  pressedButton.style.pointerEvents = noneOrAutoString;
  op1.style.pointerEvents = noneOrAutoString;
  op2.style.pointerEvents = noneOrAutoString;
  op3.style.pointerEvents = noneOrAutoString;
  op4.style.pointerEvents = noneOrAutoString;
}

function reactivateButtons() {
  let pressedItems = document.querySelectorAll(".op.pressed");
      let buttonItems = [plusButton, minusButton, multiplyButton, divideButton, equalButton];
      pressedItems.forEach(element => {
        element.classList.remove("pressed");
      });
      
      buttonItems.forEach(element => {
        element.style.pointerEvents = "auto"
      });
}

for (let index = 0; index < numberButtons.length; index++) {
  numberButtons[index].addEventListener("mousedown", function () {
    displayValue = displayValue + this.innerText;
    displayScreen.innerText = displayValue;
    this.classList.add("pressed");
    let checkLastChar = this.innerText;
    console.log(checkLastChar);

    if (checkLastChar !== "+" || checkLastChar !== "-" || checkLastChar !== "*" || checkLastChar !== "/") {
     reactivateButtons();
    }
  });

  numberButtons[index].addEventListener("mouseup", function () {
    this.classList.remove("pressed");
  });
}



plusButton.addEventListener("click", function () {
  operatorButtonToggle(this, minusButton, divideButton, multiplyButton, equalButton, "none");
  emptyScreenOperatorHandle();
  this.classList.add("pressed");
  switch (slicerCharacter) {
    case "-":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;
      break;

    case "/":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;
      break;

    case "*":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;
      break;

    default:
      break;
  }

  

  operatorFunction = add;
  slicerCharacter = "+";
  if (num1 && num2 !== true) {
    if (num2 === null) {
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = NaN;
      displayValue = num1 + slicerCharacter;
      displayScreen.innerText = displayValue;
    } else {
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);

      displayValue = num1 + slicerCharacter;
      displayScreen.innerText = displayValue;
    }
  } else if (num1 === true && num2 === false) {
    console.log("aa");
  } else {
    num1 = parseInt(displayValue.replace(slicerCharacter, ""));
  }
});

minusButton.addEventListener("click", function (params) {
  operatorButtonToggle(this, plusButton, divideButton, multiplyButton, equalButton, "none");
  emptyScreenOperatorHandle();
  this.classList.add("pressed");
  switch (slicerCharacter) {
    case "+":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;
      break;

    case "/":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;
      break;

    case "*":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;
      break;

    default:
      break;
  }

  operatorFunction = substract;
  slicerCharacter = "-";
  if (num1 && num2 != true) {
    if (num2 === null) {
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = NaN;
      displayValue = num1 + slicerCharacter;
      displayScreen.innerText = displayValue;
    } else {
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);

      displayValue = num1 + slicerCharacter;
      displayScreen.innerText = displayValue;
    }
  } else if (num1 === true && num2 === false) {
    console.log("aa");
  } else {
    num1 = parseInt(displayValue.replace(slicerCharacter, ""));
  }
});

multiplyButton.addEventListener("click", function () {
  operatorButtonToggle(this, minusButton, divideButton, plusButton, equalButton, "none");
  emptyScreenOperatorHandle();
  this.classList.add("pressed");
  switch (slicerCharacter) {
    case "-":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;
      break;

    case "/":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;
      break;

    case "+":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;
      break;

    default:
      break;
  }

  operatorFunction = multiply;
  slicerCharacter = "*";
  if (num1 && num2 != true) {
    if (num2 === null) {
     
      num1 = parseInt(resultScreen.innerText);
      num2 = NaN;
      displayValue = num1 + slicerCharacter;
      displayScreen.innerText = displayValue;
    } else {
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);

      displayValue = num1 + slicerCharacter;
      displayScreen.innerText = displayValue;
    }
  } else if (num1 === true && num2 === false) {
    console.log("aa");
  } else {
    num1 = parseInt(displayValue.replace(slicerCharacter, ""));
  }
});

divideButton.addEventListener("click", function name(params) {
  operatorButtonToggle(this, minusButton, plusButton, multiplyButton, equalButton, "none");
  emptyScreenOperatorHandle();
  this.classList.add("pressed");
  switch (slicerCharacter) {
    case "-":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;
      break;

    case "+":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;
      break;

    case "*":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;
      break;

    default:
      break;
  }

  operatorFunction = divide;
  slicerCharacter = "/";
  if (num1 && num2 != true) {
    if (num2 === null) {
      
      num1 = parseInt(resultScreen.innerText);
      num2 = NaN;
      displayValue = num1 + slicerCharacter;
      displayScreen.innerText = displayValue;
    } else {
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);

      displayValue = num1 + slicerCharacter;
      displayScreen.innerText = displayValue;
    }
  } else if (num1 === true && num2 === false) {
    console.log("aa");
  } else {
    num1 = parseInt(displayValue.replace(slicerCharacter, ""));
  }
});

equalButton.addEventListener("click", function (params) {
  emptyScreenOperatorHandle();
  num2 = parseInt(
    displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
  );
  resultScreen.innerText = operator(num1, num2, operatorFunction);
  displayScreen.innerText = resultScreen.innerText;
  num2 = "";
});

function equal() {}

clearButton.addEventListener("click", function (params) {
  num1 = null;
  num2 = null;
  displayValue = "";
  displayScreen.innerText = "";
  resultScreen.innerText = "Cleared";
  reactivateButtons();
});

/*
function operatorQueueHandler(slicerCharacter){
  switch (slicerCharacter) {
    case "-":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;
      break;

    case "/":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;

    case "*":
      num2 = parseInt(
        displayValue.slice(displayValue.indexOf(slicerCharacter) + 1)
      );
      resultScreen.innerText = operator(num1, num2, operatorFunction);
      num1 = parseInt(resultScreen.innerText);
      num2 = null;

    default:
      break;
  }
} */

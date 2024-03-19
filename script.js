let firstNumber;
let operator;
let secondNumber;
let previousButton;

let displayValue;
const display = document.querySelector("#display");
const buttonsThatDisplay = document.querySelectorAll(".digits");
buttonsThatDisplay.forEach((button) => {
    button.addEventListener("click", () => {
        if (previousButton === "/" || previousButton === "*" || previousButton === "+" || previousButton === "-"
        || previousButton === "=") {
            display.textContent = button.textContent;
            displayValue = button.textContent;
        } else {
            display.textContent = display.textContent + button.textContent;
            displayValue = display.textContent;
        }

        previousButton = button.textContent;
    });
});

const operatorButtons = document.querySelectorAll(".operators");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNumber === undefined) {
            firstNumber = Number(displayValue);
            operator = button.textContent;
        } else {
            secondNumber = Number(displayValue);
            const answer = operate(operator, firstNumber, secondNumber);
            display.textContent = answer;
            firstNumber = answer;
            secondNumber = undefined;
            operator = button.textContent;
        }

        previousButton = button.textContent;
    })
});

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    secondNumber = Number(displayValue);
    const result = operate(operator, firstNumber, secondNumber);
    display.textContent = result;
    firstNumber = undefined;
    secondNumber = undefined;
    operator = "";
    previousButton = "=";
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    display.textContent = "";
    firstNumber = undefined;
    secondNumber = undefined;
    operator = "";
});

/*
const plusMinusButton = document.querySelector("#plus-minus");
plusMinusButton.addEventListener("click", () => {
    display.textContent = ;
});
*/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operatorChoice, num1, num2) {
    if (operatorChoice === "+") {
        return add(num1, num2);
    } else if (operatorChoice === "-") {
        return subtract(num1, num2);
    } else if (operatorChoice === "*") {
        return multiply(num1, num2);
    } else if (operatorChoice === "/") {
        return divide(num1, num2);
    }
}




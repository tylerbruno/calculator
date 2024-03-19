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
        } else if (display.textContent.split("").length < 9) {
            if (display.textContent === "0" && button.textContent === "0") {
                return;
            } else if (display.textContent === "0") {
                if (button.textContent === ".") {
                    display.textContent = display.textContent + button.textContent;
                    displayValue = display.textContent;
                } else {
                    display.textContent = button.textContent;
                    displayValue = button.textContent;
                }
            } else if (display.textContent.split("").includes(".")) {
                if (button.textContent === ".") {
                    return;
                }  else {
                    display.textContent = display.textContent + button.textContent;
                    displayValue = display.textContent;
                }
            } else {
                display.textContent = display.textContent + button.textContent;
                displayValue = display.textContent;
            }
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
            if (previousButton === "/" || previousButton === "*" || previousButton === "+" || previousButton === "-") {
                secondNumber = firstNumber;
            } else {
                secondNumber = Number(displayValue);
            }
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
    displayValue = result;
    firstNumber = undefined;
    secondNumber = undefined;
    operator = "";
    previousButton = "=";
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    display.textContent = "";
    displayValue = "";
    firstNumber = undefined;
    secondNumber = undefined;
    operator = "";
    previousButton = "AC";
});


const plusMinusButton = document.querySelector("#plus-minus");
plusMinusButton.addEventListener("click", () => {
    if (Number(displayValue) > 0) {
        display.textContent = `-${displayValue}`;
        displayValue = display.textContent;
    } else if (Number(displayValue) < 0) {
        display.textContent = `${-(Number(displayValue))}`;
        displayValue = display.textContent;
    }

    previousButton = "+/-";
});

const percentButton = document.querySelector("#percentage");
percentButton.addEventListener("click", () => {
    const percentAnswer = (Number(displayValue)/100).toExponential(2);
    display.textContent = percentAnswer;
    displayValue = percentAnswer;
    previousButton = "%";
})


function add(a, b) {
    const addAnswer = a + b;
    if (addAnswer > 99999999 || addAnswer < -99999999) {
        return addAnswer.toExponential(2);
    } else {
        return Math.round(1000 * addAnswer) / 1000;
    }
}

function subtract(a, b) {
    const subtractAnswer = a - b;
    if (subtractAnswer > 99999999 || subtractAnswer < -99999999) {
        return subtractAnswer.toExponential(2);
    } else {
        return Math.round(1000 * subtractAnswer) / 1000;
    }
}

function multiply(a, b) {
    const multiplyAnswer = a * b;
    if (multiplyAnswer > 99999999 || multiplyAnswer < -99999999) {
        return multiplyAnswer.toExponential(2);
    } else {
        return Math.round(1000 * multiplyAnswer) / 1000;
    }
}

function divide(a, b) {
    if (b === 0) {
        return "lmao";
    }
    const divideAnswer = a / b;
    if (divideAnswer > 99999999 || divideAnswer < -99999999) {
        return divideAnswer.toExponential(2);
    } else {
        return Math.round(1000 * divideAnswer) / 1000;
    }
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




let result1 = "0";
let result2 = "0";
let activeOperator = "plus";

const activeNumber = document.querySelector("#activeNumber");
const memorisedNumber = document.querySelector("#memorisedNumber");
const clearAll = document.querySelector("#clearAll");
const clear = document.querySelector("#clear");
const switchSign = document.querySelector("#switchSign");
const pointButton = document.querySelector("#point");


function add(a, b) {
    return ((+a) + (+b));
}

function subtract(a, b) {
    return ((+a) - (+b));
}

function multiply(a, b) {
    return ((+a) * (+b));
}

function divide(a, b) {
    return (+b) ? ((+a) / (+b)) : error();
}

function error() {
    result1 = "DIVIDE BY ZERO";
    result2 = "DIVIDE BY ZERO";
    activeOperator = "DIVIDE BY ZERO";
    activeNumber.textContent = "DIVIDE BY ZERO";
    memorisedNumber.textContent = "DIVIDE BY ZERO";
}

function operate() {
    switch (activeOperator) {
        case "plus": result1 = add(result1, result2);
            break;
        case "subtract": result1 = subtract(result1, result2);
            break;
        case "multiply": result1 = multiply(result1, result2);
            break;
        case "divide": result1 = divide(result1, result2);
            break;
    };
    memorisedNumber.textContent = result1;
    activeNumber.textContent = result2;
}

function listenNumber() {
    const numberButton = document.querySelectorAll('.number');
    Array.from(numberButton).forEach(number => {
        number.addEventListener('click', function (number) {
            numberActivated(this.id);
        });
    });
}

function refreshActiveNumber() {
    if (!result2.includes(".")) {
        result2 = Math.round(result2);
    }
    activeNumber.textContent = result2;
}

function listenOperator() {
    const operatorButton = document.querySelectorAll('.operator');
    Array.from(operatorButton).forEach(operator => {
        operator.addEventListener('click', function (operator) {
            operatorActivated(this.id);
        });
    });
}

function listenClear() {
    const clearButton = document.querySelectorAll('.clear');
    Array.from(clearButton).forEach(clear => {
        clear.addEventListener('click', function (clear) {
            result2 = "0";
            activeNumber.textContent = result2;
            if (this.id == "clearAll") {
                result1 = "0";
                memorisedNumber.textContent = result1;
                activeOperator = "plus";
            }
        });
    });
}

function listenSign() {
    switchSign.addEventListener('click', function () {
        result2 *= -1;
        activeNumber.textContent = result2;
    });
}

function listenPoint() {
    pointButton.addEventListener('click', function () {
        pointActivated();
    });
}

function pointActivated() {
    if (!result2.toString().includes('.')) {
        result2 += ".";
        activeNumber.textContent = result2;
    }
}

function numberActivated(num) {
    result2 += num;
    refreshActiveNumber()
}

function operatorActivated(operator) {
    operate();
    if (operator.id != "equal") {
        activeOperator = operator;
        result2 = "0";
        activeNumber.textContent = result2;
    }
}

function listenKeys() {
    document.addEventListener('keydown', (event) => {
        let name = event.key;
        let code = event.code;
        console.log('key pressed : ' + name + "\r\n Key code value : " + code);
        switch (event.key) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                numberActivated(event.key);
                break;
            case ".":
                pointActivated();
                break;
            case "+":
                operatorActivated("plus");
                break;
            case "-":
                operatorActivated("subtract");
                break;
            case "*":
                operatorActivated("multiply");
                break;
            case "/":
                operatorActivated("divide");
                break;
            case "Enter":
            case "=":
                operatorActivated("equal");
                break;
        }
    }, false);
}

listenKeys();
listenPoint();
listenSign();
listenNumber();
listenOperator();
listenClear();
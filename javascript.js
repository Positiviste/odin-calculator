let result1 = "0";
let result2 = "0";
let activeOperator = "plus";

const activeNumber = document.querySelector("#activeNumber");
const memorisedNumber = document.querySelector("#memorisedNumber");
const clearAll = document.querySelector("#clearAll");
const clear = document.querySelector("#clear");

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
    return ((+a) / (+b));
}

function operate() {
    console.log(result1 + activeOperator + result2);
    switch (activeOperator) {
        case "plus": result1 = add(result1, result2);
            result2 = 0;
            break;
        case "subtract": result1 = subtract(result1, result2);
            result2 = 0;
            break;
        case "multiply": result1 = multiply(result1, result2);
            result2 = 0;
            break;
        case "divide": result1 = divide(result1, result2);
            result2 = 0;
            break;
        // case "equal": result1 = result2
        //     result2 = 0;
        //     break;
    };
    memorisedNumber.textContent = result1;
}

function listenNumber() {
    const numberButton = document.querySelectorAll('.number');
    Array.from(numberButton).forEach(number => {
        number.addEventListener('click', function (number) {
            result2 += this.id;
            refreshActiveNumber()
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
            operate();
            if (this.id != "equal") {
                activeOperator = this.id;
            }
        });
    });
}

function listenClear() {
    const clearButton = document.querySelectorAll('.clear');
    Array.from(clearButton).forEach(clear => {
        clear.addEventListener('click', function (clear) {
            result2 = "0";
            activeNumber.textContent = result2;
            console.log("clear");
            if (this.id == "clearAll") {
                result1 = "0";
                memorisedNumber.textContent = result1;
                activeOperator = "plus";
                console.log("clearAll");
            }
        });
    });
}


listenNumber();
listenOperator();
listenClear();
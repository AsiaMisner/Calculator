let currentCalculation = [];
let numArray = [];
let numValue = 0;
let operators = ["+", "-", "/", "*", "%",];
let pastcalc = [];
let calculation = 0;
let recentCalc = "";
display(calculation);

function initiateCalculationNum(input) {
    numArray.push(input);
    addToArray(input);
}
function initiateCalculationOp(input) {
    addToArray(input);
}
function addToArray(input) {
    if (input === '=') {
        currentCalculation.push(numValue);
        numArray = [];
        solve();
    } else if (input === '_') {
        let flipSign = numValue * -1;
        currentCalculation.push(flipSign);
        console.log(flipSign);
        display(numValue);

    } else if (operators.includes(input) === false) {
        numValue = numArray.join('');
        display(numValue);
    } else {
        currentCalculation.push(numValue);
        numArray = [];
        currentCalculation.push(input);
        if (typeof input == 'number') {
            display(numValue);
        }
    }
}
function clearArray() {
    currentCalculation = [];
    numArray = [];
    console.log("CLEARED.");
    calculation = 0;
    display(calculation);
}


function solve() {
    recentCalc = currentCalculation.join('');

    while (currentCalculation.length > 1) {
        let num1 = Number(currentCalculation[0]);
        let operator = currentCalculation[1];
        while (operators.includes(currentCalculation[1]) === false) {
            currentCalculation.splice(1, 1);
        }
        operator = currentCalculation[1];

        while (operators.includes(currentCalculation[2]) === true) {
            currentCalculation.splice(1, 1);
        }
        operator = currentCalculation[1];
        let num2 = Number(currentCalculation[2]);
        recentCalc = currentCalculation.join('');
        console.log("Equation = " + recentCalc);

        if (operator === '+') {
            calculation = add(num1, num2);
            display(calculation.toFixed(6));
        } else if (operator === '-') {
            calculation = subtract(num1, num2);
            display(calculation.toFixed(6));
        } else if (operator === '*') {
            calculation = multiply(num1, num2);
            display(calculation.toFixed(6));
        } else if (operator === '/') {
            if ((num1 === 0) && (num2 === 0)) {
                display('Error');
            } else {
                calculation = divide(num1, num2);
                display(calculation.toFixed(6));
            }
        } else if (operator === '%') {
            calculation = remainder(num1, num2);
            display(calculation.toFixed(6));
        } else {
            display('Error');
        }
        currentCalculation.splice(0, 3);
        currentCalculation.splice(0, 0, calculation.toFixed(6));
        console.log(currentCalculation);

    }
    pastcalc.push(recentCalc + '=' + calculation.toFixed(6));
    pastDisplay();
    currentCalculation = [];
    currentCalculation.push(calculation);
}

function display(total) {
    document.querySelector('.js-output').innerHTML = ` ${total}`;
}

function pastDisplay() {
    let calculated = '';
    pastcalc.forEach(function (index) {
        let html =
            `<p> 
            ${index}
        </p > `;
        calculated += html;
    });
    document.querySelector('.js-pastCalc').innerHTML = ` ${calculated} `;
}

function add(num1, num2) {
    answer = num1 + num2;
    return answer;
}

function subtract(num1, num2) {
    answer = num1 - num2;
    return answer;
}

function multiply(num1, num2) {
    answer = num1 * num2;
    return answer;
}

function divide(num1, num2) {
    answer = num1 / num2;
    return answer;
}

function remainder(num1, num2) {
    answer = num1 % num2;
    return answer;
}
/* make it so the user cant insert two decimals in one number
fix the ability to turn it negative or positive
adjust recent calculation css and put limits on it
*/
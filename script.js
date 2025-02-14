let operation = '';

function setOperation(op) {
    operation = op;
}

function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var resultBox = document.getElementById('result');
    var result;

    if (isNaN(num1)) {
        result = "Please enter a valid number.";
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num1; // Example logic, can be replaced
                break;
            case 'subtract':
                result = num1 - num1; // Example logic, can be replaced
                break;
            case 'multiply':
                result = num1 * num1; // Example logic, can be replaced
                break;
            case 'divide':
                result = num1 !== 0 ? num1 / num1 : "Cannot divide by zero."; // Example logic, can be replaced
                break;
            default:
                result = "Please select an operation.";
                break;
        }
    }

    resultBox.value = result;
}

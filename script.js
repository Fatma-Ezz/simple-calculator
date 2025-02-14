let operation = '';

function setOperation(op) {
    operation = op;
}

function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultBox = document.getElementById('result');
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    result = "Cannot divide by zero.";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Please select an operation.";
                break;
        }
    }

    resultBox.value = result;
    document.getElementById('num1').value = ''; // Clear the first input field
    document.getElementById('num2').value = ''; // Clear the second input field
}

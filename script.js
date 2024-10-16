let memory = 0;

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function memoryClear() {
    memory = 0; // Limpia la memoria
}

function memoryRecall() {
    const display = document.getElementById('display');
    display.value = memory.toString(); // Muestra el valor en memoria
}

function memoryAdd() {
    const displayValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(displayValue)) {
        memory += displayValue; // Suma el valor actual a la memoria
    }
}

function memorySubtract() {
    const displayValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(displayValue)) {
        memory -= displayValue; // Resta el valor actual de la memoria
    }
}

function toggleSign() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString(); // Cambia el signo del valor actual
    }
}

function calculate(operator) {
    const display = document.getElementById('display');
    let result;

    switch (operator) {
        case '=':
            try {
                result = eval(display.value); // Evalúa la expresión en el display
                display.value = result;
            } catch (error) {
                display.value = 'Error'; // Manejo de errores
            }
            break;
        case 'sqrt':
            result = Math.sqrt(parseFloat(display.value));
            display.value = result;
            break;
        case '1/x':
            result = 1 / parseFloat(display.value);
            display.value = result;
            break;
        default:
            display.value += operator; // Agrega el operador a la expresión
            break;
    }
}

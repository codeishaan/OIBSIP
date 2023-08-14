let currentInput = '';
let display = document.getElementById('display');

function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        display.innerText = 'Error';
    }
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function handleKeyPress(event) {
    const key = event.key;

    if (/[0-9+\-*/.=]/.test(key)) {
        event.preventDefault();
        if (key === '=' || key === 'Enter') {
            calculate();
        } else {
            appendToDisplay(key);
        }
    } else if (key === 'Backspace') {
        deleteLastCharacter();
    }
}

document.addEventListener('keydown', handleKeyPress);

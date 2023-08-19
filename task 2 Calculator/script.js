// functions to make buttons working 

function clearValue() {
    document.calc.txt.value = '';
}

function backspace() {
    document.calc.txt.value = document.calc.txt.value.slice(0, -1);
}

function appendText(value) {
    document.calc.txt.value += value;
}

function calculateResult() {
    document.calc.txt.value = eval(document.calc.txt.value);
}

function addPercentage() {
    let currentValue = document.calc.txt.value;
    if (currentValue !== '') {
        let percentageValue = parseFloat(currentValue) / 100;
        document.calc.txt.value = percentageValue;
    }
}
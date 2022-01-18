let runningTotal = 0;
let buffer = "0";
let previousOperator;

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}

function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
    rerender();
}

function handleSymbol(value) {
    if ()
}

function rerender() {
    
}

document.querySelector('.calc-buttons').addEventListener("click", function(event) {
    buttonClick(event.target.value);
})

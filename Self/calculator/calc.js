// Display
const display = document.getElementById("answer-box");

// Buttons
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const equalBtn = document.getElementById("eq");

// Expression
let expression = "";

// Function to update display
function updateDisplay() {
    display.textContent = expression || "0";
}

// Function to add values
function addValue(value) {
    expression += value;
    updateDisplay();
}

// Number buttons
document.getElementById("a").addEventListener("click", () => addValue("1"));
document.getElementById("b").addEventListener("click", () => addValue("2"));
document.getElementById("c").addEventListener("click", () => addValue("3"));
document.getElementById("d").addEventListener("click", () => addValue("4"));
document.getElementById("e").addEventListener("click", () => addValue("5"));
document.getElementById("f").addEventListener("click", () => addValue("6"));
document.getElementById("g").addEventListener("click", () => addValue("7"));
document.getElementById("h").addEventListener("click", () => addValue("8"));
document.getElementById("i").addEventListener("click", () => addValue("9"));
document.getElementById("j").addEventListener("click", () => addValue("0"));
document.getElementById("k").addEventListener("click", () => addValue("."));

// Operators
document.getElementById("plus").addEventListener("click", () => addValue("+"));
document.getElementById("minus").addEventListener("click", () => addValue("-"));
document.getElementById("multiply").addEventListener("click", () => addValue("*"));
document.getElementById("divide").addEventListener("click", () => addValue("/"));
document.getElementById("p").addEventListener("click", () => addValue("%"));

// Clear
clearBtn.addEventListener("click", () => {
    expression = "";
    updateDisplay();
});

// Delete last character
deleteBtn.addEventListener("click", () => {
    expression = expression.slice(0, -1);
    updateDisplay();
});

// Calculate
equalBtn.addEventListener("click", () => {
    try {
        expression = eval(expression).toString();
        updateDisplay();
    } catch {
        expression = "";
        display.textContent = "Error";
    }
});

// Initial display
updateDisplay();


document.addEventListener("keydown", (event) => {
    const key = event.key;

    console.log(key); // Optional: shows the key pressed in the console

    // Numbers
    if (!isNaN(key)) {
        addValue(key);
    }

    // Operators
    else if (["+", "-", "*", "/", "%", "."].includes(key)) {
        addValue(key);
    }

    // Enter = Calculate
    else if (key === "Enter") {
        equalBtn.click();
    }

    // Backspace = Delete
    else if (key === "Backspace") {
        deleteBtn.click();
    }

    // Escape = Clear
    else if (key === "Escape") {
        clearBtn.click();
    }
});
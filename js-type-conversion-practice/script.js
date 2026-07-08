// Select Elements
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const checkBtn = document.querySelector("#checkBtn");

const addition = document.querySelector("#addition");
const multiplication = document.querySelector("#multiplication");

// Button Click Event
checkBtn.addEventListener("click", () => {

    // String Values
    const first = num1.value;
    const second = num2.value;

    // String Concatenation
    addition.textContent =
        "String Addition: " + (first + second);

    // Convert into Numbers
    const number1 = parseInt(first);
    const number2 = parseInt(second);

    // Numeric Multiplication
    multiplication.textContent =
        "After parseInt(): " + (number1 + number2);

});
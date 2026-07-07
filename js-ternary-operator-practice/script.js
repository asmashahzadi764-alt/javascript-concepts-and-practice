// Select Elements
const ageInput = document.querySelector("#ageInput");
const checkBtn = document.querySelector("#checkBtn");
const result = document.querySelector("#result");

// Button Click Event
checkBtn.addEventListener("click", () => {

    // Convert input to number
    const age = Number(ageInput.value);

    // Ternary Operator
    const message = age >= 18
        ? "You are eligible to vote."
        : "You are not eligible to vote.";

    result.textContent = message;

});
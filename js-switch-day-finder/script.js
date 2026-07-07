// Select Elements
const dayInput = document.querySelector("#dayInput");
const showBtn = document.querySelector("#showBtn");
const result = document.querySelector("#result");

// Button Click Event
showBtn.addEventListener("click", () => {

    // Convert input to number
    const day = Number(dayInput.value);

    switch (day) {

        case 1:
            result.textContent = "Monday";
            break;

        case 2:
            result.textContent = "Tuesday";
            break;

        case 3:
            result.textContent = "Wednesday";
            break;

        case 4:
            result.textContent = "Thursday";
            break;

        case 5:
            result.textContent = "Friday";
            break;

        case 6:
            result.textContent = "Saturday";
            break;

        case 7:
            result.textContent = "Sunday";
            break;

        default:
            result.textContent = "Please enter a number between 1 and 7.";
    }

});
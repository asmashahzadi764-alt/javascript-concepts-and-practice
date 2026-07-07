// Select Elements
const showBtn = document.querySelector("#showBtn");
const result = document.querySelector("#result");

// Example Day Number
let day = 3;

// Button Click Event
showBtn.addEventListener("click", () => {

    switch (day) {

        case 1:
            result.textContent = "Today is Monday";
            break;

        case 2:
            result.textContent = "Today is Tuesday";
            break;

        case 3:
            result.textContent = "Today is Wednesday";
            break;

        case 4:
            result.textContent = "Today is Thursday";
            break;

        case 5:
            result.textContent = "Today is Friday";
            break;

        case 6:
            result.textContent = "Today is Saturday";
            break;

        case 7:
            result.textContent = "Today is Sunday";
            break;

        default:
            result.textContent = "Invalid Day Number";
    }

});
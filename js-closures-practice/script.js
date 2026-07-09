// Select Elements
const counterBtn = document.querySelector("#counterBtn");
const output = document.querySelector("#output");

// Closure Function
function createCounter() {

    let count = 0;

    return function () {

        count++;

        output.textContent = `Counter: ${count}`;

    };

}

// Create Counter
const counter = createCounter();

// Button Click Event
counterBtn.addEventListener("click", counter);
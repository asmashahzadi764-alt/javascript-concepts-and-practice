// Select Elements
const showBtn = document.querySelector("#showBtn");
const numberList = document.querySelector("#numberList");

// Button Click Event
showBtn.addEventListener("click", () => {

    // Clear previous output
    numberList.innerHTML = "";

    // Starting value
    let number = 1;

    // Do While Loop
    do {

        const li = document.createElement("li");
        li.textContent = "Number " + number;

        numberList.appendChild(li);

        number++;

    } while (number <= 10);

});
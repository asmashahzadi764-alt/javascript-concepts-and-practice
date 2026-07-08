// Select Elements
const showBtn = document.querySelector("#showBtn");
const output = document.querySelector("#output");

// Rest Operator Function
function sum(...numbers) {

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

// Spread Operator Array
const students = [
    "Asma",
    "Iqra",
    "Ahmad",
    "Ali"
];

// Button Click Event
showBtn.addEventListener("click", () => {

    const total = sum(10, 20, 30, 40);

    output.innerHTML = `
        <h3>Rest Operator</h3>
        <p>Total = ${total}</p>

        <h3>Spread Operator</h3>
        <p>${[...students]}</p>
    `;

});
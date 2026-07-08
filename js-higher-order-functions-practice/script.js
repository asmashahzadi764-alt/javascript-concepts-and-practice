// Select Elements
const output = document.querySelector("#output");

const forEachBtn = document.querySelector("#forEachBtn");
const mapBtn = document.querySelector("#mapBtn");
const filterBtn = document.querySelector("#filterBtn");
const findBtn = document.querySelector("#findBtn");
const reduceBtn = document.querySelector("#reduceBtn");

// Arrays
const students = [
    "Asma",
    "Iqra",
    "Ahmad",
    "Isha",
    "Ayesha"
];

const numbers = [10, 20, 30, 40, 50];

const employees = [
    {name: "Asma", age: 22},
    {name: "Iqra", age: 18},
    {name: "Ahmad", age: 27},
    {name: "Isha", age: 16},
    {name: "Ayesha", age: 24}
];

// forEach()
forEachBtn.addEventListener("click", () => {

    let result = "<h2>forEach()</h2>";

    students.forEach((student, index) => {

        result += `<p>${index + 1}. ${student}</p>`;

    });

    output.innerHTML = result;

});

// map()
mapBtn.addEventListener("click", () => {

    const doubledNumbers = numbers.map((number) => {

        return number * 2;

    });

    output.innerHTML = `
        <h2>map()</h2>

        <p>Original Numbers:</p>
        <p>${numbers}</p>

        <p>Doubled Numbers:</p>
        <p>${doubledNumbers}</p>
    `;

});

// filter()
filterBtn.addEventListener("click", () => {

    const adults = employees.filter((employee) => {

        return employee.age >= 18;

    });

    let result = "<h2>filter()</h2>";

    adults.forEach((employee) => {

        result += `<p>${employee.name} - ${employee.age} Years</p>`;

    });

    output.innerHTML = result;

});

// find()

findBtn.addEventListener("click", () => {

    const person = employees.find((employee) => {

        return employee.name === "Asma";

    });

    output.innerHTML = `
        <h2>find()</h2>

        <p>Name : ${person.name}</p>

        <p>Age : ${person.age}</p>
    `;

});


// reduce()
reduceBtn.addEventListener("click", () => {

    const total = numbers.reduce((sum, number) => {

        return sum + number;

    }, 0);

    output.innerHTML = `
        <h2>reduce()</h2>

        <p>Numbers : ${numbers}</p>

        <p>Total : ${total}</p>
    `;

});
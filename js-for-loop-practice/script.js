// Select Elements
const showBtn = document.querySelector("#showBtn");
const studentList = document.querySelector("#studentList");

// Students Array
const students = [
    "Asma Shahzadi",
    "Iqra",
    "Ahmad",
    "Isha",
    "Ayesha"
];

// Button Click Event
showBtn.addEventListener("click", () => {

    // Clear previous list
    studentList.innerHTML = "";

    // For Loop
    for (let i = 0; i < students.length; i++) {

        const li = document.createElement("li");
        li.textContent = students[i];
        studentList.appendChild(li);

    }

});
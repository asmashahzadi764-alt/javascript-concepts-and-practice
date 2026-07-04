// Select Elements
const addBtn = document.querySelector("#addBtn");
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
addBtn.addEventListener("click", () => {

    // Create DocumentFragment
    const fragment = document.createDocumentFragment();

    // Loop through students
    students.forEach((student) => {

        // Create li element
        const li = document.createElement("li");

        // Add text
        li.textContent = student;

        // Add li into fragment
        fragment.appendChild(li);

    });

    // Add fragment into ul
    studentList.appendChild(fragment);

});
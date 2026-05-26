// Step 1: select elements
const heading = document.querySelector("#heading");
const hideBtn = document.querySelector("#hideBtn");
const showBtn = document.querySelector("#showBtn");

// Step 2: hide function
hideBtn.addEventListener("click", () => {
    heading.style.display = "none";
});

// Step 3: show function
showBtn.addEventListener("click", () => {
    heading.style.display = "block";
});

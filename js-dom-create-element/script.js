// Select Elements
const addBtn = document.querySelector("#addBtn");
const notes = document.querySelector("#notes");

// Add Event
addBtn.addEventListener("click", () => {

    // Create Element
    const paragraph = document.createElement("p");

    // Add Text
    paragraph.textContent = "New Note Added";

    // Add Element To Page
    notes.appendChild(paragraph);

});

# 📝 JavaScript DOM Practice — Dynamic Notes (Create Element)

A beginner JavaScript project demonstrating how to dynamically create and append HTML elements to the page using DOM manipulation.

---

## 📁 Project Structure

```
js-dom-create-element/
│
├── index.html       # Heading + Add Note button + notes container
└── script.js        # DOM selection, element creation & append logic
```

---

## 🧠 Concepts Covered

### 1. Selecting Elements
```js
const addBtn = document.querySelector("#addBtn");
const notes  = document.querySelector("#notes");
```
- `addBtn` — the button that triggers note creation
- `notes` — the `<div>` container where new notes appear

---

### 2. Listening for Click
```js
addBtn.addEventListener("click", () => {
    // runs every time button is clicked
});
```
- Each click fires the arrow function callback

---

### 3. Creating a New Element — `createElement`
```js
const paragraph = document.createElement("p");
```
- `document.createElement("p")` creates a new `<p>` tag **in memory** (not yet on page)

---

### 4. Adding Text — `textContent`
```js
paragraph.textContent = "New Note Added";
```
- Sets the visible text inside the newly created `<p>`

---

### 5. Appending to the Page — `appendChild`
```js
notes.appendChild(paragraph);
```
- `appendChild()` inserts the new `<p>` inside the `#notes` div
- Every click adds **another** paragraph to the list

---

## 🖥️ How It Works

| Action | Result |
|--------|--------|
| Click **Add Note** once | One `<p>New Note Added</p>` appears |
| Click **Add Note** again | Another `<p>` is added below the first |
| Keep clicking | Notes keep stacking dynamically |

---

## 🚀 How to Run

1. Clone or download this repository
2. Open `index.html` in any browser
3. Click **Add Note** button multiple times
4. Watch new notes appear dynamically on the page

---

## 📌 Key Takeaways

- `document.createElement("tag")` — creates a new HTML element in memory
- `element.textContent` — sets the text inside the element
- `parent.appendChild(child)` — inserts the element into the DOM
- Each button click runs the full create → set text → append flow independently

---

## 👩‍💻 Author

**Asma Shahzadi**  
Student — Women University Multan  
JavaScript DOM Practice Project

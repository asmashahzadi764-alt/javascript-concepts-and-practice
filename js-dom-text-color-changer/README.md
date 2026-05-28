# 🎨 JavaScript DOM Practice — Text & Color Changer

A beginner JavaScript project demonstrating DOM manipulation — changing text content and dynamically updating element color using event listeners.

---

## 📁 Project Structure

```
js-dom-text-color-changer/
│
├── index.html       # Heading + 3 buttons
└── script.js        # DOM selection, text & color change logic
```

---

## 🧠 Concepts Covered

### 1. Selecting Elements
```js
const heading = document.querySelector("#heading");
const textbtn = document.querySelector("#textbtn");
const redbtn  = document.querySelector("#redbtn");
const bluebtn = document.querySelector("#bluebtn");
```
- `querySelector("#id")` used to grab each element by its ID

---

### 2. Change Text — `textContent`
```js
textbtn.addEventListener("click", () => {
    heading.textContent = "DOM Changed Successfully";
});
```
- `textContent` replaces the visible text inside the element
- Triggers on button click via `addEventListener`

---

### 3. Change Color to Red
```js
redbtn.addEventListener("click", () => {
    heading.style.color = "red";
});
```

---

### 4. Change Color to Blue
```js
bluebtn.addEventListener("click", () => {
    heading.style.color = "blue";
});
```
- `element.style.color` directly updates the inline CSS color of the element

---

## 🖥️ How It Works

| Button | Action |
|--------|--------|
| **Change Text** | Heading text changes to "DOM Changed Successfully" |
| **Red** | Heading color changes to red |
| **Blue** | Heading color changes to blue |

---

## 🚀 How to Run

1. Clone or download this repository
2. Open `index.html` in any browser
3. Click the buttons to see text and color changes live

---

## 📌 Key Takeaways

- `element.textContent` — updates the text inside an element
- `element.style.color` — changes text color via inline style
- `addEventListener("click", () => {})` — attaches click events using arrow functions
- Multiple buttons can independently control the same element

---

## 👩‍💻 Author

**Asma Shahzadi**  
Student — Women University Multan  
JavaScript DOM Practice Project

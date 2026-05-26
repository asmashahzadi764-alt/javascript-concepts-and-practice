# 🖱️ JavaScript DOM Practice — Show & Hide Element

A beginner JavaScript project demonstrating basic DOM manipulation — selecting elements, adding event listeners, and toggling visibility using `style.display`.

---

## 📁 Project Structure

```
js-dom-show-hide/
│
├── index.html       # Heading + Hide/Show buttons
└── script.js        # DOM selection and event listeners
```

---

## 🧠 Concepts Covered

### 1. Selecting Elements — `querySelector`
```js
const heading = document.querySelector("#heading");
const hideBtn = document.querySelector("#hideBtn");
const showBtn = document.querySelector("#showBtn");
```
- `document.querySelector()` selects the **first matching element**
- `#id` selector used to target specific elements by their ID

---

### 2. Hide on Click — `style.display = "none"`
```js
hideBtn.addEventListener("click", () => {
    heading.style.display = "none";
});
```
- `addEventListener("click", ...)` listens for a button click
- Setting `display` to `"none"` makes the element **invisible and removed from layout**

---

### 3. Show on Click — `style.display = "block"`
```js
showBtn.addEventListener("click", () => {
    heading.style.display = "block";
});
```
- Setting `display` to `"block"` brings the element **back into view**

---

## 🖥️ How It Works

| Action | Result |
|--------|--------|
| Click **Hide** | `<h1>` disappears from the page |
| Click **Show** | `<h1>` reappears on the page |

---

## 🚀 How to Run

1. Clone or download this repository
2. Open `index.html` in any browser
3. Click the **Hide** and **Show** buttons to see DOM manipulation in action

---

## 📌 Key Takeaways

- `document.querySelector("#id")` — selects element by ID
- `addEventListener("click", callback)` — attaches a click event
- `element.style.display = "none"` — hides an element
- `element.style.display = "block"` — shows an element
- Arrow functions `() => {}` used as event callbacks

---

## 👩‍💻 Author

**Asma Shahzadi**  
Student — Women University Multan  
JavaScript DOM Practice Project

# 📝 JavaScript DOM Practice — innerHTML Content Changer

A beginner JavaScript project demonstrating DOM manipulation using the `innerHTML` property. This project shows how HTML content can be dynamically updated and rendered inside an element when a button is clicked.

---

## 📁 Project Structure

```
js-dom-innerhtml-practice/
│
├── index.html       # Heading and Change Content button
└── script.js        # DOM selection and innerHTML manipulation
```

---

## 🧠 Concepts Covered

### 1. Selecting Elements — `querySelector()`

```js
const heading = document.querySelector("#heading");
const changeBtn = document.querySelector("#changeBtn");
```

* `document.querySelector()` selects the first matching element
* `#id` selector is used to target elements by their ID

---

### 2. Listening for Click Events — `addEventListener()`

```js
changeBtn.addEventListener("click", () => {
    
});
```

* Listens for a button click
* Executes the callback function when the button is clicked

---

### 3. Updating Content — `innerHTML`

```js
heading.innerHTML =
    "Welcome <strong>Asma Shahzadi</strong>";
```

* `innerHTML` replaces the existing content inside an element
* HTML tags are interpreted and rendered by the browser
* `<strong>` makes the text bold

---

## 🖥️ How It Works

| Action               | Result                                     |
| -------------------- | ------------------------------------------ |
| Page Loads           | Heading displays "Welcome"                 |
| Click Change Content | Heading changes to "Welcome Asma Shahzadi" |
| `<strong>` Tag       | Name appears in bold text                  |

---

## 🔍 innerHTML vs textContent

### Using `textContent`

```js
heading.textContent =
    "Welcome <strong>Asma Shahzadi</strong>";
```

Output:

```text
Welcome <strong>Asma Shahzadi</strong>
```

The HTML tags appear as plain text.

---

### Using `innerHTML`

```js
heading.innerHTML =
    "Welcome <strong>Asma Shahzadi</strong>";
```

Output:

**Welcome Asma Shahzadi**

The HTML tags are rendered by the browser.

---

## 🚀 How to Run

1. Clone or download this repository
2. Open `index.html` in any browser
3. Click the **Change Content** button
4. Observe how the heading content changes dynamically

---

## 📌 Key Takeaways

* `document.querySelector("#id")` selects an element by ID
* `addEventListener("click", callback)` handles button clicks
* `innerHTML` updates HTML content dynamically
* HTML tags inside `innerHTML` are rendered by the browser
* `innerHTML` and `textContent` behave differently

---

## 👩‍💻 Author

**Asma Shahzadi**

Student — Women University Multan

JavaScript DOM Practice Project

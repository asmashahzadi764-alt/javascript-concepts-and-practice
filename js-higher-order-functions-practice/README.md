# 🔝 JavaScript Higher Order Functions Practice

A practice project demonstrating five of JavaScript's most-used higher-order array methods — `forEach()`, `map()`, `filter()`, `find()`, and `reduce()` — each triggered by its own button to show how they transform or extract data from an array.

---

## 🔗 Live Demo

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-2EA44F?style=for-the-badge&logo=githubpages&logoColor=white)](https://asmashahzadi764-alt.github.io/javascript-concepts-and-practice/js-higher-order-functions-practice/)

---

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📌 What This Demonstrates

- **`forEach()`** — loops through an array of students and displays each with its index, without returning a new array
- **`map()`** — transforms a numbers array by doubling each value and returns a brand-new array
- **`filter()`** — returns a new array containing only employees aged 18 or older
- **`find()`** — returns the first matching object from an array based on a condition
- **`reduce()`** — accumulates all numbers in an array into a single total using a starting value
- Working with arrays of both primitives (strings, numbers) and objects
- Updating the DOM dynamically with `innerHTML` and template literals

---

## 📁 Folder Structure

```
js-higher-order-functions-practice/
├── index.html
└── script.js
```

---

## 💻 How to Run Locally

```bash
git clone https://github.com/asmashahzadi764-alt/javascript-concepts-and-practice.git
cd javascript-concepts-and-practice/js-higher-order-functions-practice
```

Then open `index.html` in your browser and click any of the buttons — **forEach()**, **map()**, **filter()**, **find()**, or **reduce()** — to see that method's result.

---

## 🎯 Key Takeaways

- All five methods are higher-order functions because each takes a callback function as an argument
- `forEach()` just runs a function on each item and returns `undefined` — it doesn't build a new array
- `map()` always returns a new array of the same length, with each item transformed
- `filter()` returns a new array containing only the items that pass a condition (could be shorter than the original)
- `find()` returns only the **first** matching item itself, not an array
- `reduce()` boils an entire array down to a single value, using an accumulator and an optional starting value (the `0` in `reduce((sum, number) => ..., 0)`)
- Choosing the right method (instead of a generic `for` loop) makes the intent of the code clearer — "I'm transforming," "I'm filtering," "I'm searching," "I'm totaling"

---

## 👩‍💻 Author

**Asma Shahzadi**
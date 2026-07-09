# 🔒 JavaScript Closures Practice

A small practice project demonstrating closures in JavaScript by building a counter function that "remembers" its state between clicks, even after the outer function has finished running.

---

## 🔗 Live Demo

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-2EA44F?style=for-the-badge&logo=githubpages&logoColor=white)](https://asmashahzadi764-alt.github.io/javascript-concepts-and-practice/js-closures-practice/)

---

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📌 What This Demonstrates

- Creating a closure by returning an inner function from an outer function (`createCounter()`)
- How the inner function keeps access to the outer function's variable (`count`) even after `createCounter()` has already finished executing
- Using the returned function directly as an event listener callback
- Updating the DOM with `textContent` and template literals

---

## 📁 Folder Structure

```
js-closures-practice/
├── index.html
└── script.js
```

---

## 💻 How to Run Locally

```bash
git clone https://github.com/asmashahzadi764-alt/javascript-concepts-and-practice.git
cd javascript-concepts-and-practice/js-closures-practice
```

Then open `index.html` in your browser and click **"Increase Counter"** repeatedly to see the count go up.

---

## 🎯 Key Takeaways

- A closure happens when an inner function "remembers" the variables from its outer function's scope, even after the outer function has already returned
- Here, `count` isn't reset to `0` on every click — it stays alive in memory because the returned inner function still holds a reference to it
- Closures are what make patterns like counters, private variables, and function factories possible in JavaScript
- This is a common interview topic because it tests real understanding of scope, not just syntax

---

## 👩‍💻 Author

**Asma Shahzadi**
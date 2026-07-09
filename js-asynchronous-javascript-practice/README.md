# ⏳ JavaScript Asynchronous Programming Practice

A practice project covering the core building blocks of async JavaScript — the event loop, callbacks, promises, async/await, and a real API call with the Fetch API — each triggered by its own button.

---

## 🔗 Live Demo

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-2EA44F?style=for-the-badge&logo=githubpages&logoColor=white)](https://asmashahzadi764-alt.github.io/javascript-concepts-and-practice/js-asynchronous-javascript-practice/)

---

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📌 What This Demonstrates

- **Event Loop** — shows how `setTimeout()` is pushed aside and run later, even though it's written before the last synchronous line, proving JavaScript doesn't wait for it
- **Callback Function** — passing a function (`showMessage`) as an argument to another function (`greet`) to run after it finishes
- **Promise** — wrapping a delayed operation in a `Promise`, resolving it after 2 seconds, and handling the result with `.then()`
- **Async/Await** — using `async`/`await` as cleaner, more readable syntax for handling a Promise-based function
- **Fetch API** — making a real network request to a public API (`jsonplaceholder.typicode.com`), awaiting the JSON response, and handling failures with `try...catch`

---

## 📁 Folder Structure

```
js-asynchronous-javascript-practice/
├── index.html
└── script.js
```

---

## 💻 How to Run Locally

```bash
git clone https://github.com/asmashahzadi764-alt/javascript-concepts-and-practice.git
cd javascript-concepts-and-practice/js-asynchronous-javascript-practice
```

Then open `index.html` in your browser and try each button — **Event Loop**, **Callback**, **Promise**, **Async/Await**, and **Fetch API** — to see that concept in action.

---

## 🎯 Key Takeaways

- JavaScript is single-threaded, but the **event loop** lets it handle timers and async tasks without blocking the rest of the code — that's why "2. End" appears before "3. setTimeout Executed" in the Event Loop example
- **Callbacks** were the original way to handle async code, but nesting many of them leads to hard-to-read "callback hell" — which is exactly why Promises were introduced
- A **Promise** has three states: pending, fulfilled, and rejected — `.then()` handles the fulfilled result
- **Async/await** is syntactic sugar over Promises — it lets async code read like normal, top-to-bottom synchronous code, which is easier to follow than chained `.then()` calls
- Always wrap `fetch()` calls in `try...catch` when using `await`, since network requests can fail and errors need to be handled gracefully instead of crashing the app

---

## 👩‍💻 Author

**Asma Shahzadi**

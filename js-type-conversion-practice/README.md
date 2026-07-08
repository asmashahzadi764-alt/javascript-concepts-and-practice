# 🔄 JavaScript Type Conversion Practice

A small practice project demonstrating the difference between string concatenation and numeric addition in JavaScript, and how `parseInt()` is used to convert string input into numbers.

---

## 🔗 Live Demo

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-2EA44F?style=for-the-badge&logo=githubpages&logoColor=white)](https://asmashahzadi764-alt.github.io/javascript-concepts-and-practice/js-type-conversion-practice/)

---

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📌 What This Demonstrates

- Reading user input from text fields with `.value` (returns strings by default)
- String concatenation using the `+` operator when both values are strings
- Converting string input to numbers with `parseInt()`
- Comparing the same `+` operation before and after type conversion
- Updating the DOM with `textContent`

---

## 📁 Folder Structure

```
js-type-conversion-practice/
├── index.html
└── script.js
```

---

## 💻 How to Run Locally

```bash
git clone https://github.com/asmashahzadi764-alt/javascript-concepts-and-practice.git
cd javascript-concepts-and-practice/js-type-conversion-practice
```

Then open `index.html` in your browser, enter two numbers, and click **"Calculate"** to compare the results.

---

## 🎯 Key Takeaways

- The `+` operator behaves differently depending on data type: with two strings it concatenates, but with two numbers it adds
- Input field values (`.value`) are always strings, even if the user types numbers — this is a common source of bugs in beginner calculators
- `parseInt()` converts a string to a whole number, making it safe to perform actual arithmetic instead of accidental text joining

---

## 👩‍💻 Author

**Asma Shahzadi**
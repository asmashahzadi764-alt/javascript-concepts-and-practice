# 🔍 JavaScript Practice — Typeof & Conditional Statements

A beginner JavaScript project demonstrating how to identify data types using `typeof` and make decisions using conditional statements such as `if...else`, logical AND (`&&`), and logical OR (`||`).

---

## 🌐 Live Demo

**View the project online:**
**https://asmashahzadi764-alt.github.io/javascript-concepts-and-practice/js-conditions-typeof-practice/**

> **Note:** This project is part of my **JavaScript Learning** repository and is hosted using GitHub Pages.

---

## 📁 Project Structure

```text
js-conditions-typeof-practice/
│
├── index.html       # Displays a simple heading and loads the JavaScript file
└── script.js        # JavaScript logic for typeof and conditional statements
```

---

## 🧠 Concepts Covered

### 1. Checking Data Types — `typeof`

```js
const studentName = "Asma";
const age = 20;

console.log(typeof studentName);
console.log(typeof age);
```

* `typeof` returns the data type of a variable.
* Common return values include:

  * `"string"`
  * `"number"`
  * `"boolean"`
  * `"undefined"`
  * `"object"`

---

### 2. Conditional Statements — `if...else`

```js
if (age >= 18) {
    console.log("Eligible by Age");
} else {
    console.log("Not Eligible");
}
```

* Executes one block of code when the condition is **true**.
* Executes the `else` block when the condition is **false**.

---

### 3. Logical AND Operator — `&&`

```js
if (age >= 18 && cgpa >= 3.0) {
    console.log("Eligible for Scholarship");
}
```

* Both conditions must be **true**.
* If either condition is false, the result becomes false.

---

### 4. Logical OR Operator — `||`

```js
if (city === "Multan" || city === "Lahore") {
    console.log("Punjab Student");
}
```

* At least **one condition** must be true.
* Used when multiple acceptable conditions exist.

---

## 🖥️ Expected Output

```text
string
number
string
number

Eligible by Age

Eligible for Scholarship

Punjab Student
```

---

## 🚀 How to Run

### Option 1 — Run Online

Visit the live project:

**https://asmashahzadi764-alt.github.io/javascript-learning-/js-conditions-typeof-practice/**

### Option 2 — Run Locally

1. Clone or download this repository.
2. Open `index.html` in any web browser.
3. Open the browser's **Developer Tools**.
4. Go to the **Console** tab.
5. View the output of the JavaScript program.

---

## 📌 Key Takeaways

* `typeof` identifies the data type of a variable.
* `if...else` is used for decision making.
* `&&` requires all conditions to be true.
* `||` requires at least one condition to be true.
* Conditional statements help build logical programs.

---

## 👩‍💻 Author

**Asma Shahzadi**



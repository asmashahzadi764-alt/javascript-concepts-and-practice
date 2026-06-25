# 📦 JavaScript Variables Practice

A beginner-friendly JavaScript project covering the basics of variables — `var`, `let`, and `const` — along with scope and hoisting concepts.

---

## 🖼️ Preview

![JavaScript Variables Practice](https://raw.githubusercontent.com/asmashahzadi764-alt/javascript-learning-/main/javascript-variables-practice/Preview.png)

---

## 📁 Project Structure

```
variable-practice/
│
├── index.html       # Opens the page; links to script.js
└── script.js        # All variable practice code
```

---

## 🧠 Concepts Covered

### 1. `var` — Function Scoped
```js
var studentname = "Asma Shahzadi";
console.log(studentname); // Output: Asma Shahzadi
```
- Oldest way to declare variables
- Function-scoped (not block-scoped)
- Can be re-declared and updated

---

### 2. `let` — Block Scoped
```js
let age = 18;
console.log(age); // Output: 18
```
- Introduced in ES6
- Block-scoped (only accessible within `{}`)
- Can be updated but **not** re-declared in the same scope

---

### 3. `const` — Constant Value
```js
const university = "Women University Multan";
console.log(university); // Output: Women University Multan
```
- Also block-scoped
- Value **cannot** be reassigned after declaration
- Must be initialized at the time of declaration

---

### 4. Scope Practice
```js
let city = "Multan";
function showcity() {
    let area = "Katchery";
    console.log(city);   // ✅ Accessible (global)
    console.log(area);   // ✅ Accessible (local)
}
showcity();
```
- `city` is a **global variable** — accessible anywhere
- `area` is a **local variable** — only accessible inside `showcity()`

---

### 5. Hoisting with `var`
```js
console.log(a); // Output: undefined (not an error!)
var a = 10;
```
- `var` declarations are **hoisted** to the top of their scope
- But the **value** is not hoisted — so it prints `undefined`

---

### 6. Hoisting with `let` (Temporal Dead Zone)
```js
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
```
- `let` is also hoisted, but stays in the **Temporal Dead Zone (TDZ)**
- Accessing it before declaration throws a **ReferenceError**

---

## 🚀 How to Run

1. Clone or download this repository
2. Open `index.html` in any browser
3. Press `F12` → go to the **Console** tab
4. See all outputs printed there

---

## 📌 Key Takeaways

| Keyword | Scope    | Hoisting       | Re-declare | Re-assign |
|---------|----------|----------------|------------|-----------|
| `var`   | Function | Yes (undefined)| ✅ Yes     | ✅ Yes    |
| `let`   | Block    | TDZ (error)    | ❌ No      | ✅ Yes    |
| `const` | Block    | TDZ (error)    | ❌ No      | ❌ No     |

---

## 👩‍💻 Author

**Asma Shahzadi**  
Student — Women University Multan  
JavaScript Basics Practice Project

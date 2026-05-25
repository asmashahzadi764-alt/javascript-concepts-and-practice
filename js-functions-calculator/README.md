# 🧮 JavaScript Calculator Functions Practice

A beginner JavaScript project implementing basic arithmetic operations using both normal functions and arrow functions.

---

## 📁 Project Structure

```
js-functions-calculator/
│
├── index.html       # Opens the page; links to script.js
└── script.js        # All calculator function code
```

---

## 🧠 Concepts Covered

### 1. Add — Normal Function
```js
function Add(a, b) {
    return a + b;
}
console.log("Add:", Add(10, 5)); // Output: Add: 15
```

---

### 2. Subtract — Arrow Function
```js
const Subtract = (a, b) => {
    return a - b;
}
console.log("Subtract:", Subtract(10, 5)); // Output: Subtract: 5
```

---

### 3. Multiply — Normal Function
```js
function Multiply(a, b) {
    return a * b;
}
console.log("Multiply:", Multiply(10, 5)); // Output: Multiply: 50
```

---

### 4. Divide — Arrow Function
```js
const Divide = (a, b) => {
    return a / b;
}
console.log("Divide:", Divide(10, 5)); // Output: Divide: 2
```

---

## 🖥️ Console Output

```
Add:       15
Subtract:  5
Multiply:  50
Divide:    2
```

---

## 🚀 How to Run

1. Clone or download this repository
2. Open `index.html` in any browser
3. Press `F12` → go to the **Console** tab
4. See all outputs printed there

---

## 📌 Key Takeaways

| Operation  | Function Type   | Syntax Used              |
|------------|-----------------|--------------------------|
| Add        | Normal Function | `function Add(a, b) {}`  |
| Subtract   | Arrow Function  | `const Subtract = (a,b) => {}` |
| Multiply   | Normal Function | `function Multiply(a, b) {}` |
| Divide     | Arrow Function  | `const Divide = (a,b) => {}` |

- Normal functions and arrow functions can be used **interchangeably** for simple operations
- Both styles use `return` to send back the result

---

## 👩‍💻 Author

**Asma Shahzadi**  
Student — Women University Multan  
JavaScript Basics Practice Project

# ⚙️ JavaScript Functions Practice

A beginner-friendly JavaScript concepts covering all essential types of functions — from basic declarations to arrow functions and default parameters.

---

## 📁 Project Structure

```
functions-practice/
│
├── index.html       # Opens the page; links to script.js
└── script.js        # All function practice code
```

---

## 🧠 Concepts Covered

### 1. Normal Function
```js
function Welcome() {
    console.log("Welcome Asma");
}
Welcome();
// Output: Welcome Asma
```
- Basic function declaration
- Called by using the function name followed by `()`

---

### 2. Function with Parameters
```js
function greet(username) {
    console.log("Hello " + username);
}
greet("Asma");   // Output: Hello Asma
greet("Iqra");   // Output: Hello Iqra
greet("Ahmad");  // Output: Hello Ahmad
```
- Parameters let you pass different values each time
- Same function, different outputs

---

### 3. Function Returning a Value
```js
function add(a, b) {
    return a + b;
}
const result = add(5, 3);
console.log(result); // Output: 8
```
- `return` sends a value back to where the function was called
- Result can be stored in a variable

---

### 4. Anonymous Function
```js
const message = function() {
    console.log("This message is Anonymous Function");
}
message();
// Output: This message is Anonymous Function
```
- A function **without a name**, stored in a variable
- Called using the variable name

---

### 5. Arrow Function
```js
const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(4, 5)); // Output: 20
```
- Shorter syntax introduced in ES6
- Uses `=>` instead of the `function` keyword

---

### 6. Short Arrow Function (Implicit Return)
```js
const square = number => number * number;
console.log(square(6)); // Output: 36
```
- When there's only **one parameter** — no parentheses needed
- When there's only **one expression** — no `{}` or `return` needed

---

### 7. Default Parameters
```js
function sayHi(name = "Guest") {
    console.log("Hi " + name);
}
sayHi();        // Output: Hi Guest
sayHi("Asma"); // Output: Hi Asma
```
- If no argument is passed, the **default value** is used
- Prevents `undefined` when a parameter is missing

---

## 🚀 How to Run

1. Clone or download this repository
2. Open `index.html` in any browser
3. Press `F12` → go to the **Console** tab
4. See all outputs printed there

---

## 📌 Key Takeaways

| Type | Syntax Style | Has Name | Returns Value |
|------|-------------|----------|---------------|
| Normal Function | `function name() {}` | ✅ Yes | Optional |
| Parameterized | `function name(param) {}` | ✅ Yes | Optional |
| Return Function | `return value` inside function | ✅ Yes | ✅ Yes |
| Anonymous | `const x = function() {}` | ❌ No | Optional |
| Arrow Function | `const x = () => {}` | ❌ No | Optional |
| Short Arrow | `const x = param => expr` | ❌ No | ✅ Implicit |
| Default Params | `function name(p = "default")` | ✅ Yes | Optional |

---

## 👩‍💻 Author

**Asma Shahzadi**  
Student — Women University Multan  
JavaScript Basics Functions Practice

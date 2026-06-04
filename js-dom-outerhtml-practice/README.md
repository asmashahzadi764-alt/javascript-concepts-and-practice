# 🔄 JavaScript DOM Practice — Replace Element (outerHTML)

A beginner JavaScript project demonstrating how to completely replace an HTML element using `outerHTML` property.

---

## 📁 Project Structure

```
js-dom-outerhtml/
│
├── index.html       # Heading + Replace button
└── script.js        # DOM selection and outerHTML replacement logic
```

---

## 🧠 Concepts Covered

### 1. Selecting Elements
```js
const heading   = document.querySelector("#heading");
const changeBtn = document.querySelector("#changeBtn");
```

---

### 2. Replacing Element — `outerHTML`
```js
changeBtn.addEventListener("click", () => {
    heading.outerHTML = "<h2 id='heading'>Element Replaced Successfully</h2>";
});
```
- `outerHTML` replaces the **entire element** — including the tag itself
- The original `<h1>` is completely swapped out with a new `<h2>`
- New element gets the same `id="heading"` so it can still be referenced

---

## 🖥️ How It Works

| State | Element on Page |
|-------|----------------|
| Before click | `<h1 id="heading">Welcome</h1>` |
| After click | `<h2 id="heading">Element Replaced Successfully</h2>` |

---

## 🔍 outerHTML vs innerHTML

| Property | What It Replaces |
|----------|-----------------|
| `innerHTML` | Only the **content inside** the element |
| `outerHTML` | The **entire element** including its own tag |

```js
// innerHTML — only changes content, tag stays <h1>
heading.innerHTML = "New Text";

// outerHTML — replaces the whole element, tag changes to <h2>
heading.outerHTML = "<h2>New Text</h2>";
```

---

## 🚀 How to Run

1. Clone or download this repository
2. Open `index.html` in any browser
3. Click **Replace Element** button
4. Watch the `<h1>` get fully replaced by an `<h2>`

---

## 📌 Key Takeaways

- `outerHTML` replaces the full element, not just its content
- Useful when you need to change the **tag type** itself
- After replacement, the original variable (`heading`) no longer points to a live DOM element — re-select if needed

---

## 👩‍💻 Author

**Asma Shahzadi**  
Student — Women University Multan  
JavaScript DOM Practice Project

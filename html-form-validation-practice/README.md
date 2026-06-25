# ✅ HTML Form Practice — Input Validation

A beginner HTML project demonstrating built-in form validation using attributes like `required`, `minlength`, `maxlength`, `min`, `max`, and `pattern` — no JavaScript needed.

---

## 📁 Project Structure

```
html-form-validation/
│
└── index.html       # Student registration form with validation
```

---

## 🧠 Concepts Covered

### 1. Text Input — Length Validation
```html
<input type="text" required minlength="3" maxlength="20">
```
- `required` — field cannot be left empty
- `minlength="3"` — minimum 3 characters required
- `maxlength="20"` — cannot type more than 20 characters

---

### 2. Number Input — Range Validation
```html
<input type="number" min="18" max="60">
```
- `min="18"` — value cannot be less than 18
- `max="60"` — value cannot be more than 60
- Browser shows error if number is out of range on submit

---

### 3. Phone Input — Pattern Validation
```html
<input type="tel" pattern="[0-9]{11}" required>
```
- `type="tel"` — numeric keyboard on mobile devices
- `pattern="[0-9]{11}"` — accepts exactly 11 digits (regex pattern)
- `required` — cannot be left empty

---

## 🖼️ Preview

![Student Registration Form](https://raw.githubusercontent.com/asmashahzadi764-alt/javascript-learning-/main/html-form-validation-practice/Preview.png)

---

## 🖥️ How It Works

| Field | Rule | Error Shown When |
|-------|------|-----------------|
| Name | required, 3–20 chars | Empty or too short/long |
| Age | 18–60 range | Number outside range |
| Phone | exactly 11 digits | Pattern doesn't match |

---

## 🚀 How to Run

1. Clone or download this repository
2. Open `index.html` in any browser
3. Try submitting the form with invalid data
4. See browser's built-in validation errors appear

---

## 📌 Key Takeaways

| Attribute | Input Type | Purpose |
|-----------|-----------|---------|
| `required` | Any | Field must not be empty |
| `minlength` | text | Minimum character count |
| `maxlength` | text | Maximum character count |
| `min` | number | Minimum numeric value |
| `max` | number | Maximum numeric value |
| `pattern` | tel, text | Regex pattern to match |

- All validation here is **HTML-only** — zero JavaScript needed
- `pattern` attribute uses **regular expressions** for custom rules
- `[0-9]{11}` means: exactly 11 digits from 0–9

---

## 👩‍💻 Author

**Asma Shahzadi**  
Student — Women University Multan  
HTML Forms Practice Project

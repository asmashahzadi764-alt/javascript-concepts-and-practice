# 📋 HTML Form Practice — Radio, Checkbox & File Input

A beginner HTML project demonstrating advanced form input types — radio buttons, checkboxes, and file upload.

---

## 📁 Project Structure

```
html-form-radio-checkbox-file/
│
└── index.html       # Student registration form with multiple input types
```

---

## 🖼️ Preview

![Student Registration Form](https://raw.githubusercontent.com/asmashahzadi764-alt/javascript-learning-/main/html-radio-checkbox-file-practice/preview.png)

---

## 🧠 Concepts Covered

### 1. Radio Buttons — Single Choice
```html
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
```
- `type="radio"` — user can select **only one** option
- Same `name="gender"` on both inputs groups them together
- `value` is what gets submitted with the form

---

### 2. Checkboxes — Multiple Choice
```html
<input type="checkbox" name="skills" value="html"> HTML
<input type="checkbox" name="skills" value="css"> CSS
<input type="checkbox" name="skills" value="javascript"> JavaScript
```
- `type="checkbox"` — user can select **one or more** options
- Same `name="skills"` groups them as a set
- Each checked box submits its own `value` independently

---

### 3. File Upload
```html
<input type="file" accept=".pdf">
```
- `type="file"` — opens the system file picker
- `accept=".pdf"` — restricts selection to PDF files only

---

### 4. Submit Button
```html
<input type="submit">
```
- Submits all selected form data

---

## 🖥️ How It Works

| Input | Behavior |
|-------|----------|
| **Radio (Gender)** | Only one can be selected at a time |
| **Checkbox (Skills)** | Multiple can be selected simultaneously |
| **File Upload** | Opens file picker, accepts PDF only |
| **Submit** | Sends all selected data |

---

## 🔍 Radio vs Checkbox

| Property | Radio | Checkbox |
|----------|-------|----------|
| Selection | One only | One or more |
| Use case | Gender, category | Skills, interests |
| Grouping | Same `name` | Same `name` |

---

## 🚀 How to Run

1. Clone or download this repository
2. Open `index.html` in any browser
3. Select a gender, check some skills, upload a PDF
4. Click **Submit** to see the form in action

---

## 📌 Key Takeaways

- `type="radio"` with same `name` — ensures single selection
- `type="checkbox"` with same `name` — allows multiple selections
- `type="file"` with `accept=".pdf"` — restricts file type at picker level
- `<hr>` tag used to visually separate form sections

---

## 👩‍💻 Author

**Asma Shahzadi**  
Student — Women University Multan  
HTML Forms Practice Project

# 📋 HTML Form Practice — Radio, Checkbox & File Input

A beginner HTML project demonstrating advanced form input types — radio buttons, checkboxes, and file upload — with properly linked `<label>` elements for accessibility.

---

## 📁 Project Structure

```
html-radio-checkbox-file-practice/
│
└── index.html       # Student registration form with multiple input types
```

---

## 🧠 Concepts Covered

### 1. Radio Buttons — Single Choice

```html
<input type="radio" id="male-option" name="gender" value="male">
<label for="male-option">Male</label>

<input type="radio" id="female-option" name="gender" value="female">
<label for="female-option">Female</label>
```

- `type="radio"` — user can select **only one** option
- Same `name="gender"` on both inputs groups them together
- Each input has a unique `id`, connected to its `<label>` via `for` — clicking the label also selects the input
- `value` is what gets submitted with the form

---

### 2. Checkboxes — Multiple Choice

```html
<input type="checkbox" id="html-skill" name="skills" value="html">
<label for="html-skill">HTML</label>

<input type="checkbox" id="css-skill" name="skills" value="css">
<label for="css-skill">CSS</label>

<input type="checkbox" id="javascript-skill" name="skills" value="javascript">
<label for="javascript-skill">JavaScript</label>
```

- `type="checkbox"` — user can select **one or more** options
- Same `name="skills"` groups them as a set
- Each checked box submits its own `value` independently
- `id` + `for` pairing again makes each label clickable

---

### 3. File Upload

```html
<label for="cv-upload">Choose PDF File:</label>
<input type="file" id="cv-upload" accept=".pdf">
```

- `type="file"` — opens the system file picker
- `accept=".pdf"` — restricts selection to PDF files only
- A `<label>` describes the field ("Choose PDF File:") since file inputs don't show placeholder text

---

### 4. Submit Button

```html
<input type="submit" value="Submit">
```

- Submits all selected form data
- `value="Submit"` sets the button's visible text

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
- Pairing every input's `id` with a `<label for="">` improves accessibility and lets users click the label text to activate the input
- `<hr>` tag used to visually separate form sections

---

## 👩‍💻 Author

**Asma Shahzadi**

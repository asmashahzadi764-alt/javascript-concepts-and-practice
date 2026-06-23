# 📋 HTML Form Practice — Student Registration Form

A beginner HTML project demonstrating how to build a basic form with text input, email input, submit, and reset buttons.

---

## 📁 Project Structure

```
html-form-student-registration/
│
└── index.html       # Student registration form
```

---

## 🧠 Concepts Covered

### 1. Form Tag
```html
<form action="" method="GET">
```
- `action=""` — data submits to the same page
- `method="GET"` — form data appears in the URL as query parameters

---

### 2. Text Input
```html
<label for="name">Name:</label>
<input id="name" type="text" name="student_name">
```
- `label for` links the label to the input via matching `id`
- `name="student_name"` — the key used in the submitted URL

---

### 3. Email Input
```html
<label for="email">Email:</label>
<input id="email" type="email" name="email">
```
- `type="email"` — browser automatically validates email format
- Shows error if user types an invalid email before submitting

---

### 4. Submit & Reset Buttons
```html
<input type="submit">
<input type="reset">
```
- `submit` — sends the form data
- `reset` — clears all fields back to default

---

## 🖥️ How It Works

| Action | Result |
|--------|--------|
| Fill Name + Email → Click **Submit** | Page reloads with data in URL: `?student_name=Asma&email=asma@gmail.com` |
| Click **Reset** | All input fields are cleared |
| Invalid email → Click **Submit** | Browser shows built-in email validation error |

---

## 🚀 How to Run

1. Clone or download this repository
2. Open `index.html` in any browser
3. Fill in the Name and Email fields
4. Click **Submit** and observe the URL change
5. Click **Reset** to clear the form

---

## 📌 Key Takeaways

- `<form method="GET">` — data visible in URL (good for search/filter forms)
- `<form method="POST">` — data hidden in request body (used for login/signup)
- `<label for="id">` — links label to input for better accessibility
- `type="email"` — free built-in validation, no JavaScript needed
- `type="reset"` — clears form without any JavaScript

---

## 👩‍💻 Author

**Asma Shahzadi**  
Student — Women University Multan  

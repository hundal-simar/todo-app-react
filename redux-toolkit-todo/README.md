# 📝 Todo App (Redux Toolkit)

This is a Todo application built using **Redux Toolkit** for state management. It demonstrates a scalable and structured approach to handling application state.

---

## 🚀 Features

* ➕ Add new todos
* ✏️ Edit existing todos
* ❌ Delete todos
* 💾 Persistent storage using Local Storage

---

## 🛠️ Tech Stack

* React (Functional Components + Hooks)
* Redux Toolkit
* React-Redux
* JavaScript (ES6+)
* Tailwind CSS

---

## 🧠 How It Works

* State is managed in a centralized **store**
* Slices are created using `createSlice()`
* Actions are dispatched using `dispatch()`
* Components access state using `useSelector`
* State changes handled via reducers

---

## 📂 Project Structure

```id="rdx001"
src/
│── app/store.js
│── features/todoSlice.js
│── components
│── App.jsx
│── main.jsx
```

---

## ⚙️ Installation & Setup

```bash id="rdx002"
npm install
npm run dev
```

---

## 💡 When to Use Redux

* Medium to large-scale applications
* Complex state logic
* When multiple components need shared state

---

## 🙌 Learning Outcome

This project helped in understanding:

* Centralized state management
* Redux Toolkit workflow
* Scalable project architecture

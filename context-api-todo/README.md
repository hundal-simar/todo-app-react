# 📝 Todo App (Context API)

This is a Todo application built using **React Context API** for state management. It demonstrates how to manage global state without external libraries like Redux.

---

## 🚀 Features

* ➕ Add new todos
* ✏️ Edit existing todos
* ❌ Delete todos
* ✅ Mark tasks as completed
* 💾 Persistent storage using Local Storage

---

## 🛠️ Tech Stack

* React (Functional Components + Hooks)
* Context API (State Management)
* JavaScript (ES6+)
* Tailwind CSS

---

## 🧠 How It Works

* A global context is created using `createContext()`
* State is managed using `useState` or `useReducer`
* Components access data using `useContext`
* Eliminates prop drilling by sharing state globally

---

## 📂 Project Structure

```id="ctx001"
src/
│── contexts/
│── components/
│── App.jsx
│── main.jsx
```

---

## ⚙️ Installation & Setup

```bash id="ctx002"
npm install
npm run dev
```

---

## 💡 When to Use Context API

* Small to medium-sized applications
* When state sharing is simple
* When you want to avoid extra libraries

---

## 🙌 Learning Outcome

This project helped in understanding:

* Global state management in React
* Avoiding prop drilling
* Clean component structure

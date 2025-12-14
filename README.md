# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# MacBook Landing Page 💻

A modern and responsive product landing page built using **React**.  
This project focuses on clean UI design, basic animations, and simple global state management using **Zustand**.

---

## ✨ What This Project Does
- Displays a clean product-style landing page
- Uses reusable React components
- Manages shared UI state using Zustand
- Includes basic animations and smooth interactions
- Works well across desktop and mobile screens

---

## 🛠 Tech Stack

- **React**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Zustand** (for state management)
- **Vite**

---

## 🧠 Why I Used Zustand

In this project, Zustand is used to manage shared UI state across components.  
It helps avoid prop drilling and keeps the state logic simple and easy to understand.

This project uses Zustand only for basic state needs, making it lightweight and beginner-friendly.

---

## ▶️ How to Run This Project Locally

```bash
git clone https://github.com/Yuvrajsinghko/mac-book-landing.git
cd mac-book-landing
npm install
npm install zustand
npm run dev

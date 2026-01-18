<p align="center">
  <img src="https://raw.githubusercontent.com/adrianhajdin/gsap_macbook_landing/main/public/preview.png" alt="Project Preview" width="800">
</p>

<h1 align="center">GSAP MacBook Landing Page</h1>

<p align="center">
  <a href="https://github.com/Yuvrajsinghko/Mac-Book-Landing/stargazers">
    ⭐ <b>Star this project</b>
  </a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="https://mac-book-landing.vercel.app">
    🚀 <b>Live Demo</b>
  </a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#features">
    📌 <b>Features</b>
  </a>
</p>

---

## 🔥 About The Project

**GSAP MacBook Landing Page** is a high-fidelity, Apple-style product landing experience built using **React**, **Three.js**, **GSAP**, and **Tailwind CSS**.

The project focuses on creating a cinematic scrolling experience with a realistic 3D MacBook model, smooth transitions, and scroll-triggered animations — replicating modern premium product websites.

This project demonstrates advanced frontend skills including:

* Scroll-based animation storytelling
* 3D rendering in the browser
* Performance-optimized UI interactions

---

## 🧠 Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js&logoColor=white" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Zustand-000000?style=flat&logo=zustand&logoColor=white" />
</p>

---

## ✨ Features

* 🎮 **Realistic 3D MacBook Model** rendered with Three.js
* 📜 **Scroll-Triggered Animations** using GSAP ScrollTrigger
* 📌 **Pinned Sections & Mask Effects** for immersive storytelling
* 🌀 **Smooth Timeline Transitions** across sections
* 📱 **Fully Responsive Design** for all devices

---

## 🚀 Live Preview

👉 **Live Demo:** [https://mac-book-landing.vercel.app](https://mac-book-landing.vercel.app)

---

## 🛠️ Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/Yuvrajsinghko/Mac-Book-Landing.git
cd Mac-Book-Landing
npm install
npm run dev
```

Open your browser at:

```
http://localhost:5173
```

---

## 📁 Project Structure

```
📦 public
 ┣ 📂 models        # 3D GLTF assets
 ┣ 📂 videos        # Scroll-based video assets
 ┗ 📂 images

📦 src
 ┣ 📂 components    # UI & animation components
 ┣ 📂 three         # Three.js helpers (lights, camera, scene)
 ┣ 📂 store         # Zustand global state
 ┣ 📂 constants     # Static data & configurations
 ┣ 📜 App.jsx
 ┗ 📜 main.jsx
```

---

## 🧪 Animation Flow

Animations are powered by **GSAP timelines** combined with **ScrollTrigger**:

* **Hero Reveal** – Intro text and mask animation
* **Scroll-Synced 3D Rotation** – MacBook reacts to scroll position
* **Pinned Sections** – Long scroll storytelling
* **Smooth Transitions** – Fade, scale, and transform effects

This structure allows easy extension and fine-grained animation control.

---

## 🎯 Customization Guide

* 🎨 **Change the 3D Model**
  Replace the GLTF file inside `public/models` and update the loader.

* 🧱 **Add New Sections**
  Create new GSAP timelines and attach ScrollTriggers.

* 📱 **Responsive Tweaks**
  Use Tailwind breakpoints or conditional animation logic.

---

## 💡 Key Learnings

* Integrated **Three.js with React** efficiently
* Built **cinematic scroll animations** using GSAP
* Structured large animation-heavy projects
* Managed global state using **Zustand**
* Improved UI performance using **Vite + Tailwind CSS**

---

## 🙌 Acknowledgements

Inspired by Apple-style product pages and modern interactive web design.
Built as a learning project to explore advanced frontend animation techniques.

If you like this project, consider giving it a ⭐!

---

<sub>Built with ❤️ using React, GSAP, Three.js & Tailwind CSS</sub>

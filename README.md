# Mumukshu D.C. | Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-2ea44f?style=for-the-badge&logo=github)](https://scuba3198.github.io/mumukshu-portfolio/)

> **PTE Instructor & EdTech Developer** specializing in English proficiency coaching and modern web development.

This portfolio showcases my professional journey, featured projects, and technical skills. It has been reimagined as a modern **React application**, moving away from static HTML to a scalable component-based architecture.

## 🚀 Features

- **Modern Stack**: Built with React 18, Vite, and Tailwind CSS v3.
- **Componentized Design**: Modular structure with reusable components (`ProjectCard`, `Experience`, `Stats`, etc.).
- **Dynamic Content**: Data-driven UI where all portfolio content is managed via a single `src/data/portfolio.js` file.
- **Responsive Layout**: Fully responsive Bento-grid design inspired by modern aesthetics.
- **Performance Optimized**: Lazy loading (where applicable) and optimized build size using Vite.

## 🛠️ Tech Stack

- **Core**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI components
│   ├── Layout.jsx    # Main page wrapper
│   ├── Profile.jsx   # Hero/Profile section
│   ├── Experience.jsx # Work history list
│   └── ...           # Other sections (Skills, Education, etc.)
├── data/
│   └── portfolio.js  # 📝 EDIT THIS FILE to update your resume content
├── App.jsx           # Main application entry
└── main.jsx          # React DOM root
```

## 📦 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/scuba3198/mumukshu-portfolio.git
    cd mumukshu-portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Locally**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 🎨 Design Philosophy

The design uses a **Bento-grid** layout, popular in modern UI/UX for its clean organization and visual hierarchy. It combines a sophisticated font pairing (**Inter** for UI text and **Playfair Display** for headers) with a neutral stone color palette accented by yellow and purple for featured elements.

---

© 2025 Mumukshu D.C. All rights reserved.

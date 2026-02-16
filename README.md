# Mumukshu D.C. | Portfolio

![React](https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Biome](https://img.shields.io/badge/-Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-2ea44f?style=for-the-badge&logo=github)](https://scuba3198.github.io/mumukshu-portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **PTE Instructor & EdTech Developer** specializing in English proficiency coaching and modern web development.

This portfolio showcases my professional journey, featured projects, and technical skills. It has been reimagined as a modern **React & TypeScript application**, moving away from static HTML to a scalable component-based architecture.

## 🚀 Features

- **Modern Stack**: Built with React 19, TypeScript, Vite, and Tailwind CSS v3.
- **Strict Linting & Formatting**: Powered by [Biome](https://biomejs.dev/) for high-performance code quality checks.
- **Strict Type Safety**: Extended with `@tsconfig/strictest` to ensure maximum robustness.
- **Componentized Design**: Modular structure with reusable components (`ProjectCard`, `Experience`, `Stats`, etc.).
- **Strict Data Control**: TypeScript-driven UI where all portfolio content is strictly typed via `src/types/portfolio.ts` and managed in `src/data/portfolio.ts`.
- **Responsive Layout**: Fully responsive Bento-grid design inspired by modern aesthetics.
- **Accessibility**: Built with accessibility in mind (WCAG 4.1.2 compliant).

## 🛠️ Tech Stack

- **Core**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (`@tsconfig/strictest`)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Linting & Formatting**: [Biome](https://biomejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI components (.tsx)
│   ├── Layout.tsx    # Main page wrapper
│   ├── Profile.tsx   # Hero/Profile section
│   ├── Experience.tsx # Work history list
│   └── ...           # Other sections (Skills, Education, etc.)
├── data/
│   └── portfolio.ts  # 📝 EDIT THIS FILE to update your resume content
├── types/
│   └── portfolio.ts  # Type definitions and interfaces
├── App.tsx           # Main application entry
└── main.tsx          # React DOM root
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

4.  **Lint & Format**
    ```bash
    npm run lint      # Runs Biome check
    npm run format    # Runs Biome format --write
    ```

5.  **Build for Production**
    ```bash
    npm run build     # Runs type-check (tsc) then vite build
    ```

## 🎨 Design Philosophy

The design uses a **Bento-grid** layout, popular in modern UI/UX for its clean organization and visual hierarchy. It combines a sophisticated font pairing (**Inter** for UI text and **Playfair Display** for headers) with a neutral stone color palette accented by yellow and purple for featured elements.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

© 2025 Mumukshu D.C. All rights reserved.

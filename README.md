# Mumukshu D.C. | Portfolio

![React](https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Oxlint](https://img.shields.io/badge/-Oxlint-red?style=for-the-badge&logo=oxlint&logoColor=white)
![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-2ea44f?style=for-the-badge&logo=github)](https://scuba3198.github.io/mumukshu-portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **PTE Instructor & EdTech Developer** specializing in English proficiency coaching and modern web development.

This portfolio showcases my professional journey, featured projects, and technical skills. It has been reimagined as a modern **React & TypeScript application**, moving away from static HTML to a scalable component-based architecture.

## 🚀 Features

- **Premium UI/UX**: Reimagined with a state-of-the-art "Premium Deep Dark" aesthetic and high-end glassmorphism.
- **Dual Theme Support**: Native Light/Dark mode switcher with automatic system preference detection and zero-flash initialization.
- **Ambient Lighting**: CSS-animated background glowing orbs that react to the current theme.
- **Micro-interactions**: Refined hover states, rotating icons, dynamic link translations, and pulsing glowing indicators for current roles.
- **Modern Stack**: Built with React 19, TypeScript, Vite, and Tailwind CSS v3.
- **Strict Linting & Formatting**: Powered by [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) for ultra-fast linting and [Prettier](https://prettier.io/) for high-performance formatting.
- **Strict Type Safety**: Extended with `@tsconfig/strictest` for maximum compile-time safety and data integrity.
- **Dependency Boundaries**: Enforced via **dependency-cruiser** to prevent circular dependencies and maintain clean architecture.
- **Componentized Design**: Modular structure with reusable components (`ProjectCard`, `Experience`, `Stats`, etc.).
- **Responsive Layout**: Fully responsive Bento-grid design inspired by premium tech portfolios.

## 🛠️ Tech Stack

- **Core**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (`@tsconfig/strictest`)
- **Validation**: [Zod](https://zod.dev/) (Build-time schema definitions)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom Premium Theme)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Linting & Formatting**: [Oxlint](https://oxc.rs/) + [Prettier](https://prettier.io/)
- **Architecture**: [Dependency-Cruiser](https://github.com/sverweij/dependency-cruiser)

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI components (.tsx)
│   ├── Layout.tsx    # Main page wrapper with ambient effects
│   └── ...           # Other redesigned bento-grid components
├── data/
│   └── portfolio.ts  # 📝 Validated portfolio content
├── schemas/
│   └── portfolio.ts  # Zod schemas for runtime validation
├── utils/
│   └── logger.ts     # Centralized lightweight logger wrapper
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
    npm run lint      # Runs Oxlint check
    npm run format    # Runs Prettier formatting
    npm run depcruise # Checks for circular dependencies
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

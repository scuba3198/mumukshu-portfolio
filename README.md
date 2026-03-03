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

This portfolio showcases professional journey, featured projects, and technical skills through a **high-contrast minimalist aesthetic**.

## 🚀 Features

- **Brutalist Redesign**: Reimagined with a high-contrast black/white/orange aesthetic, inspired by modern minimal branding.
- **Typography-First Logic**: Focused on clear, bold communication and sophisticated font pairings.
- **Scrolling Marquee Ticker**: A slanted, high-energy infinite ticker at the bottom of the viewport featuring custom branding messages.
- **Tabbed Interaction**: A focused, tab-based navigation system (Home, Experience, Projects, Education) for a zero-distraction user journey.
- **Mobile-First Excellence**: Precision-tuned layout, typography, and animation speeds for small screens.
- **Modern Stack**: Built with React 19, TypeScript, Vite, and Tailwind CSS v3.
- **Strict Data Integrity**: Portfolio content is validated via **Zod** schemas for bulletproof reliability.
- **Clean Architecture**: Dependency boundaries enforced via **dependency-cruiser** to prevent circular references.

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

The design shifts from a broad Bento-grid to a **focused High-Contrast Minimalism**. It leverages a brutalist-inspired orange-on-black color palette to create strong visual hierarchy. The inclusion of a slanted scrolling marquee adds a dynamic branding element that breaks the traditional layout, creating a memorable "agency-grade" professional identity.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

© 2025 Mumukshu D.C. All rights reserved.

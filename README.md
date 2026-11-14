# Mumukshu D.C. | Portfolio

<div align="center">
  <img src="public/favicon.svg" width="96" alt="Portfolio Icon">
  
  # Mumukshu D.C. Portfolio
  *IELTS/PTE Instructor & Software Engineer*
  
  [![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-2ea44f?style=flat-square&logo=github)](https://scuba3198.github.io/mumukshu-portfolio/)
  [![GitHub License](https://img.shields.io/github/license/scuba3198/mumukshu-portfolio?style=flat-square)](LICENSE)

  ⭐ If you like this project, star it on GitHub!

  [Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Design System](#design-system)
</div>

A responsive, high-contrast minimalist portfolio showcasing professional journey, selected EdTech tools, automation scripts, and contributions. Rebuilt with a brutalist-inspired theme featuring typography-first design, interactive tabs, and fluid, responsive interfaces.

## Features

- **Brutalist Theme** - Reimagined with a premium high-contrast black/white/orange aesthetic.
- **Tabbed Interaction** - Zero-distraction navigation layout (Home, Experience, Programming, Resume).
- **Infinite Scrolling Marquee** - Slanted, high-energy scrolling ticker at the bottom.
- **Mobile-First Design** - Precision-tuned layouts and animations optimized for all device sizes.
- **Clean Stack** - Built using modern React 19, TypeScript (with strict compiler config), Vite, and Tailwind CSS.

## Tech Stack

- **Core Framework**: React 19 + TypeScript (strict mode)
- **Styling & Theme**: Tailwind CSS
- **Icons**: Lucide React
- **Build Engine**: Vite
- **Code Quality**: Oxlint + Prettier

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) (v18+) installed.

### Setup and Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/scuba3198/mumukshu-portfolio.git
   cd mumukshu-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/mumukshu-portfolio/](http://localhost:5173/mumukshu-portfolio/) to preview.

4. **Verify quality & formatting:**
   ```bash
   npm run lint      # Runs Oxlint
   npm run typecheck # Verifies TypeScript typings
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

> [!TIP]
   > The build process runs both TypeScript compilation (`tsc`) and Oxlint checks before outputting assets to verify type safety and prevent deployment errors.

## Project Structure

```text
src/
├── components/       # UI Components (Navbar, Experience, Programming, Home, Marquee)
├── data/             # Portfolio source data (portfolio.ts)
├── types/            # TypeScript type definitions (portfolio.ts)
├── App.tsx           # Application entrypoint
└── main.tsx          # Render entrypoint
```

## Design System

The layout is built around high-contrast typography and minimalist spacing. It uses a strong visual hierarchy defined by custom HSL Hues and custom animations:
- **Primary Color:** Orange (`#f97316`) on a dark background.
- **Typography:** Outfit & Inter (loaded via web fonts).
- **Effects:** Heavy grid outlines, slashes, and screen shakes for interaction feedback.

---

© 2026 Mumukshu D.C.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (runs on http://localhost:5173)
npm run dev

# Run TypeScript type-check
npm run typecheck

# Build for production (includes type-check)
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## Architecture Overview

This is a **React + TypeScript portfolio application** built with Vite, using a **data-driven architecture** where all content is centralized in a single configuration file.

### Type System

Core data structures are defined in `src/types/portfolio.ts`. All components and the data file import from these interfaces to ensure consistency.

### Key Design Pattern: Single Source of Truth

All portfolio content is defined in `src/data/portfolio.ts`. Components are purely presentational and receive data as props. To update resume content, edit `portfolio.ts`—no component changes needed.

### Bento Grid Layout

The app uses a CSS Grid-based Bento layout defined in `Layout.tsx`:
- Main container: `grid-cols-1 md:grid-cols-4` (4 columns on desktop)
- Components span varying column widths using `md:col-span-X` classes
- Responsive: single column on mobile, 4-column grid on desktop

### Component Architecture

**Layout Components:**
- `Layout.tsx` - Main wrapper with grid container, centers content with max-width
- Individual section components (`Profile`, `Experience`, `Stats`, `Skills`, `Education`, `Interests`) - Presentational, receive typed props

**ProjectCard Component:**
Key features:
- Dynamic icon mapping via `icons` object (Record<IconName, LucideIcon>)
- Theme-based styling: each project has a `theme` object with Tailwind classes
- Special handling for array-based tag colors (multi-color tags)
- Overlay link pattern for entire card clickability

### Data Structure

Defined in `src/types/portfolio.ts` and implemented in `portfolio.ts`:
```typescript
{
  id: string,
  title: string,
  description: string,
  tags: string[],
  link: string,
  isFeatured: boolean,
  iconName: IconName,
  category?: string,
  theme: {
    bg: string,
    text: string,
    border: string,
    hoverBorder: string,
    accent: string,
    tagBg: string,
    tagText: string | string[]
  }
}
```

### Adding New Icons

1. Import icon from `lucide-react` in `ProjectCard.tsx`
2. Add to `icons` mapping object
3. Add icon name to `IconName` type in `src/types/portfolio.ts`
4. Set `iconName` in project data

### Deployment Configuration

- Vite `base` path: `/mumukshu-portfolio/`
- Homepage: `https://scuba3198.github.io/mumukshu-portfolio/`

### Styling System

- **Fonts**: Inter (sans-serif), Playfair Display (serif)
- **Color Palette**: Stone/neutral base with yellow/purple accents
- All styling uses Tailwind utility classes and custom classes in `index.css`

### Important Notes

- React 19 + TypeScript (Strict Mode)
- `tsc --noEmit` used for type checking
- No state management—static content only
- Components are functionally stateless

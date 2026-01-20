# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## Architecture Overview

This is a **React portfolio application** built with Vite, using a **data-driven architecture** where all content is centralized in a single configuration file.

### Key Design Pattern: Single Source of Truth

All portfolio content (profile info, projects, experience, skills, education, stats, interests) is defined in `src/data/portfolio.js`. Components are purely presentational and receive data as props. To update resume content, edit `portfolio.js`—no component changes needed.

### Bento Grid Layout

The app uses a CSS Grid-based Bento layout defined in `Layout.jsx`:
- Main container: `grid-cols-1 md:grid-cols-4` (4 columns on desktop)
- Components span varying column widths using `md:col-span-X` classes
- Responsive: single column on mobile, 4-column grid on desktop

### Component Architecture

**Layout Components:**
- `Layout.jsx` - Main wrapper with grid container, centers content with max-width
- Individual section components (`Profile`, `Experience`, `Stats`, `Skills`, `Education`, `Interests`) - Presentational, receive data via props

**ProjectCard Component:**
The most complex component. Key features:
- Dynamic icon mapping via `icons` object (imports icons from lucide-react)
- Theme-based styling: each project has a `theme` object with Tailwind classes for colors, borders, hover states
- Special handling for array-based tag colors (see `theme.tagText` logic in GeoFlux project)
- Overlay link pattern for entire card clickability

### Data Structure

Projects in `portfolio.js` follow this schema:
```javascript
{
  id: string,           // Used for finding specific projects in App.jsx
  title: string,
  description: string,
  tags: string[],
  link: string,
  isFeatured: boolean,  // Shows "Featured Project" badge
  iconName: string,     // Must match keys in ProjectCard's icons object
  category: string,     // Optional - fallback to "Creative Sandbox"
  categoryBg: string,   // Optional - fallback to bg-purple-500
  theme: {
    bg: string,
    text: string,
    border: string,
    hoverBorder: string,
    accent: string,
    tagBg: string,
    tagText: string | string[]  // Can be array for multi-color tags
  }
}
```

### Adding New Icons

When adding projects with new icons:
1. Import icon from `lucide-react` in `ProjectCard.jsx`
2. Add to `icons` object with matching key name
3. Set `iconName` in project data

### Deployment Configuration

- Vite `base` path is set to `/mumukshu-portfolio/` for GitHub Pages deployment
- Homepage: `https://scuba3198.github.io/mumukshu-portfolio/`

### Styling System

- **Fonts**: Inter (sans-serif) for body, Playfair Display (serif) for headings
- **Color Palette**: Stone/neutral base with yellow/purple accents
- All styling uses Tailwind utility classes
- Custom classes defined in `tailwind.config.js`

### Important Notes

- React 19 with `@vitejs/plugin-react` plugin
- No state management library needed—static content only
- Components are functionally stateless
- When adding new sections: add data to `portfolio.js`, create component, import and render in `App.jsx`

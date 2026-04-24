# Project Rules (Trae)

## Commands to Run After Code Changes
- Install: `npm ci` (or `npm install` if needed)
- Dev: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`
- Preview: `npm run preview`

## Repository Conventions
- Stack: Vite + React (JSX) + Tailwind CSS
- Module system: ESM (`"type": "module"` in package.json)
- Prefer editing existing files; only create new files when necessary for the task.
- Avoid adding new dependencies unless strictly required; prefer existing utilities/patterns.

## Library Direction (High-Level)
- Keep a demo app in `src/` that consumes the library.
- Establish a reusable library boundary:
  - `src/lib/**` contains reusable framework/library code.
  - `src/screens/**` remains demo-only.
- Public API must be imported from a single entry:
  - `src/lib/index.js` (and later, package entrypoints).

## API Stability Rules
- Do not require deep imports (e.g. `src/lib/components/...`) for normal usage.
- Keep component props small and consistent:
  - common props: `className`, `children`
  - where relevant: `size`, `variant`, `density`
- Components should remain presentational (no app-specific data fetching).

## Styling Rules
- Use Tailwind classes consistent with existing UI (wireframe grayscale, borders).
- Keep visual defaults consistent across components (border radius, spacing, text sizes).
- Don’t introduce runtime theme complexity for MVP; tokens should be minimal and optional.

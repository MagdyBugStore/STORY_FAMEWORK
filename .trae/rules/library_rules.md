# Library Rules (Wireframe Framework)

## The 3 Pillars (Must-Have Exports)
1. Wireframe components: reusable UI primitives with consistent wireframe styling.
2. Mobile layout: primitives for consistent screen sizing, safe areas, scroll, nav/status slots.
3. Sections: grouping primitives that render title + a list/grid of screens.

## File/Folder Rules
- Reusable code lives in `src/lib/**`.
- Demo-only code lives in `src/screens/**` and demo pages in `src/App.jsx` (or equivalent).
- Public exports only:
  - `src/lib/index.js` re-exports everything intended for users.
- Avoid circular dependencies inside `src/lib/**`.

## Component Rules
- Components must be usable without app context (no assumptions about routing, auth, API).
- Components must accept `className` and merge it with defaults.
- Prefer controlled inputs where applicable.
- Keep defaults visually “wireframe”: neutral grays, borders, light backgrounds.

## Layout Rules (Mobile)
- Provide a single “container” component for screens (e.g. `Phone`/`MobileFrame`) with:
  - consistent sizing options
  - optional status bar + bottom nav slots
  - scroll behavior that matches existing screens

## Sections Rules
- `Section` must support: `title`, optional `subtitle/description`, and content.
- Screen listing must support: label, optional meta (e.g. id), and render function/child.

## Backwards Compatibility During Refactor
- Refactors should keep demo screens rendering the same output.
- If a component is moved, update imports immediately in demo screens.

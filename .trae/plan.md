# Wireframe Framework/Library – Execution Plan (MVP → v1)

## Goal
Turn the current Vite + React wireframe system into a reusable framework/library that anyone can install and use to build wireframes quickly, with 3 primary user-facing building blocks:

1. Wireframe components
2. Mobile layout
3. Sections (title + list/grid of screens)

## Non-goals (for MVP)
- No complex state management or app routing abstraction
- No external UI dependencies beyond what the repo already uses
- No full documentation site (examples live inside the demo app)

## Current Assumptions
- Codebase stays React + JSX (no forced migration to TypeScript)
- Styling stays Tailwind-based (existing conventions)
- Repo keeps a demo app that consumes the library code from the same repo

---

## Phase 0 — Baseline & Inventory
**Deliverables**
- Inventory list (internal) of existing primitives and how screens are assembled:
  - `src/components/ui/*`
  - `src/components/board/*`
  - `src/screens/**`
- Identify reusable units vs app-specific screens

**Acceptance**
- We can point to the “current building blocks” and how they compose a screen.

---

## Phase 1 — Public API Design (MVP)
**Deliverables**
- A stable public API surface for the 3 pillars (names and props):
  - Components: e.g. `Card`, `List`, `Button`, `Input`, `Placeholder`, etc.
  - Mobile layout: e.g. `Phone`, `Screen`, `StatusBar`, `BottomNav`, `SafeArea`
  - Sections: e.g. `Section`, `ScreenList`, `ScreenGrid`
- Define theming/tokens API (minimal):
  - spacing scale, radii, border styles, gray palette, typography scale

**Acceptance**
- You can build at least 1 complete flow using only exported APIs (no deep imports).

---

## Phase 2 — Repo Restructure (Library + Demo App)
**Deliverables**
- Create a library boundary inside `src/`:
  - `src/lib/` contains reusable exports only
  - demo app imports from `src/lib` rather than `src/components/**` directly
- Consolidate exports:
  - `src/lib/index.js` exports all public components

**Acceptance**
- Demo app runs with imports coming from a single public entry (`src/lib/index.js`).

---

## Phase 3 — Implement the 3 Pillars (MVP Quality)
### 3A) Wireframe Components
**Deliverables**
- Normalize component props (size/variant/density where applicable)
- Ensure consistent wireframe look across all components (borders, grays, spacing)

**Acceptance**
- Components can be mixed together without style mismatch.

### 3B) Mobile Layout
**Deliverables**
- A `MobileFrame`/`Phone` component that provides:
  - predictable width/height options
  - safe area and scroll primitives
  - optional status bar + bottom nav slots

**Acceptance**
- Multiple screens render consistently inside the mobile frame.

### 3C) Sections (Title + List of Screens)
**Deliverables**
- `Section` component with title + optional description/actions
- `ScreenList`/`ScreenGrid` that renders multiple screens with labels

**Acceptance**
- You can build an “index page” showing grouped screens quickly.

---

## Phase 4 — Packaging (Library Build)
**Deliverables**
- Configure library build output (likely Vite lib mode):
  - ESM output
  - stable entry file
- Package metadata updates:
  - `package.json` exports field
  - mark which files are public

**Acceptance**
- `npm run build` produces library artifacts cleanly and demo still builds.

---

## Phase 5 — Quality Gates
**Deliverables**
- Lint passes
- Build passes
- Minimal “smoke” demo page that exercises all exports

**Acceptance**
- Running:
  - `npm run lint`
  - `npm run build`
  passes with no errors.

---

## Phase 6 — v1 Polish (Optional)
- Add accessibility basics (labels, focus states)
- Add a tiny theming override mechanism (tokens provider)
- Add more wireframe components (tables, charts placeholders, empty states)

# Repository Guidelines

## Project Structure & Module Organization

This repository is a single Next.js App Router application with static historical and geological datasets; it does not require a runtime database.

- `app/`: pages, shared layout, global styles, and API route handlers. `/` displays the historical atlas; `/sites` preserves the archaeological-site atlas.
- `components/`: React UI and MapLibre layers, including `KingdomAtlas.tsx`, `Map.tsx`, and timeline components.
- `data/`: contributor-editable event, city, province, route, and regional-name catalogs; see `data/README.md`.
- `lib/`: data types, selection logic, sea-level calculations, and colocated unit tests.
- `public/data/`: GeoJSON geography, polity snapshots, and JSON metadata/timeline indexes.
- `docs/`: data provenance, research notes, and historical collection methods. Some documents describe earlier architecture; verify them against current code.

## Agent Scope Guard

Ignore `_OLD_REPO/` during normal work. Exclude it from searches and file discovery (for example, `rg --glob '!_OLD_REPO/**'`), and do not inspect, edit, build, test, or use its contents as current project guidance. Only access it when the user explicitly asks to work with that archive.

## Build, Test, and Development Commands

Use pnpm consistently with the checked-in lockfile:

- `pnpm install --frozen-lockfile`: install reproducible dependencies.
- `pnpm dev`: start the development server at `http://localhost:3000`.
- `pnpm lint`: lint JavaScript/TypeScript with Oxlint.
- `pnpm format`: format source and project config files with Oxfmt.
- `pnpm format:check`: check formatting without writing files.
- `pnpm typecheck`: check strict TypeScript types without emitting files.
- `pnpm test`: run `lib/*.test.ts` through `tsx` and Node's test runner.
- `pnpm build`: produce the production Next.js build.
- `pnpm start`: serve an existing production build.

## Coding Style & Naming Conventions

Follow surrounding code: two-space indentation, explicit TypeScript interfaces, and single-quoted strings. Use PascalCase for React components, kebab-case for utility filenames, and stable kebab-case event/entity IDs. Mark components requiring browser APIs or React hooks with `'use client'`; keep server-only work in route handlers. Use `@/` for root-relative imports where appropriate. Use `pnpm format` and `pnpm lint` for source files; keep generated and dataset files out of formatting runs.

## Testing Guidelines

Name tests `lib/<module>.test.ts`, using `node:test` and `node:assert/strict`. Test behavior and boundaries, especially chronological ordering, date selection, timeline calculations, unique IDs, and required source metadata. No numeric coverage threshold is configured. Run relevant tests and type checking before submitting. For map or layout changes, check desktop/mobile rendering, year selection, layer toggles, and browser-console errors.

## Commit & Pull Request Guidelines

History commonly uses prefixes such as `feat:` and `chore:`. Write short, imperative commit subjects. Pull requests should explain the problem, resulting behavior, validation performed, and related issues. Include screenshots for visual changes and source links for dataset changes.

## Data Integrity & Configuration

Preserve source URLs, attribution, licenses, and uncertainty notes. Keep polity metadata, territory snapshots, and timeline indexes synchronized. Do not invent historical borders or treat modern geography as evidence of past boundaries. Keep secrets out of Git and use `.env.example` for configuration examples. Preserve unrelated working-tree changes.

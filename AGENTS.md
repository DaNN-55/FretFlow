# Repository Guidelines

This repository is a small, static web app for guitar fretboard training. The codebase is plain HTML/CSS/JavaScript with no build system.

## Project Structure & Module Organization

- `training/guitartraining.html`: Single-page UI and DOM structure.
- `training/guitartraining.css`: Styles for the fretboard, controls, and layout.
- `training/guitartraining.js`: App logic (scale/chord rules, rendering, metronome).

No separate `src/`, `tests/`, or asset pipeline is present. Keep related HTML/CSS/JS changes aligned across these files.

## Build, Test, and Development Commands

There is no build step. Open the page directly or use a simple local server:

```bash
open training/guitartraining.html
```

```bash
python3 -m http.server --directory training 8000
```

The server option is recommended to avoid browser restrictions when loading local files.

## Coding Style & Naming Conventions

- Indentation: 2 spaces in HTML/CSS/JS (match existing files).
- JavaScript: `const`/`let`, camelCase for variables/functions, uppercase for constant arrays (e.g., `chromaticScale`).
- CSS: kebab-case class names (e.g., `.control-panel`, `.fretboard-wrapper`).
- HTML: keep attribute order readable; prefer explicit `aria-*` for controls.

No formatter or linter is configured. Keep changes consistent with current style.

## Testing Guidelines

No automated tests are present. Verify manually:

- Open the page and confirm scale/chord toggles, pattern buttons, and metronome UI.
- Check layout on common viewport sizes (mobile and desktop).

If you add tests in the future, document the runner and naming convention here.

## Commit & Pull Request Guidelines

This directory is not a Git repository (no `.git` found), so no commit history is available. If you initialize Git, use clear, imperative messages (e.g., `Add pentatonic minor scale labels`) and keep PRs focused. Include:

- A concise summary of UI or logic changes.
- Screenshots or short screen recordings for visual changes.
- Any manual verification steps you ran.

## Configuration & Assets

There are no environment variables or external assets. Keep dependencies zero unless a clear need emerges, and document any new configuration here.

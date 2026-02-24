# Repository Guidelines

This repository is maintained as a Vue app with a legacy runtime layer.

Important: the active project is `vue-app/`. The root-level `src/` directory is a deprecated static prototype and should not receive new feature work unless explicitly requested.

## Project Structure & Module Organization

Primary implementation (current):

- `vue-app/src/main.js`: Vue entry point, mounts `App.vue` and imports active styles.
- `vue-app/src/App.vue`: Main page structure (Vue shell).
- `vue-app/src/legacy/chord-arpeggio-runtime.js`: Core interaction logic (fretboard, modes, circle-of-fifths, metronome, etc.).
- `vue-app/src/legacy/chord-arpeggio.css`: Main visual styles.
- `vue-app/src/legacy/guitartraining.css`: Shared fretboard/base styles.
- `vue-app/src/vue-overrides.css`: Preferred place for small style overrides.
- `vue-app/FILES_GUIDE.md`: Canonical explanation of which files are currently active vs archived.

Deprecated (do not use for normal changes):

- `src/` (root): older static HTML/CSS/JS implementation.

## Build, Test, and Development Commands

Work inside `vue-app/`.

```bash
cd vue-app
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal (usually `http://localhost:5173/`).

Build and preview:

```bash
npm run build
npm run preview
```

## Coding Style & Naming Conventions

- Indentation: 2 spaces in Vue/JS/CSS/HTML.
- JavaScript: `const`/`let`, camelCase for variables/functions.
- CSS: kebab-case class names.
- Vue: keep `App.vue` mostly structural; put behavior changes in the legacy runtime unless you are intentionally refactoring into components.
- Prefer minimal, targeted edits in `vue-app/src/vue-overrides.css` instead of large edits to legacy CSS when possible.

No formatter or linter is currently enforced. Match the existing style in the touched file.

## Testing Guidelines

No automated tests are configured yet. Verify manually in `vue-app`:

- Top-level navigation behavior:
  - `自由训练` stays in-app
  - `乐句库` opens Songsterr in a new tab and does not navigate the current page
- Mode switch (`训练模式` / `CAGED 模式` / `五度圈模式`) works
- Fretboard note rendering and click-to-sound behavior work
- Scale/chord/root/chord-position controls update highlights correctly
- CAGED pattern buttons and CAGED toggle work
- Circle-of-fifths interactions work
- Metronome toggle, BPM slider, signature, lights, and collapse button work
- Layout is usable on desktop and mobile widths

If you add tests later, document the runner and naming convention here.

## Commit & Pull Request Guidelines

Use clear, imperative commit messages (for example: `Route phrase tab to Songsterr external link`). Keep PRs focused.

Include in PRs:

- Concise summary of behavior/UI changes
- Screenshots or short recordings for visual updates
- Manual verification steps performed
- Any known limitations or follow-up work

## Configuration & Assets

- No environment variables are required for the current app.
- Vite base path is configured in `vue-app/vite.config.js` for GitHub Pages deployment.
- Static assets for alphaTab are in `vue-app/public/vendor/alphaTab/`.

## Notes for Agents / Contributors

- Default target for code changes is `vue-app/`.
- Do not migrate or delete legacy runtime code unless the task explicitly requests refactoring.
- If a request mentions `src/` without clarifying, confirm whether the user means the deprecated root `src/` or `vue-app/src/`.

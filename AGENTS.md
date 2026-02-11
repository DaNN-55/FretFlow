# Repository Guidelines

This repository is a small, static web app for guitar fretboard training. The codebase is plain HTML/CSS/JavaScript with no build system.

## Project Structure & Module Organization

Primary app files:

- `src/pages/chord-arpeggio.html`: Main page UI and DOM structure.
- `src/styles/chord-arpeggio.css`: Main visual style layer (layout, mode views, circle-of-fifths, phrase library, metronome panel).
- `src/styles/guitartraining.css`: Shared/base fretboard and control styles.
- `src/chord-arpeggio.js`: Main app logic (fretboard rendering, scale/chord/CAGED rules, circle-of-fifths interactions, phrase upload demo, metronome).

Additional page:

- `src/pages/chords-gptapp.html`: Standalone prototype/demo page with inline CSS/JS.

Keep related HTML/CSS/JS changes aligned across these files.

## Build, Test, and Development Commands

There is no build step. Open the page directly or use a simple local server:

```bash
open src/pages/chord-arpeggio.html
```

```bash
python3 -m http.server --directory src 8000
```

Then open `http://localhost:8000/pages/chord-arpeggio.html`.

The server option is recommended to avoid browser restrictions when loading local files.

## Coding Style & Naming Conventions

- Indentation: 2 spaces in HTML/CSS/JS (match existing files).
- JavaScript: `const`/`let`, camelCase for variables/functions, constant data collections kept in clear uppercase/lowercase patterns matching existing code (e.g., `chromaticScale`, `scaleFormulas`).
- CSS: kebab-case class names (e.g., `.control-panel`, `.fretboard-wrapper`).
- HTML: keep attribute order readable; prefer explicit `aria-*` for interactive controls.

No formatter or linter is configured. Keep changes consistent with current style.

## Testing Guidelines

No automated tests are present. Verify manually:

- Open `src/pages/chord-arpeggio.html` and confirm:
  - Top tabs (`自由训练` / `乐句库`) switch correctly.
  - Mode switch (`训练模式` / `CAGED 模式` / `五度圈模式`) works.
  - Fretboard note rendering and click-to-sound behavior work.
  - Scale/chord/root/chord-position controls update highlights correctly.
  - CAGED pattern buttons and CAGED toggle update the board as expected.
  - Circle-of-fifths window shifts and highlight behavior work.
  - Phrase upload demo list updates after selecting files.
  - Metronome toggle, BPM slider, signature, lights, and collapse button work.
- Check layout on common viewport sizes (mobile and desktop).

If you add tests in the future, document the runner and naming convention here.

## Commit & Pull Request Guidelines

This directory is a Git repository. Use clear, imperative commit messages (e.g., `Add pentatonic minor scale labels`) and keep PRs focused. Include:

- A concise summary of UI or logic changes.
- Screenshots or short screen recordings for visual changes.
- Any manual verification steps you ran.

## Configuration & Assets

- No environment variables are required.
- No npm/build dependencies are required.
- External Google Fonts are referenced by `src/pages/chord-arpeggio.html`.

Keep dependencies minimal unless a clear need emerges, and document any new configuration here.

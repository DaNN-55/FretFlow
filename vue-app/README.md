# FretFlow Vue Migration

## Tech Stack
- Vue 3
- Vite
- Pinia
- Vue Router

## Run
```bash
cd vue-app
npm install
npm run dev
```

## Current Scope
- Top tabs (`自由训练` / `乐句库`) via router.
- Mode toggle skeleton (`训练模式` / `CAGED 模式` / `五度圈模式`).
- Circle of Fifths:
  - SVG concentric wheel (major + relative minor).
  - Click / hover / keyboard interaction.
  - Major/minor scale notes.
  - Major/minor diatonic chords.
  - Common progressions mapping.
  - Related six-chord highlight around active tonic.
- Phrase library:
  - Upload score/audio files.
  - Render card list metadata.

## Next Migration Steps
1. Migrate fretboard renderer into a dedicated `Fretboard` component.
2. Move audio/metronome logic to composables (`useAudio`, `useMetronome`).
3. Split training/caged state into domain stores.
4. Add unit tests for circle theory calculation and file type parser.

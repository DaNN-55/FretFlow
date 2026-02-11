<template>
  <div class="tab-panel tab-panel-training active" id="trainingTabPanel">
    <section class="control-panel">
      <div class="mode-toggle" role="tablist" aria-label="Mode switch">
        <button
          type="button"
          class="mode-btn"
          :class="{ active: ui.mode === 'training' }"
          @click="ui.setMode('training')"
        >
          Training Mode
        </button>
        <button
          type="button"
          class="mode-btn"
          :class="{ active: ui.mode === 'caged' }"
          @click="ui.setMode('caged')"
        >
          CAGED Mode
        </button>
        <button
          type="button"
          class="mode-btn"
          :class="{ active: ui.mode === 'circle' }"
          @click="ui.setMode('circle')"
        >
          Circle Of Fifths
        </button>
      </div>

      <div class="control-panel-grid">
        <div class="control-group training-only scale-group">
          <div class="group-title">Select Training</div>
          <div class="control-row compact-controls">
            <div class="field training-mode-field">
              <div class="training-view-toggle" role="tablist" aria-label="Training content">
                <button type="button" class="training-view-btn">Free</button>
                <button type="button" class="training-view-btn active">Scale</button>
                <button type="button" class="training-view-btn">Chord</button>
              </div>
            </div>
            <div class="training-option-row">
              <label class="field" id="rootBox">
                <span class="field-label">Root</span>
                <select aria-label="Select root">
                  <option>C</option><option>C#</option><option>D</option><option>D#</option>
                  <option>E</option><option>F</option><option>F#</option><option>G</option>
                  <option>G#</option><option>A</option><option>A#</option><option>B</option>
                </select>
              </label>
              <div class="training-row" data-training-field="scale">
                <label class="field">
                  <span class="field-label">Scale</span>
                  <select aria-label="Select scale type">
                    <option>Major</option>
                    <option>Minor</option>
                    <option>Major Pentatonic</option>
                    <option>Minor Pentatonic</option>
                    <option>Blues</option>
                  </select>
                </label>
              </div>
              <div class="training-row" data-training-field="chord">
                <label class="field">
                  <span class="field-label">Chord</span>
                  <select aria-label="Select chord type">
                    <option>Major Triad</option>
                    <option>Minor Triad</option>
                    <option>Sus2</option>
                    <option>Sus4</option>
                    <option>Dominant 7</option>
                    <option>Major 7</option>
                    <option>Minor 7</option>
                  </select>
                </label>
                <label class="field">
                  <span class="field-label">Position</span>
                  <select aria-label="Select chord position">
                    <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="control-group caged-only">
          <div class="group-title">CAGED Shapes</div>
          <div class="control-row">
            <div class="btn-group">
              <button type="button">C</button>
              <button type="button">A</button>
              <button type="button">G</button>
              <button type="button">E</button>
              <button type="button">D</button>
            </div>
            <div class="switch-box">
              <span class="switch-label">CAGED System</span>
              <label class="switch">
                <input type="checkbox" aria-label="Toggle caged chord tones" />
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="fretboard-section training-only" id="trainingFretboardSection">
      <div class="fretboard-shell">
        <div class="training-toast">Click any fret to play. Switch mode to learn scales and chord tones.</div>
        <div class="fretboard-wrapper">
          <div id="fretboard" class="fretboard"></div>
          <div id="fretNumbers" class="fret-numbers"></div>
        </div>
      </div>
    </section>

    <section class="fretboard-section caged-only" id="cagedFretboardSection">
      <div class="fretboard-shell">
        <div id="cagedFretboardMount"></div>
      </div>
    </section>

    <section class="fretboard-section circle-only" id="circleFretboardSection">
      <div class="fretboard-shell">
        <CircleOfFifths />
      </div>
    </section>
  </div>
</template>

<script setup>
import CircleOfFifths from "../components/CircleOfFifths.vue";
import { useUiStore } from "../stores/ui";

const ui = useUiStore();
ui.setTopTab("training");
</script>

const board = document.getElementById("fretboard");
const numBar = document.getElementById("fretNumbers");

const chromaticScale = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

const openStrings = ["E", "B", "G", "D", "A", "E"]; // 索引 0是1弦，5是6弦

const scaleFormulas = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  pentatonicMajor: [0, 2, 4, 7, 9],
  pentatonicMinor: [0, 3, 5, 7, 10],
};

const chordFormulas = {
  majorTriad: { intervals: [0, 4, 7], degrees: ["1", "3", "5"] },
  minorTriad: { intervals: [0, 3, 7], degrees: ["1", "b3", "5"] },
  dominant7: { intervals: [0, 4, 7, 10], degrees: ["1", "3", "5", "b7"] },
  major7: { intervals: [0, 4, 7, 11], degrees: ["1", "3", "5", "7"] },
  minor7: { intervals: [0, 3, 7, 10], degrees: ["1", "b3", "5", "b7"] },
};

const patternRules = {
  1: {
    inPattern: (sIdx, f) => f <= 3,
    chordAllowed: (sIdx, f) => !((sIdx === 5 && f === 0) || (sIdx === 0 && f === 3)),
  },
  2: {
    inPattern: (sIdx, f) => f >= 2 && f <= 6,
    chordAllowed: (sIdx, f) => !(sIdx === 3 && f === 2),
  },
  3: {
    inPattern: (sIdx, f) => {
      if (sIdx === 2 && f === 4) return true;
      if (f >= 5 && f <= 9) {
        if ((sIdx === 3 && f === 9) || (sIdx === 2 && f === 9)) return false;
        return true;
      }
      return false;
    },
    chordAllowed: (sIdx, f) => !(sIdx === 1 && f === 8),
  },
  4: {
    inPattern: (sIdx, f) => f >= 7 && f <= 11,
    chordAllowed: (sIdx, f) => !(sIdx === 4 && f === 7),
  },
  5: {
    inPattern: (sIdx, f) => {
      const p5Config = [
        { s: 5, frets: [10, 12, 13] },
        { s: 4, frets: [10, 12] },
        { s: 3, frets: [9, 10, 12] },
        { s: 2, frets: [9, 10, 12] },
        { s: 1, frets: [10, 12, 13] },
        { s: 0, frets: [10, 12, 13] },
      ];
      const currentStringTarget = p5Config.find((item) => item.s === 5 - sIdx);
      if (currentStringTarget && currentStringTarget.frets.includes(f)) return true;
      if (sIdx === 1 && f === 13) return true;
      return false;
    },
    chordAllowed: (sIdx, f) => !(sIdx === 2 && f === 9),
  },
};

const rootSelect = document.getElementById("rootSelect");
const scaleSelect = document.getElementById("scaleSelect");
const scaleToggle = document.getElementById("scaleToggle");
const chordSelect = document.getElementById("chordSelect");
const chordPositionSelect = document.getElementById("chordPositionSelect");
const chordToneToggle = document.getElementById("chordToneToggle");
const highlightRootToggle = document.getElementById("highlightRootToggle");

const patternButtons = Array.from(document.querySelectorAll("[data-pattern]"));
const cagedToggle = document.getElementById("cagedToggle");

const arpeggioToggle = document.getElementById("arpeggioToggle");
const arpeggioDirectionSelect = document.getElementById("arpeggioDirection");
const modeButtons = Array.from(document.querySelectorAll(".mode-btn"));

let currentMode = "training";
const trainingState = {
  root: "C",
  scale: "major",
  chord: "majorTriad",
  chordTone: false,
  highlightRoot: true,
  arpeggio: false,
  arpeggioDirection: "asc",
  scaleOn: false,
  chordPosition: 1,
};
const cagedState = {
  patterns: [],
  cagedToggle: false,
};

const chordPositionRanges = {
  1: [0, 3],
  2: [2, 6],
  3: [5, 9],
  4: [7, 11],
  5: [9, 13],
};

const metronomeToggle = document.getElementById("metronomeToggle");
const metronomeSpeedInput = document.getElementById("metronomeSpeed");
const metronomeSpeedValue = document.getElementById("speedValue");
const fretboardShell = document.getElementById("fretboardShell");
const trainingFretboardSection = document.getElementById("trainingFretboardSection");
const cagedFretboardMount = document.getElementById("cagedFretboardMount");
const rhythmStartToggle = document.getElementById("rhythmStartToggle");
const rhythmSignature = document.getElementById("rhythmSignature");
const rhythmSubdivision = document.getElementById("rhythmSubdivision");
const rhythmSoundToggle = document.getElementById("rhythmSoundToggle");
const rhythmLightToggle = document.getElementById("rhythmLightToggle");
const rhythmBpm = document.getElementById("rhythmBpm");
const rhythmBpmValue = document.getElementById("rhythmBpmValue");
const rhythmLights = document.getElementById("rhythmLights");
const rhythmStepLabel = document.getElementById("rhythmStepLabel");

function getNotesFromFormula(root, intervals) {
  const rootIndex = chromaticScale.indexOf(root);
  return intervals.map((i) => chromaticScale[(rootIndex + i) % 12]);
}

function getActivePatterns() {
  return [1, 2, 3, 4, 5].filter((p) => board.classList.contains(`pattern-${p}`));
}

function isInActivePattern(sIdx, fret, activePatterns) {
  if (activePatterns.length === 0) return true;
  return activePatterns.some((p) => patternRules[p].inPattern(sIdx, fret));
}

function getActiveChordPosition() {
  if (!chordPositionSelect) return null;
  return parseInt(chordPositionSelect.value, 10);
}

function isInChordPosition(fret, chordPosition) {
  const range = chordPositionRanges[chordPosition];
  if (!range) return true;
  return fret >= range[0] && fret <= range[1];
}

function setChordPosition(position) {
  if (chordPositionSelect) {
    chordPositionSelect.value = String(position);
  }
}

function buildBoard() {
  for (let i = 0; i <= 15; i++) {
    const n = document.createElement("div");
    n.className = "num";
    n.innerText = i;
    numBar.appendChild(n);
  }

  openStrings.forEach((root, sIdx) => {
    const stringEl = document.createElement("div");
    stringEl.className = "string";
    const startIdx = chromaticScale.indexOf(root);

    for (let f = 0; f <= 15; f++) {
      const fretEl = document.createElement("div");
      fretEl.className = `fret ${f === 0 ? "fret-0" : ""}`;

      if (sIdx === 2 && [3, 5, 7, 9, 15].includes(f)) {
        const dot = document.createElement("div");
        dot.className = "inlay";
        fretEl.appendChild(dot);
      }
      if (f === 12 && (sIdx === 1 || sIdx === 4)) {
        const dot = document.createElement("div");
        dot.className = "inlay";
        fretEl.appendChild(dot);
      }

      const noteName = chromaticScale[(startIdx + f) % 12];
      const noteEl = document.createElement("div");
      noteEl.className = "note";
      noteEl.dataset.note = noteName;
      noteEl.dataset.string = sIdx.toString();
      noteEl.dataset.fret = f.toString();

      const label = document.createElement("span");
      label.className = "note-name";
      label.textContent = noteName;

      const degree = document.createElement("span");
      degree.className = "degree";

      const arpIndex = document.createElement("span");
      arpIndex.className = "arp-index";

      noteEl.appendChild(label);
      noteEl.appendChild(degree);
      noteEl.appendChild(arpIndex);

      for (let p = 1; p <= 5; p++) {
        if (patternRules[p].inPattern(sIdx, f)) {
          noteEl.classList.add(`p${p}`);
        }
      }

      fretEl.appendChild(noteEl);
      stringEl.appendChild(fretEl);
    }

    board.appendChild(stringEl);
  });
}

function updateArpeggioPath(chordNoteSet, restrictToPatterns) {
  const direction = arpeggioDirectionSelect ? arpeggioDirectionSelect.value : "asc";
  const activePatterns = restrictToPatterns ? getActivePatterns() : [];
  const stringOrder = direction === "asc" ? [5, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4, 5];
  let step = 1;

  stringOrder.forEach((sIdx) => {
    const noteEls = Array.from(
      document.querySelectorAll(`.note[data-string="${sIdx}"]`),
    );
    const candidates = noteEls.filter((noteEl) => {
      const noteName = noteEl.dataset.note;
      if (!chordNoteSet.has(noteName)) return false;
      const fret = parseInt(noteEl.dataset.fret, 10);
      return isInActivePattern(sIdx, fret, activePatterns);
    });

    if (candidates.length === 0) return;

    candidates.sort(
      (a, b) => parseInt(a.dataset.fret, 10) - parseInt(b.dataset.fret, 10),
    );
    const chosen =
      direction === "asc" ? candidates[0] : candidates[candidates.length - 1];

    chosen.classList.add("arp-step");
    const idxEl = chosen.querySelector(".arp-index");
    if (idxEl) idxEl.textContent = String(step);
    step += 1;
  });

  document.querySelectorAll(".note").forEach((noteEl) => {
    const noteName = noteEl.dataset.note;
    if (!chordNoteSet.has(noteName)) return;
    const sIdx = parseInt(noteEl.dataset.string, 10);
    const fret = parseInt(noteEl.dataset.fret, 10);
    if (!isInActivePattern(sIdx, fret, activePatterns)) return;
    if (!noteEl.classList.contains("arp-step")) {
      noteEl.classList.add("arp-muted");
    }
  });
}

function updateScaleAndChord() {
  const isCagedMode = document.body.classList.contains("mode-caged");
  const root = rootSelect.value;
  const scaleType = scaleSelect.value;
  const chordType = chordSelect ? chordSelect.value : "majorTriad";

  const scaleNotes = new Set(getNotesFromFormula(root, scaleFormulas[scaleType]));
  const chordFormula = chordFormulas[chordType];
  const chordNotes = getNotesFromFormula(root, chordFormula.intervals);
  const chordNoteSet = new Set(chordNotes);

  const degreeMap = new Map();
  chordNotes.forEach((note, idx) => {
    degreeMap.set(note, chordFormula.degrees[idx]);
  });

  const highlightRoot = highlightRootToggle ? highlightRootToggle.checked : true;
  const showScale = !isCagedMode && scaleToggle && scaleToggle.checked;
  const showChordTones = !isCagedMode && chordToneToggle && chordToneToggle.checked;
  const arpeggioMode = !isCagedMode && arpeggioToggle && arpeggioToggle.checked;
  const showCaged = isCagedMode ? cagedToggle.checked : false;
  const activeChordPosition = getActiveChordPosition();

  board.classList.toggle("show-scale", showScale);
  board.classList.toggle("show-chord", showChordTones);
  board.classList.toggle("show-arpeggio", arpeggioMode);
  board.classList.toggle("show-caged", showCaged);

  const activePatterns = getActivePatterns();
  const cagedPatterns = isCagedMode
    ? activePatterns
    : [];

  document.querySelectorAll(".note").forEach((noteEl) => {
    const noteName = noteEl.dataset.note;
    const sIdx = parseInt(noteEl.dataset.string, 10);
    const fret = parseInt(noteEl.dataset.fret, 10);
    const isChord = chordNoteSet.has(noteName);

    const inPattern = isCagedMode && activePatterns.length > 0
      ? activePatterns.some((p) => patternRules[p].inPattern(sIdx, fret))
      : !isCagedMode;

    const showInScale = isCagedMode
      ? (!showCaged && inPattern && scaleNotes.has(noteName))
      : (
        showChordTones
          ? (isChord && isInChordPosition(fret, activeChordPosition))
          : (arpeggioMode ? isChord : (showScale && scaleNotes.has(noteName)))
      );
    noteEl.classList.toggle("in-scale", showInScale);
    noteEl.classList.toggle("root-note", highlightRoot && noteName === root);

    const degreeEl = noteEl.querySelector(".degree");
    if (degreeEl) {
      degreeEl.textContent = degreeMap.get(noteName) || "";
    }

    const arpIndex = noteEl.querySelector(".arp-index");
    if (arpIndex) arpIndex.textContent = "";
    noteEl.classList.remove("arp-step", "arp-muted", "caged-note");

    const cagedAllowed = cagedPatterns.some((p) => {
      return patternRules[p].inPattern(sIdx, fret)
        && patternRules[p].chordAllowed(sIdx, fret);
    });
    noteEl.classList.toggle(
      "caged-note",
      showCaged && activePatterns.length > 0 && isChord && cagedAllowed,
    );
  });

  if (arpeggioMode && arpeggioDirectionSelect) {
    updateArpeggioPath(chordNoteSet, false);
  }
}

function resetBoardVisuals() {
  board.classList.remove("show-scale", "show-chord", "show-arpeggio", "show-caged");
  for (let p = 1; p <= 5; p++) {
    board.classList.remove(`pattern-${p}`);
  }

  patternButtons.forEach((btn) => {
    btn.classList.remove("active");
    btn.setAttribute("aria-pressed", "false");
  });

  document.querySelectorAll(".note").forEach((noteEl) => {
    noteEl.classList.remove("in-scale", "root-note", "arp-step", "arp-muted", "caged-note");
    const degreeEl = noteEl.querySelector(".degree");
    if (degreeEl) degreeEl.textContent = "";
    const arpIndex = noteEl.querySelector(".arp-index");
    if (arpIndex) arpIndex.textContent = "";
  });
}

function applyPatternState(patterns) {
  patterns.forEach((p) => {
    board.classList.add(`pattern-${p}`);
    const btn = patternButtons.find((item) => item.dataset.pattern === String(p));
    if (btn) {
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
    }
  });
}

function togglePattern(num, btn) {
  board.classList.toggle(`pattern-${num}`);
  btn.classList.toggle("active");
  const isActive = btn.classList.contains("active");
  btn.setAttribute("aria-pressed", String(isActive));
  updateScaleAndChord();
}

function toggleCaged() {
  const isChecked = cagedToggle.checked;
  board.classList.toggle("show-caged", isChecked);
  updateScaleAndChord();
}

patternButtons.forEach((btn) => {
  btn.addEventListener("click", () => togglePattern(btn.dataset.pattern, btn));
});

cagedToggle.addEventListener("change", toggleCaged);
rootSelect.addEventListener("change", updateScaleAndChord);
scaleSelect.addEventListener("change", updateScaleAndChord);
if (chordSelect) chordSelect.addEventListener("change", updateScaleAndChord);
if (scaleToggle) scaleToggle.addEventListener("change", updateScaleAndChord);
if (chordToneToggle) chordToneToggle.addEventListener("change", updateScaleAndChord);
if (highlightRootToggle) highlightRootToggle.addEventListener("change", updateScaleAndChord);
if (arpeggioToggle) arpeggioToggle.addEventListener("change", updateScaleAndChord);
if (arpeggioDirectionSelect) {
  arpeggioDirectionSelect.addEventListener("change", updateScaleAndChord);
}
if (chordPositionSelect) {
  chordPositionSelect.addEventListener("change", updateScaleAndChord);
}

function setMode(mode) {
  if (mode === currentMode) return;
  if (currentMode === "training") {
    trainingState.root = rootSelect.value;
    trainingState.scale = scaleSelect.value;
    if (chordSelect) trainingState.chord = chordSelect.value;
    if (chordToneToggle) trainingState.chordTone = chordToneToggle.checked;
    if (highlightRootToggle) trainingState.highlightRoot = highlightRootToggle.checked;
    if (arpeggioToggle) trainingState.arpeggio = arpeggioToggle.checked;
    if (arpeggioDirectionSelect) {
      trainingState.arpeggioDirection = arpeggioDirectionSelect.value;
    }
    if (scaleToggle) trainingState.scaleOn = scaleToggle.checked;
    const currentChordPos = getActiveChordPosition();
    if (currentChordPos) trainingState.chordPosition = currentChordPos;
  } else if (currentMode === "caged") {
    cagedState.patterns = getActivePatterns();
    cagedState.cagedToggle = cagedToggle.checked;
  }

  document.body.classList.toggle("mode-training", mode === "training");
  document.body.classList.toggle("mode-caged", mode === "caged");
  document.body.classList.toggle("mode-rhythm", mode === "rhythm");
  modeButtons.forEach((btn) => {
    const isActive = btn.dataset.mode === mode;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });

  const trainingDisabled = mode !== "training";
  rootSelect.disabled = trainingDisabled;
  scaleSelect.disabled = trainingDisabled;
  if (scaleToggle) scaleToggle.disabled = trainingDisabled;
  if (chordSelect) chordSelect.disabled = trainingDisabled;
  if (chordToneToggle) chordToneToggle.disabled = trainingDisabled;
  if (chordPositionSelect) chordPositionSelect.disabled = trainingDisabled;
  if (highlightRootToggle) highlightRootToggle.disabled = trainingDisabled;
  if (arpeggioToggle) arpeggioToggle.disabled = trainingDisabled;
  if (arpeggioDirectionSelect) arpeggioDirectionSelect.disabled = trainingDisabled;
  patternButtons.forEach((btn) => {
    btn.disabled = mode !== "caged";
  });
  cagedToggle.disabled = mode !== "caged";

  if (mode === "caged") {
    rootSelect.value = "C";
    scaleSelect.value = "major";
    if (chordSelect) chordSelect.value = "majorTriad";
    if (chordToneToggle) chordToneToggle.checked = false;
    if (arpeggioToggle) arpeggioToggle.checked = false;
    if (arpeggioDirectionSelect) arpeggioDirectionSelect.value = "asc";
    cagedToggle.checked = cagedState.cagedToggle;
    if (cagedFretboardMount && fretboardShell) {
      cagedFretboardMount.appendChild(fretboardShell);
    }
    resetBoardVisuals();
    applyPatternState(cagedState.patterns);
  } else if (mode === "training") {
    rootSelect.value = trainingState.root;
    scaleSelect.value = trainingState.scale;
    if (scaleToggle) scaleToggle.checked = trainingState.scaleOn;
    if (chordSelect) chordSelect.value = trainingState.chord;
    if (chordToneToggle) chordToneToggle.checked = trainingState.chordTone;
    setChordPosition(trainingState.chordPosition);
    if (highlightRootToggle) highlightRootToggle.checked = trainingState.highlightRoot;
    if (arpeggioToggle) arpeggioToggle.checked = trainingState.arpeggio;
    if (arpeggioDirectionSelect) {
      arpeggioDirectionSelect.value = trainingState.arpeggioDirection;
    }
    cagedToggle.checked = false;
    if (trainingFretboardSection && fretboardShell) {
      trainingFretboardSection.appendChild(fretboardShell);
    }
    resetBoardVisuals();
  } else {
    resetBoardVisuals();
    if (rhythmStartToggle) rhythmStartToggle.checked = rhythmState.active;
  }

  if (mode === "rhythm") {
    stopMetronome();
    if (metronomeToggle) metronomeToggle.checked = false;
    syncRhythmControls();
    buildRhythmLights();
  } else {
    stopRhythm();
    if (rhythmStartToggle) rhythmStartToggle.checked = false;
  }

  currentMode = mode;

  updateScaleAndChord();
}

modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => setMode(btn.dataset.mode));
});

// 节拍器相关变量 (更稳定调度)
let metronomeActive = false;
let metronomeSpeed = 120;
let audioContext = null;
let nextNoteTime = 0;
let schedulerTimer = null;
const rhythmState = {
  active: false,
  bpm: 90,
  signature: "4/4",
  subdivision: "quarter",
  soundOn: true,
  lightOn: true,
  step: 0,
  timerId: null,
};

const lookahead = 25; // ms
const scheduleAheadTime = 0.1; // seconds

function initAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playMetronomeClick(time) {
  initAudioContext();
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();

  osc.connect(gain);
  gain.connect(audioContext.destination);

  osc.frequency.value = 1000;
  osc.type = "sine";

  gain.gain.setValueAtTime(0.3, time);
  gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

  osc.start(time);
  osc.stop(time + 0.1);
}

function getRhythmConfig() {
  const signature = rhythmSignature ? rhythmSignature.value : "4/4";
  const subdivision = rhythmSubdivision ? rhythmSubdivision.value : "quarter";
  const beatsPerBar = signature === "3/4" ? 3 : signature === "6/8" ? 6 : 4;
  const stepsPerBeat = subdivision === "sixteenth" ? 4 : subdivision === "eighth" ? 2 : 1;
  return {
    beatsPerBar,
    stepsPerBeat,
    totalSteps: beatsPerBar * stepsPerBeat,
  };
}

function buildRhythmLights() {
  if (!rhythmLights) return;
  const { beatsPerBar, stepsPerBeat, totalSteps } = getRhythmConfig();
  rhythmLights.style.setProperty("--rhythm-steps", String(totalSteps));
  rhythmLights.innerHTML = "";
  for (let i = 0; i < totalSteps; i += 1) {
    const light = document.createElement("div");
    light.className = "rhythm-light";
    if (i % stepsPerBeat === 0) light.classList.add("beat");
    if (i === 0) light.classList.add("accent");
    rhythmLights.appendChild(light);
  }
  if (rhythmStepLabel) rhythmStepLabel.textContent = "准备开始";
}

function updateRhythmVisual(step) {
  if (!rhythmLights) return;
  const lights = Array.from(rhythmLights.querySelectorAll(".rhythm-light"));
  lights.forEach((light, idx) => {
    light.classList.toggle("active", rhythmState.lightOn && idx === step);
  });
}

function playRhythmClick(accent) {
  if (!rhythmState.soundOn) return;
  initAudioContext();
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.connect(gain);
  gain.connect(audioContext.destination);
  osc.type = "sine";
  osc.frequency.value = accent ? 1200 : 850;
  const now = audioContext.currentTime;
  gain.gain.setValueAtTime(accent ? 0.24 : 0.18, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
  osc.start(now);
  osc.stop(now + 0.08);
}

function rhythmTick() {
  const { beatsPerBar, stepsPerBeat, totalSteps } = getRhythmConfig();
  const step = rhythmState.step % totalSteps;
  const accent = step % stepsPerBeat === 0 && step / stepsPerBeat % beatsPerBar === 0;
  playRhythmClick(accent);
  updateRhythmVisual(step);
  const beatNum = Math.floor(step / stepsPerBeat) + 1;
  if (rhythmStepLabel) {
    rhythmStepLabel.textContent = `第 ${beatNum} 拍 · 步进 ${step + 1}/${totalSteps}`;
  }
  rhythmState.step = (step + 1) % totalSteps;
}

function stopRhythm() {
  rhythmState.active = false;
  if (rhythmState.timerId) {
    clearInterval(rhythmState.timerId);
    rhythmState.timerId = null;
  }
  rhythmState.step = 0;
  updateRhythmVisual(-1);
  if (rhythmStepLabel) rhythmStepLabel.textContent = "准备开始";
}

function startRhythm() {
  if (rhythmState.active) return;
  const { stepsPerBeat } = getRhythmConfig();
  const intervalMs = (60 / rhythmState.bpm / stepsPerBeat) * 1000;
  rhythmState.active = true;
  rhythmState.step = 0;
  rhythmTick();
  rhythmState.timerId = setInterval(rhythmTick, intervalMs);
}

function syncRhythmControls() {
  if (rhythmBpm) rhythmState.bpm = parseInt(rhythmBpm.value, 10);
  rhythmState.soundOn = rhythmSoundToggle ? rhythmSoundToggle.checked : true;
  rhythmState.lightOn = rhythmLightToggle ? rhythmLightToggle.checked : true;
  if (rhythmBpmValue) rhythmBpmValue.textContent = String(rhythmState.bpm);
}

function restartRhythmIfActive() {
  buildRhythmLights();
  if (!rhythmState.active) return;
  stopRhythm();
  startRhythm();
}

function nextNote() {
  const secondsPerBeat = 60 / metronomeSpeed;
  nextNoteTime += secondsPerBeat;
}

function scheduler() {
  while (nextNoteTime < audioContext.currentTime + scheduleAheadTime) {
    playMetronomeClick(nextNoteTime);
    nextNote();
  }
}

function startMetronome() {
  if (metronomeActive) return;
  initAudioContext();
  metronomeActive = true;
  nextNoteTime = audioContext.currentTime + 0.05;
  schedulerTimer = setInterval(scheduler, lookahead);
}

function stopMetronome() {
  metronomeActive = false;
  if (schedulerTimer) {
    clearInterval(schedulerTimer);
    schedulerTimer = null;
  }
}

function toggleMetronome() {
  const isChecked = metronomeToggle.checked;
  if (isChecked) startMetronome();
  else stopMetronome();
}

function updateMetronomeSpeed(value) {
  metronomeSpeed = parseInt(value, 10);
  metronomeSpeedValue.innerText = value;
}

metronomeToggle.addEventListener("change", toggleMetronome);
metronomeSpeedInput.addEventListener("change", (e) => updateMetronomeSpeed(e.target.value));
metronomeSpeedInput.addEventListener("input", (e) => updateMetronomeSpeed(e.target.value));

if (rhythmStartToggle) {
  rhythmStartToggle.addEventListener("change", () => {
    if (!document.body.classList.contains("mode-rhythm")) {
      rhythmStartToggle.checked = false;
      return;
    }
    syncRhythmControls();
    if (rhythmStartToggle.checked) startRhythm();
    else stopRhythm();
  });
}
if (rhythmBpm) {
  rhythmBpm.addEventListener("input", () => {
    syncRhythmControls();
    restartRhythmIfActive();
  });
}
if (rhythmSignature) {
  rhythmSignature.addEventListener("change", () => {
    restartRhythmIfActive();
  });
}
if (rhythmSubdivision) {
  rhythmSubdivision.addEventListener("change", () => {
    restartRhythmIfActive();
  });
}
if (rhythmSoundToggle) {
  rhythmSoundToggle.addEventListener("change", () => {
    syncRhythmControls();
  });
}
if (rhythmLightToggle) {
  rhythmLightToggle.addEventListener("change", () => {
    syncRhythmControls();
    if (!rhythmState.lightOn) updateRhythmVisual(-1);
  });
}

buildBoard();
syncRhythmControls();
buildRhythmLights();
setMode("training");
updateScaleAndChord();

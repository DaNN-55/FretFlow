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
const openStringMidis = [64, 59, 55, 50, 45, 40]; // 索引 0是1弦(E4)，5是6弦(E2)

const scaleFormulas = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  pentatonicMajor: [0, 2, 4, 7, 9],
  pentatonicMinor: [0, 3, 5, 7, 10],
  blues: [0, 3, 5, 6, 7, 10],
};

const chordFormulas = {
  majorTriad: { intervals: [0, 4, 7], degrees: ["1", "3", "5"] },
  minorTriad: { intervals: [0, 3, 7], degrees: ["1", "b3", "5"] },
  sus2: { intervals: [0, 2, 7], degrees: ["1", "2", "5"] },
  sus4: { intervals: [0, 5, 7], degrees: ["1", "4", "5"] },
  dominant7: { intervals: [0, 4, 7, 10], degrees: ["1", "3", "5", "b7"] },
  major7: { intervals: [0, 4, 7, 11], degrees: ["1", "3", "5", "7"] },
  minor7: { intervals: [0, 3, 7, 10], degrees: ["1", "b3", "5", "b7"] },
};

const patternRules = {
  1: {
    inPattern: (sIdx, f) => f <= 3,
    chordAllowed: (sIdx, f) =>
      !((sIdx === 5 && f === 0) || (sIdx === 0 && f === 3)),
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
      if (currentStringTarget && currentStringTarget.frets.includes(f))
        return true;
      if (sIdx === 1 && f === 13) return true;
      return false;
    },
    chordAllowed: (sIdx, f) => !(sIdx === 2 && f === 9),
  },
};

const rootSelect = document.getElementById("rootSelect");
const scaleSelect = document.getElementById("scaleSelect");
const chordSelect = document.getElementById("chordSelect");
const chordPositionSelect = document.getElementById("chordPositionSelect");
const highlightRootToggle = document.getElementById("highlightRootToggle");
const trainingToast = document.getElementById("trainingToast");
const trainingViewButtons = Array.from(
  document.querySelectorAll("[data-training-view]"),
);
const scaleTrainingFields = Array.from(
  document.querySelectorAll('[data-training-field="scale"]'),
);
const chordTrainingFields = Array.from(
  document.querySelectorAll('[data-training-field="chord"]'),
);

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
  trainingView: "scale",
  highlightRoot: true,
  arpeggio: false,
  arpeggioDirection: "asc",
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
const metronomeSignatureSelect = document.getElementById("metronomeSignature");
const metronomeLightRow = document.querySelector(".metronome-light-row");
let metronomeLights = [];
const fretboardShell = document.getElementById("fretboardShell");
const trainingFretboardSection = document.getElementById(
  "trainingFretboardSection",
);
const cagedFretboardMount = document.getElementById("cagedFretboardMount");

function getNotesFromFormula(root, intervals) {
  const rootIndex = chromaticScale.indexOf(root);
  return intervals.map((i) => chromaticScale[(rootIndex + i) % 12]);
}

function getActivePatterns() {
  return [1, 2, 3, 4, 5].filter((p) =>
    board.classList.contains(`pattern-${p}`),
  );
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

function getFretMidi(stringIdx, fret) {
  return openStringMidis[stringIdx] + fret;
}

function getTrainingView() {
  const activeButton = trainingViewButtons.find((btn) =>
    btn.classList.contains("active"),
  );
  if (!activeButton) return "scale";
  const value = activeButton.dataset.trainingView;
  return ["none", "scale", "chord"].includes(value) ? value : "scale";
}

function setTrainingView(view) {
  const nextView = ["none", "scale", "chord"].includes(view) ? view : "scale";
  trainingViewButtons.forEach((btn) => {
    const isActive = btn.dataset.trainingView === nextView;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });

  const scaleInactive = nextView !== "scale";
  const chordInactive = nextView !== "chord";
  scaleTrainingFields.forEach((field) => {
    field.hidden = false;
    field.classList.toggle("is-inactive", scaleInactive);
  });
  chordTrainingFields.forEach((field) => {
    field.hidden = false;
    field.classList.toggle("is-inactive", chordInactive);
  });

  const trainingDisabled = currentMode !== "training";
  trainingViewButtons.forEach((btn) => {
    btn.disabled = trainingDisabled;
  });
  if (scaleSelect)
    scaleSelect.disabled = trainingDisabled || nextView !== "scale";
  if (chordSelect)
    chordSelect.disabled = trainingDisabled || nextView !== "chord";
  if (chordPositionSelect) {
    chordPositionSelect.disabled = trainingDisabled || nextView !== "chord";
  }
}

let trainingAudioContext = null;
let trainingMasterGain = null;

function ensureTrainingAudio() {
  if (!trainingAudioContext) {
    trainingAudioContext = new (
      window.AudioContext || window.webkitAudioContext
    )();
    trainingMasterGain = trainingAudioContext.createGain();
    trainingMasterGain.gain.value = 0.7;
    trainingMasterGain.connect(trainingAudioContext.destination);
  }
}

function unlockTrainingAudio() {
  ensureTrainingAudio();
  if (trainingAudioContext.state === "suspended") {
    trainingAudioContext.resume();
  }
}

function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function playTrainingTone(midi, duration = 0.6, when = 0) {
  ensureTrainingAudio();
  const t0 = trainingAudioContext.currentTime + when;
  const osc = trainingAudioContext.createOscillator();
  const osc2 = trainingAudioContext.createOscillator();
  const gain = trainingAudioContext.createGain();
  const lowpass = trainingAudioContext.createBiquadFilter();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(midiToFreq(midi), t0);
  osc2.type = "sine";
  osc2.frequency.setValueAtTime(midiToFreq(midi) * 2, t0);

  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(0.85, t0 + 0.02);
  gain.gain.exponentialRampToValueAtTime(
    0.18,
    t0 + Math.max(0.08, duration * 0.55),
  );
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

  lowpass.type = "lowpass";
  lowpass.frequency.setValueAtTime(2400, t0);

  osc.connect(gain);
  osc2.connect(gain);
  gain.connect(lowpass);
  lowpass.connect(trainingMasterGain);

  osc.start(t0);
  osc2.start(t0);
  osc.stop(t0 + duration + 0.02);
  osc2.stop(t0 + duration + 0.02);
}

function updateTrainingToast(message, allowHtml = false) {
  if (!trainingToast) return;
  if (allowHtml) {
    trainingToast.innerHTML = message;
  } else {
    trainingToast.textContent = message;
  }
}

function setTrainingNoteActive(noteEl, isActive) {
  if (!noteEl) return;
  noteEl.classList.toggle("hit-preview", isActive);
}

function handleTrainingFretPointerDown(
  event,
  stringIdx,
  fret,
  noteName,
  noteEl,
) {
  if (currentMode !== "training" && currentMode !== "caged") return;
  const midi = getFretMidi(stringIdx, fret);
  unlockTrainingAudio();
  playTrainingTone(midi, 0.55, 0);
  setTrainingNoteActive(noteEl, true);
  if (
    event.currentTarget &&
    event.pointerId != null &&
    event.currentTarget.setPointerCapture
  ) {
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  if (getTrainingView() === "none") {
    updateTrainingToast(
      `你弹了 <span class="toast-note">${noteName}</span> <span class="toast-meta">第${stringIdx + 1}弦 · 第${fret}品 · MIDI ${midi}</span>`,
      true,
    );
  } else {
    updateTrainingToast(
      `你弹了 ${noteName} —— 第${stringIdx + 1}弦，第${fret}品 · MIDI ${midi}`,
    );
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
      fretEl.dataset.string = sIdx.toString();
      fretEl.dataset.fret = f.toString();
      fretEl.dataset.note = noteName;

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

      fretEl.addEventListener("pointerdown", (event) => {
        handleTrainingFretPointerDown(event, sIdx, f, noteName, noteEl);
      });
      const clearActive = () => setTrainingNoteActive(noteEl, false);
      fretEl.addEventListener("pointerup", clearActive);
      fretEl.addEventListener("pointercancel", clearActive);
      fretEl.addEventListener("lostpointercapture", clearActive);

      fretEl.appendChild(noteEl);
      stringEl.appendChild(fretEl);
    }

    board.appendChild(stringEl);
  });
}

function updateArpeggioPath(chordNoteSet, restrictToPatterns) {
  const direction = arpeggioDirectionSelect
    ? arpeggioDirectionSelect.value
    : "asc";
  const activePatterns = restrictToPatterns ? getActivePatterns() : [];
  const stringOrder =
    direction === "asc" ? [5, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4, 5];
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

  const scaleNotes = new Set(
    getNotesFromFormula(root, scaleFormulas[scaleType]),
  );
  const chordFormula = chordFormulas[chordType];
  const chordNotes = getNotesFromFormula(root, chordFormula.intervals);
  const chordNoteSet = new Set(chordNotes);

  const degreeMap = new Map();
  chordNotes.forEach((note, idx) => {
    degreeMap.set(note, chordFormula.degrees[idx]);
  });

  const highlightRoot = highlightRootToggle
    ? highlightRootToggle.checked
    : true;
  const trainingView = getTrainingView();
  const showScale = !isCagedMode && trainingView === "scale";
  const showChordTones = !isCagedMode && trainingView === "chord";
  const arpeggioMode =
    !isCagedMode &&
    trainingView !== "none" &&
    arpeggioToggle &&
    arpeggioToggle.checked;
  const showCaged = isCagedMode ? cagedToggle.checked : false;
  const activeChordPosition = getActiveChordPosition();

  board.classList.toggle("show-scale", showScale);
  board.classList.toggle("show-chord", showChordTones);
  board.classList.toggle("show-arpeggio", arpeggioMode);
  board.classList.toggle("show-caged", showCaged);

  const activePatterns = getActivePatterns();
  const cagedPatterns = isCagedMode ? activePatterns : [];

  document.querySelectorAll(".note").forEach((noteEl) => {
    const noteName = noteEl.dataset.note;
    const sIdx = parseInt(noteEl.dataset.string, 10);
    const fret = parseInt(noteEl.dataset.fret, 10);
    const isChord = chordNoteSet.has(noteName);

    const inPattern =
      isCagedMode && activePatterns.length > 0
        ? activePatterns.some((p) => patternRules[p].inPattern(sIdx, fret))
        : !isCagedMode;

    const showInScale = isCagedMode
      ? !showCaged && inPattern && scaleNotes.has(noteName)
      : showChordTones
        ? isChord && isInChordPosition(fret, activeChordPosition)
        : arpeggioMode
          ? isChord
          : showScale && scaleNotes.has(noteName);
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
      return (
        patternRules[p].inPattern(sIdx, fret) &&
        patternRules[p].chordAllowed(sIdx, fret)
      );
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
  board.classList.remove(
    "show-scale",
    "show-chord",
    "show-arpeggio",
    "show-caged",
  );
  for (let p = 1; p <= 5; p++) {
    board.classList.remove(`pattern-${p}`);
  }

  patternButtons.forEach((btn) => {
    btn.classList.remove("active");
    btn.setAttribute("aria-pressed", "false");
  });

  document.querySelectorAll(".note").forEach((noteEl) => {
    noteEl.classList.remove(
      "in-scale",
      "root-note",
      "arp-step",
      "arp-muted",
      "caged-note",
    );
    const degreeEl = noteEl.querySelector(".degree");
    if (degreeEl) degreeEl.textContent = "";
    const arpIndex = noteEl.querySelector(".arp-index");
    if (arpIndex) arpIndex.textContent = "";
  });
}

function applyPatternState(patterns) {
  patterns.forEach((p) => {
    board.classList.add(`pattern-${p}`);
    const btn = patternButtons.find(
      (item) => item.dataset.pattern === String(p),
    );
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
if (highlightRootToggle)
  highlightRootToggle.addEventListener("change", updateScaleAndChord);
if (arpeggioToggle)
  arpeggioToggle.addEventListener("change", updateScaleAndChord);
if (arpeggioDirectionSelect) {
  arpeggioDirectionSelect.addEventListener("change", updateScaleAndChord);
}
if (chordPositionSelect) {
  chordPositionSelect.addEventListener("change", updateScaleAndChord);
}
trainingViewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setTrainingView(btn.dataset.trainingView);
    updateScaleAndChord();
  });
});

function setMode(mode) {
  if (mode === currentMode) return;
  if (currentMode === "training") {
    trainingState.root = rootSelect.value;
    trainingState.scale = scaleSelect.value;
    if (chordSelect) trainingState.chord = chordSelect.value;
    trainingState.trainingView = getTrainingView();
    if (highlightRootToggle)
      trainingState.highlightRoot = highlightRootToggle.checked;
    if (arpeggioToggle) trainingState.arpeggio = arpeggioToggle.checked;
    if (arpeggioDirectionSelect) {
      trainingState.arpeggioDirection = arpeggioDirectionSelect.value;
    }
    const currentChordPos = getActiveChordPosition();
    if (currentChordPos) trainingState.chordPosition = currentChordPos;
  } else if (currentMode === "caged") {
    cagedState.patterns = getActivePatterns();
    cagedState.cagedToggle = cagedToggle.checked;
  }

  document.body.classList.toggle("mode-training", mode === "training");
  document.body.classList.toggle("mode-caged", mode === "caged");
  modeButtons.forEach((btn) => {
    const isActive = btn.dataset.mode === mode;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });

  const trainingDisabled = mode !== "training";
  rootSelect.disabled = trainingDisabled;
  if (highlightRootToggle) highlightRootToggle.disabled = trainingDisabled;
  if (arpeggioToggle) arpeggioToggle.disabled = trainingDisabled;
  if (arpeggioDirectionSelect)
    arpeggioDirectionSelect.disabled = trainingDisabled;
  patternButtons.forEach((btn) => {
    btn.disabled = mode !== "caged";
  });
  cagedToggle.disabled = mode !== "caged";

  if (mode === "caged") {
    rootSelect.value = "C";
    scaleSelect.value = "major";
    if (chordSelect) chordSelect.value = "majorTriad";
    if (arpeggioToggle) arpeggioToggle.checked = false;
    if (arpeggioDirectionSelect) arpeggioDirectionSelect.value = "asc";
    cagedToggle.checked = cagedState.cagedToggle;
    if (cagedFretboardMount && fretboardShell) {
      cagedFretboardMount.appendChild(fretboardShell);
    }
    updateTrainingToast("点击任意品位即可发声；选择不同指型记忆不同把位音阶");
    resetBoardVisuals();
    applyPatternState(cagedState.patterns);
  } else if (mode === "training") {
    rootSelect.value = trainingState.root;
    scaleSelect.value = trainingState.scale;
    if (chordSelect) chordSelect.value = trainingState.chord;
    setChordPosition(trainingState.chordPosition);
    setTrainingView(trainingState.trainingView);
    if (highlightRootToggle)
      highlightRootToggle.checked = trainingState.highlightRoot;
    if (arpeggioToggle) arpeggioToggle.checked = trainingState.arpeggio;
    if (arpeggioDirectionSelect) {
      arpeggioDirectionSelect.value = trainingState.arpeggioDirection;
    }
    cagedToggle.checked = false;
    if (trainingFretboardSection && fretboardShell) {
      trainingFretboardSection.appendChild(fretboardShell);
    }
    updateTrainingToast(
      "点击任意品位即可发声；切换“高亮模式”可学习音阶与和弦分布。",
    );
    resetBoardVisuals();
  } else {
    resetBoardVisuals();
  }

  currentMode = mode;
  setTrainingView(getTrainingView());

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
let currentBeat = 0;
let metronomeBeatsPerBar = 4;

const lookahead = 25; // ms
const scheduleAheadTime = 0.1; // seconds

function initAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playMetronomeClick(time, accent) {
  initAudioContext();
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();

  osc.connect(gain);
  gain.connect(audioContext.destination);

  osc.frequency.value = accent ? 1200 : 850;
  osc.type = "sine";

  gain.gain.setValueAtTime(accent ? 0.28 : 0.2, time);
  gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

  osc.start(time);
  osc.stop(time + 0.1);
}

function updateMetronomeLights(activeBeat) {
  metronomeLights.forEach((light, idx) => {
    light.classList.toggle("active", idx === activeBeat);
    light.classList.toggle("accent", idx === 0);
  });
}

function parseBeatsPerBar(signatureValue) {
  const [beatsText] = String(signatureValue || "").split("/");
  const beats = parseInt(beatsText, 10);
  return Number.isFinite(beats) && beats > 0 ? beats : 4;
}

function renderMetronomeLights() {
  if (!metronomeLightRow) return;
  metronomeLightRow.innerHTML = "";
  metronomeLightRow.style.setProperty(
    "--beat-count",
    String(metronomeBeatsPerBar),
  );
  for (let i = 0; i < metronomeBeatsPerBar; i += 1) {
    const light = document.createElement("span");
    light.className = "metronome-light";
    metronomeLightRow.appendChild(light);
  }
  metronomeLights = Array.from(
    metronomeLightRow.querySelectorAll(".metronome-light"),
  );
  updateMetronomeLights(-1);
}

function updateMetronomeSignature(value) {
  metronomeBeatsPerBar = parseBeatsPerBar(value);
  currentBeat = 0;
  renderMetronomeLights();
}

function nextNote() {
  const secondsPerBeat = 60 / metronomeSpeed;
  nextNoteTime += secondsPerBeat;
}

function scheduler() {
  while (nextNoteTime < audioContext.currentTime + scheduleAheadTime) {
    const accent = currentBeat === 0;
    playMetronomeClick(nextNoteTime, accent);
    updateMetronomeLights(currentBeat);
    currentBeat = (currentBeat + 1) % metronomeBeatsPerBar;
    nextNote();
  }
}

function startMetronome() {
  if (metronomeActive) return;
  initAudioContext();
  metronomeActive = true;
  currentBeat = 0;
  nextNoteTime = audioContext.currentTime + 0.05;
  schedulerTimer = setInterval(scheduler, lookahead);
}

function stopMetronome() {
  metronomeActive = false;
  if (schedulerTimer) {
    clearInterval(schedulerTimer);
    schedulerTimer = null;
  }
  updateMetronomeLights(-1);
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
metronomeSpeedInput.addEventListener("change", (e) =>
  updateMetronomeSpeed(e.target.value),
);
metronomeSpeedInput.addEventListener("input", (e) =>
  updateMetronomeSpeed(e.target.value),
);
if (metronomeSignatureSelect) {
  metronomeSignatureSelect.addEventListener("change", (e) => {
    updateMetronomeSignature(e.target.value);
  });
  updateMetronomeSignature(metronomeSignatureSelect.value);
} else {
  renderMetronomeLights();
}

buildBoard();
setTrainingView(getTrainingView());
setMode("training");
updateScaleAndChord();

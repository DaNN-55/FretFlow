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

const flatToSharpMap = {
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
  Bb: "A#",
};

const circleData = [
  { major: "C", minor: "Am", dim: "Bdim" },
  { major: "G", minor: "Em", dim: "F#dim" },
  { major: "D", minor: "Bm", dim: "C#dim" },
  { major: "A", minor: "F#m", dim: "G#dim" },
  { major: "E", minor: "C#m", dim: "D#dim" },
  { major: "B", minor: "G#m", dim: "A#dim" },
  { major: "Gb", minor: "Ebm", dim: "Fdim" },
  { major: "Db", minor: "Bbm", dim: "Cdim" },
  { major: "Ab", minor: "Fm", dim: "Gdim" },
  { major: "Eb", minor: "Cm", dim: "Ddim" },
  { major: "Bb", minor: "Gm", dim: "Adim" },
  { major: "F", minor: "Dm", dim: "Edim" },
];

const circleOuterColors = [
  "#e7c8c8",
  "#eecfb2",
  "#e8d8b8",
  "#ecd277",
  "#7dcf12",
  "#82d0a2",
  "#b3d4d2",
  "#accfda",
  "#bcc9de",
  "#c6c4de",
  "#cec5e1",
  "#c7b6e0",
];

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
const circleWheel = document.getElementById("circleWheel");
const circlePrevBtn = document.getElementById("circlePrevBtn");
const circleNextBtn = document.getElementById("circleNextBtn");
const circleCurrentKey = document.getElementById("circleCurrentKey");
const circleToast = document.getElementById("circleToast");
const gtpUpload = document.getElementById("gtpUpload");
const phraseList = document.getElementById("phraseList");
const topTabButtons = Array.from(document.querySelectorAll("[data-top-tab]"));
const trainingTabPanel = document.getElementById("trainingTabPanel");
const phraseTabPanel = document.getElementById("phraseTabPanel");

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
const circleState = {
  startIndex: 0,
  selectedMajorIndex: null,
};
const phraseDemoItems = [];
let currentTopTab = "training";

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
const metronomeCollapseBtn = document.getElementById("metronomeCollapseBtn");
const fixedMetronome = document.querySelector(".fixed-metronome");
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

function playChordByLabel(chordLabel) {
  if (!chordLabel) return;

  unlockTrainingAudio();
  const normalized = chordLabel.replace("°", "dim").trim();
  let quality = "major";
  let root = normalized;

  if (normalized.endsWith("dim")) {
    quality = "dim";
    root = normalized.slice(0, -3);
  } else if (normalized.endsWith("m")) {
    quality = "minor";
    root = normalized.slice(0, -1);
  }

  const sharpRoot = flatToSharpMap[root] || root;
  const rootIndex = chromaticScale.indexOf(sharpRoot);
  if (rootIndex < 0) return;

  const intervals =
    quality === "minor" ? [0, 3, 7] : quality === "dim" ? [0, 3, 6] : [0, 4, 7];
  const baseMidi = 48 + rootIndex;
  intervals.forEach((interval, idx) => {
    playTrainingTone(baseMidi + interval, 0.9, idx * 0.02);
  });

  if (circleToast) {
    circleToast.textContent = `已播放和弦: ${chordLabel}`;
  }
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

function buildCircleWheel() {
  if (!circleWheel) return;
  circleWheel.innerHTML = "";

  const innerRing = document.createElement("div");
  innerRing.className = "circle-inner-ring";
  circleWheel.appendChild(innerRing);

  const minorLayer = document.createElement("div");
  minorLayer.className = "circle-label-layer minor-layer";
  circleWheel.appendChild(minorLayer);

  const majorLayer = document.createElement("div");
  majorLayer.className = "circle-label-layer major-layer";
  circleWheel.appendChild(majorLayer);

  circleData.forEach((item, idx) => {
    const majorLabel = document.createElement("span");
    majorLabel.className = "circle-chord major circle-card";
    majorLabel.textContent = item.major;
    majorLabel.dataset.index = String(idx);
    const minorLabel = document.createElement("span");
    minorLabel.className = "circle-chord minor circle-card";
    minorLabel.textContent = item.minor;
    minorLabel.dataset.index = String(idx);

    const deg = idx * 30 - 90;
    const rad = (deg * Math.PI) / 180;
    const majorRadius = 42;
    const minorRadius = 24;
    const majorX = 50 + Math.cos(rad) * majorRadius;
    const majorY = 50 + Math.sin(rad) * majorRadius;
    const minorX = 50 + Math.cos(rad) * minorRadius;
    const minorY = 50 + Math.sin(rad) * minorRadius;

    majorLabel.style.left = `${majorX}%`;
    majorLabel.style.top = `${majorY}%`;
    minorLabel.style.left = `${minorX}%`;
    minorLabel.style.top = `${minorY}%`;

    majorLabel.addEventListener("click", () => {
      circleState.selectedMajorIndex = idx;
      applyCircleHighlights(idx);
      const selected = circleData[idx];
      if (circleCurrentKey) {
        circleCurrentKey.textContent = `当前主音: ${selected.major} / ${selected.minor}`;
      }
    });

    majorLayer.appendChild(majorLabel);
    minorLayer.appendChild(minorLabel);
  });

  const center = document.createElement("div");
  center.className = "circle-center";
  circleWheel.appendChild(center);

  applyCircleHighlights(circleState.selectedMajorIndex);
}

function updateCircleWindow() {
  if (!circleWheel) return;
  const activeIdx =
    circleState.selectedMajorIndex == null
      ? circleState.startIndex
      : circleState.selectedMajorIndex;
  const center = circleData[activeIdx];
  if (circleCurrentKey) {
    circleCurrentKey.textContent = `当前主音: ${center.major} / ${center.minor}`;
  }
}

function shiftCircleWindow(step) {
  circleState.startIndex =
    (circleState.startIndex + step + circleData.length) % circleData.length;
  buildCircleWheel();
  updateCircleWindow();
}

function applyCircleHighlights(centerIdx) {
  if (!circleWheel) return;
  const majorEls = Array.from(
    circleWheel.querySelectorAll(".major-layer .circle-chord.major"),
  );
  const minorEls = Array.from(
    circleWheel.querySelectorAll(".minor-layer .circle-chord.minor"),
  );
  majorEls.forEach((el) => el.classList.remove("is-highlight"));
  minorEls.forEach((el) => el.classList.remove("is-highlight"));

  if (centerIdx == null) return;
  const prevIdx = (centerIdx - 1 + circleData.length) % circleData.length;
  const nextIdx = (centerIdx + 1) % circleData.length;
  const targets = new Set([centerIdx, prevIdx, nextIdx]);

  majorEls.forEach((el) => {
    const idx = parseInt(el.dataset.index, 10);
    if (targets.has(idx)) el.classList.add("is-highlight");
  });
  minorEls.forEach((el) => {
    const idx = parseInt(el.dataset.index, 10);
    if (targets.has(idx)) el.classList.add("is-highlight");
  });
}

function renderPhraseLibrary() {
  if (!phraseList) return;
  phraseList.innerHTML = "";

  if (phraseDemoItems.length === 0) {
    const empty = document.createElement("div");
    empty.className = "phrase-item placeholder";
    empty.textContent = "暂无上传文件";
    phraseList.appendChild(empty);
    return;
  }

  phraseDemoItems.forEach((item) => {
    const row = document.createElement("div");
    row.className = "phrase-item";

    const name = document.createElement("div");
    name.className = "phrase-name";
    name.textContent = item.name;

    const meta = document.createElement("div");
    meta.className = "phrase-meta";
    meta.textContent = `${item.sizeKB} KB · ${item.uploadedAt} · 待解析（Demo）`;

    row.appendChild(name);
    row.appendChild(meta);
    phraseList.appendChild(row);
  });
}

function handlePhraseUpload(event) {
  const files = Array.from(event.target.files || []);
  if (files.length === 0) return;

  files.forEach((file) => {
    phraseDemoItems.unshift({
      name: file.name,
      sizeKB: (file.size / 1024).toFixed(1),
      uploadedAt: new Date().toLocaleString("zh-CN", { hour12: false }),
    });
  });

  renderPhraseLibrary();
  event.target.value = "";
}

function setTopTab(tab) {
  const nextTab = tab === "phrase" ? "phrase" : "training";
  currentTopTab = nextTab;

  topTabButtons.forEach((btn) => {
    const isActive = btn.dataset.topTab === nextTab;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });

  if (trainingTabPanel) {
    trainingTabPanel.classList.toggle("active", nextTab === "training");
  }
  if (phraseTabPanel) {
    phraseTabPanel.classList.toggle("active", nextTab === "phrase");
  }

  document.body.classList.toggle("tab-training", nextTab === "training");
  document.body.classList.toggle("tab-phrase", nextTab === "phrase");
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

if (circlePrevBtn) {
  circlePrevBtn.addEventListener("click", () => shiftCircleWindow(-1));
}
if (circleNextBtn) {
  circleNextBtn.addEventListener("click", () => shiftCircleWindow(1));
}
if (gtpUpload) {
  gtpUpload.addEventListener("change", handlePhraseUpload);
}
topTabButtons.forEach((btn) => {
  btn.addEventListener("click", () => setTopTab(btn.dataset.topTab));
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
  document.body.classList.toggle("mode-circle", mode === "circle");
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
  if (circlePrevBtn) circlePrevBtn.disabled = mode !== "circle";
  if (circleNextBtn) circleNextBtn.disabled = mode !== "circle";

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
  } else if (mode === "circle") {
    resetBoardVisuals();
    updateCircleWindow();
    if (circleToast) {
      circleToast.textContent =
        "点击五度圈中的和弦可试听和弦音；使用“向左/向右切换”移动五度圈窗口。";
    }
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

function setMetronomeCollapsed(collapsed) {
  if (!fixedMetronome || !metronomeCollapseBtn) return;
  fixedMetronome.classList.toggle("is-collapsed", collapsed);
  metronomeCollapseBtn.textContent = collapsed ? "<" : ">";
  metronomeCollapseBtn.setAttribute(
    "aria-label",
    collapsed ? "展开节拍器" : "收起节拍器",
  );
  metronomeCollapseBtn.setAttribute("aria-expanded", String(!collapsed));
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

if (metronomeCollapseBtn && fixedMetronome) {
  let collapsed = false;
  setMetronomeCollapsed(collapsed);
  metronomeCollapseBtn.addEventListener("click", () => {
    collapsed = !collapsed;
    setMetronomeCollapsed(collapsed);
  });
}

buildBoard();
buildCircleWheel();
updateCircleWindow();
renderPhraseLibrary();
setTopTab("training");
setTrainingView(getTrainingView());
setMode("training");
updateScaleAndChord();

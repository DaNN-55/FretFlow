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
const chordSelect = document.getElementById("chordSelect");
const highlightRootToggle = document.getElementById("highlightRootToggle");

const patternButtons = Array.from(document.querySelectorAll("[data-pattern]"));
const cagedToggle = document.getElementById("cagedToggle");

const metronomeToggle = document.getElementById("metronomeToggle");
const metronomeSpeedInput = document.getElementById("metronomeSpeed");
const metronomeSpeedValue = document.getElementById("speedValue");

function getNotesFromFormula(root, intervals) {
  const rootIndex = chromaticScale.indexOf(root);
  return intervals.map((i) => chromaticScale[(rootIndex + i) % 12]);
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

      // 绘制品记
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

      noteEl.appendChild(label);
      noteEl.appendChild(degree);

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

function updateScaleAndChord() {
  const root = rootSelect.value;
  const scaleType = scaleSelect.value;
  const chordType = chordSelect.value;

  const scaleNotes = new Set(getNotesFromFormula(root, scaleFormulas[scaleType]));
  const chordFormula = chordFormulas[chordType];
  const chordNotes = getNotesFromFormula(root, chordFormula.intervals);
  const chordNoteSet = new Set(chordNotes);

  const degreeMap = new Map();
  chordNotes.forEach((note, idx) => {
    degreeMap.set(note, chordFormula.degrees[idx]);
  });

  const highlightRoot = highlightRootToggle.checked;

  document.querySelectorAll(".note").forEach((noteEl) => {
    const noteName = noteEl.dataset.note;
    const sIdx = parseInt(noteEl.dataset.string, 10);
    const fret = parseInt(noteEl.dataset.fret, 10);

    noteEl.classList.toggle("in-scale", scaleNotes.has(noteName));
    noteEl.classList.toggle("root-note", highlightRoot && noteName === root);

    const degreeEl = noteEl.querySelector(".degree");
    if (degreeEl) {
      degreeEl.textContent = degreeMap.get(noteName) || "";
    }

    for (let p = 1; p <= 5; p++) {
      const isChordTone = chordNoteSet.has(noteName);
      const allowed = patternRules[p].chordAllowed(sIdx, fret);
      noteEl.classList.toggle(`ct${p}`, isChordTone && allowed);
    }
  });
}

function togglePattern(num, btn) {
  board.classList.toggle(`pattern-${num}`);
  btn.classList.toggle("active");
  const isActive = btn.classList.contains("active");
  btn.setAttribute("aria-pressed", String(isActive));
}

function toggleCaged() {
  const isChecked = cagedToggle.checked;
  board.classList.toggle("caged-on", isChecked);
}

patternButtons.forEach((btn) => {
  btn.addEventListener("click", () => togglePattern(btn.dataset.pattern, btn));
});

cagedToggle.addEventListener("change", toggleCaged);
rootSelect.addEventListener("change", updateScaleAndChord);
scaleSelect.addEventListener("change", updateScaleAndChord);
chordSelect.addEventListener("change", updateScaleAndChord);
highlightRootToggle.addEventListener("change", updateScaleAndChord);

// 节拍器相关变量 (更稳定调度)
let metronomeActive = false;
let metronomeSpeed = 120;
let audioContext = null;
let nextNoteTime = 0;
let schedulerTimer = null;

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

buildBoard();
updateScaleAndChord();

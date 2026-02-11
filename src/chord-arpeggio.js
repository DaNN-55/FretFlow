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

const openStrings = ["E", "B", "G", "D", "A", "E"]; // 缂傚倸鍊搁崐鎼佸磹閹间礁纾归柟闂寸绾惧綊鏌熼梻瀵割槮缁炬儳缍婇弻鐔兼⒒鐎靛壊妲紒鐐劤缂嶅﹪寮婚悢鍏尖拻閻庨潧澹婂Σ顔剧磼閻愵剙鍔ょ紓宥咃躬瀵鎮㈤崗灏栨嫽闁诲酣娼ф竟濠偽ｉ鍓х＜闁绘劦鍓欓崝銈嗙節閳ь剟鏌嗗鍛姦濡炪倖甯掗崐褰掑吹閳ь剟鏌ｆ惔銏㈢叝闁告鍟块悾鐑藉箣閻愮數鐦堥梺绋挎湰鑿ら柛瀣崌楠炴帡骞橀崜浣烘婵犳鍠楅敃鈺呭储妤ｅ啫鍌ㄩ柣銏犳啞閳锋垹绱撴担濮戭亪鎮橀敃鍌涘珔闂侇剙绉甸悡鍐⒑閸噮鍎忔繛鎼櫍閺屸€崇暆鐎ｎ剛袦濡炪們鍨洪敃銏ゅ箖閵忕姷鏆嬮柣妤€鐗婇崵鍫ユ⒒閸屾瑧顦﹂柟纰卞亰瀵敻顢楅崟顒€鍓銈嗙墱閸嬫垿鍩€椤戣法绐旂€殿喗鎸虫慨鈧柍鈺佸暞閻濇娊姊绘担铏广€婇柛鎾寸箞閹兘顢涘В纭风秮椤㈡宕熼鑺ュ濠电偠鎻紞鈧い顐㈩樀瀹曟垿鎮╃紒妯煎幈闂佸搫鍊藉▔鏇㈡倿閸濄儮鍋撶憴鍕闁告梹鐟ラ悾椋庣矙鐠囩偓妫冮崺鈧い鎺戝鐎氬懘鏌ｉ弬鎸庢喐缂佺娀绠栭弻鐔衡偓娑欘焽閹冲啴鏌ｈ箛锝勯偗闁哄矉绻濆畷銊╊敊閸撗呭帨闂備浇顕栭崰鏍礊婵犲倻鏆﹂柛顐ｆ礀鎯熼梺闈涳紡閸涱偄浠紓鍌氬€搁崐鐑芥嚄閼稿灚鍙忛柟缁㈠枛缁犺銇勯幇鎯板悅闁?0闂?闂傚倸鍊搁崐鎼佸磹閹间礁纾归柟闂寸绾惧綊鏌熼梻瀵割槮缁炬儳婀遍埀顒傛嚀鐎氼參宕崇壕瀣ㄤ汗闁圭儤鍨归崐鐐差渻閵堝棗绗掓い锔垮嵆瀵煡顢旈崼鐔蜂画濠电姴锕ら崯鎵不婵犳碍鐓曢柍瑙勫劤娴滅偓淇婇悙顏勨偓鏍暜婵犲洦鍤勯柛顐ｆ礀閻撴繈鏌熼崜褏甯涢柣鎾寸洴閺屾稑鈽夐崡鐐典哗闂佸疇顕ч悧鎾诲蓟閺囥垹骞㈤柡鍥╁濡差噣姊虹€圭媭鍤欓梺甯秮閻涱喖顫滈埀顒€鐣峰鈧獮鎾诲箳閹惧瓨顓瑰┑鐘殿暜缁辨洟宕戦幋锕€纾归柡宥庡幖缁犳澘螖閿濆懎鏆欑痪鎯ь煼閺屾洟宕煎┑鍥ф櫟濠电偞鍨堕…鍥汲鐎ｎ喗鈷戞い鎾卞姂濡绢噣鎮楅棃娑氱劯婵﹥妞藉Λ鍐ㄢ槈濮橆剦鏆繝纰樻閸嬪懐绮欓幒妤€鐤鹃柛顐ｆ处閺佸棝鏌涚仦鍓х煂闁挎稒绮岄—鍐Χ閸℃﹩姊块梺绋款儐閸旀牠鎮ф惔銊︹拻濞达絽鎲￠崯鐐烘偨椤栨稑娴柡浣稿暣婵＄柉顦寸紒鎲嬬畱闇夐柣妯烘▕閸庡繒鈧懓鎲＄换鍌炲煘閹达附鍋愰柟缁樺俯娴犲ジ鎮楀▓鍨灕婵炲懏娲滈幑銏犫攽鐎ｎ偄浠洪梻鍌氱墛缁嬪牓寮搁崨顓涙斀闁绘劖婢樼亸鍐煕韫囨洖浜剧紒瀣灴閸┿垺鎯旈妸銉х杸濡炪倖甯掗崐濠氭偘椤曗偓濮婄粯鎷呴崨濠傛殘濠电偠顕滅粻鎾崇暦濡も偓閳诲酣骞囬鍛敜?闂?闂?
const openStringMidis = [64, 59, 55, 50, 45, 40]; // 缂傚倸鍊搁崐鎼佸磹閹间礁纾归柟闂寸绾惧綊鏌熼梻瀵割槮缁炬儳缍婇弻鐔兼⒒鐎靛壊妲紒鐐劤缂嶅﹪寮婚悢鍏尖拻閻庨潧澹婂Σ顔剧磼閻愵剙鍔ょ紓宥咃躬瀵鎮㈤崗灏栨嫽闁诲酣娼ф竟濠偽ｉ鍓х＜闁绘劦鍓欓崝銈嗙節閳ь剟鏌嗗鍛姦濡炪倖甯掗崐褰掑吹閳ь剟鏌ｆ惔銏㈢叝闁告鍟块悾鐑藉箣閻愮數鐦堥梺绋挎湰鑿ら柛瀣崌楠炴帡骞橀崜浣烘婵犳鍠楅敃鈺呭储妤ｅ啫鍌ㄩ柣銏犳啞閳锋垹绱撴担濮戭亪鎮橀敃鍌涘珔闂侇剙绉甸悡鍐⒑閸噮鍎忔繛鎼櫍閺屸€崇暆鐎ｎ剛袦濡炪們鍨洪敃銏ゅ箖閵忕姷鏆嬮柣妤€鐗婇崵鍫ユ⒒閸屾瑧顦﹂柟纰卞亰瀵敻顢楅崟顒€鍓銈嗙墱閸嬫垿鍩€椤戣法绐旂€殿喗鎸虫慨鈧柍鈺佸暞閻濇娊姊绘担铏广€婇柛鎾寸箞閹兘顢涘В纭风秮椤㈡宕熼鑺ュ濠电偠鎻紞鈧い顐㈩樀瀹曟垿鎮╃紒妯煎幈闂佸搫鍊藉▔鏇㈡倿閸濄儮鍋撶憴鍕闁告梹鐟ラ悾椋庣矙鐠囩偓妫冮崺鈧い鎺戝鐎氬懘鏌ｉ弬鎸庢喐缂佺娀绠栭弻鐔衡偓娑欘焽閹冲啴鏌ｈ箛锝勯偗闁哄矉绻濆畷銊╊敊閸撗呭帨闂備浇顕栭崰鏍礊婵犲倻鏆﹂柛顐ｆ礀鎯熼梺闈涳紡閸涱偄浠紓鍌氬€搁崐鐑芥嚄閼稿灚鍙忛柟缁㈠枛缁犺銇勯幇鎯板悅闁?0闂?闂?E4)闂?闂?闂?E2)

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

const keysMajor = ["C", "G", "D", "A", "E", "B", "F#", "Db", "Ab", "Eb", "Bb", "F"];
const keysMinor = ["Am", "Em", "Bm", "F#m", "C#m", "G#m", "D#m", "Bbm", "Fm", "Cm", "Gm", "Dm"];
const noteMap = {
  C: 0,
  "C#": 1,
  Db: 1,
  D: 2,
  "D#": 3,
  Eb: 3,
  E: 4,
  Fb: 4,
  "E#": 5,
  F: 5,
  "F#": 6,
  Gb: 6,
  G: 7,
  "G#": 8,
  Ab: 8,
  A: 9,
  "A#": 10,
  Bb: 10,
  B: 11,
  Cb: 11,
  "B#": 0,
};
const intervals = {
  majorScale: [0, 2, 4, 5, 7, 9, 11],
  minorScale: [0, 2, 3, 5, 7, 8, 10],
};
const romanToDegree = {
  I: 0,
  ii: 1,
  iii: 2,
  IV: 3,
  V: 4,
  vi: 5,
  viiDim: 6,
};
const progressionTemplates = [
  ["I", "IV", "V", "I"],
  ["I", "V", "vi", "IV"],
  ["ii", "V", "I"],
  ["I", "vi", "ii", "V"],
  ["vi", "IV", "I", "V"],
];
const circleConfig = {
  center: 360,
  outerRadius: 322,
  outerInnerRadius: 242,
  innerOuterRadius: 225,
  innerInnerRadius: 165,
  outerTextRadius: 282,
  innerTextRadius: 194,
  hitRadius: 34,
  pillMajorWidth: 74,
  pillMinorWidth: 78,
  pillHeight: 40,
  pillRadius: 10,
  coreRadius: 150,
  angleStep: 30,
  startAngleDeg: -90,
};

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
const circleModule = document.getElementById("circleModule");
const circleCurrentKey = document.getElementById("circleCurrentKey");
const circleKeyTitle = document.getElementById("circleKeyTitle");
const circleScaleNotes = document.getElementById("circleScaleNotes");
const circleMinorScaleNotes = document.getElementById("circleMinorScaleNotes");
const circleDiatonicChords = document.getElementById("circleDiatonicChords");
const circleMinorDiatonicChords = document.getElementById("circleMinorDiatonicChords");
const circleProgressions = document.getElementById("circleProgressions");
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
  activeIndex: 0,
  hoverIndex: null,
  derived: {
    majorScaleNotes: [],
    minorScaleNotes: [],
    majorDiatonicChords: [],
    minorDiatonicChords: [],
    progressions: [],
  },
  nodes: [],
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
  const normalized = chordLabel.replace("\u00B0", "dim").trim();
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
      `婵犵數濮烽弫鍛婃叏閻戣棄鏋侀柛娑橈攻閸欏繘鏌ｉ幋锝嗩棄闁哄绶氶弻娑樷槈濮楀牊鏁鹃梺鍛婄懃缁绘﹢寮婚敐澶婄闁挎繂妫Λ鍕⒑閸濆嫷鍎庣紒鑸靛哺瀵鎮㈤崗灏栨嫽闁诲酣娼ф竟濠偽ｉ鍓х＜闁绘劦鍓欓崝銈嗐亜椤撶姴鍘寸€殿喖顭烽弫鎰板川閸屾粌鏋庨柍璇查叄楠炲棜顦虫い鏂垮缁辨捇宕掑▎鎺戝帯婵犳鍠楅幐鎶藉箖濡警娼╅悹杞扮秿閿曞倹鐓曢柡鍥ュ妼閺嬨倝鏌ｉ妶鍌氫壕闂傚倷绀佸﹢閬嶅磻閹捐绠氶悘鐐跺▏濞戙垺鍊烽柣銏㈡暩閿涙繃绻涙潏鍓ф偧闁哄拋鍋婂畷濂割敂閸喓鍘辨繝鐢靛Т閸熸壆绮婚悙纰樺亾濞堝灝鏋涙い顓犲厴楠炲啴濮€閵堝棙鍎梺闈╁瘜閸橀箖宕㈤鐐粹拻濞达絿顭堥ˉ蹇涙煟閹惧磭澧︾€规洘濞婇、姘跺焵椤掆偓閻ｅ嘲鈹戦崶褏绐為梺褰掑亰閸樻悂骞忓ú顏呪拺闁告稑锕﹂埥澶愭煥閺囶亞鐣垫鐐诧躬瀹曟﹢顢旈崱娆欑床缂傚倸鍊烽悞锕傛晝椤愶附鍤€閻犳亽鍔夐崑鎾斥枔閸喗鐏堝銈庡幘閸忔﹢鐛崘顔碱潊闁靛牆妫欓崕顏堟⒑闂堚晛鐦滈柛娆忕箳濡叉劙寮婚妷锔规嫽婵炴挻鍩冮崑鎾寸箾娴ｅ啿鎳忓畷鏌ユ煙閻戞ɑ灏伴柛娆忕箻閺岋綁濮€閻樺啿鏆堥梺绋匡工婢у酣鍩€椤掆偓缁犲秹宕曢柆宓ュ洦瀵奸弶鎴犲幈闂佺鎻梽鍕偂濞嗘挻鐓犳繛鏉戭儐濞呭懎霉閻樺磭鐭掗柡灞界Х椤т線鏌涢幘纾嬪閻撱倝鏌″搴′簻鐎殿喗鐓″缁樼瑹閳ь剙顭囪閹囧幢濞存澘娲、娑㈡倷閺夋垳绨垫繝娈垮枟閵囨盯宕戦幘缁樼厸鐎光偓閳ь剟宕伴幇顒夌劷闊洦鏌ｉ崑鍛存煕閹般劍娅撻柍褜鍓欑粔鐟邦潖閾忓湱鐭欐繛鍡樺劤閸撻亶姊洪崨濠冣拹闁荤啿鏅涢锝嗙節濮橆厼浜滈梺鎯х箰濠€閬嶆晬濠婂啠鏀介柍钘夋閻忋儲绻涢崪鍐М闁诡喚鍏橀獮鎾诲箳閸℃ɑ鏉搁梻浣虹帛閸旀浜稿▎鎰珷闁挎繂妫涚粻鎯ь熆鐠轰警鍎戞繛鍙夋尦閺?<span class="toast-note">${noteName}</span> <span class="toast-meta">缂?{stringIdx + 1}闂?闂?缂?{fret}闂?闂?MIDI ${midi}</span>`,
      true,
    );
  } else {
    updateTrainingToast(
      `婵犵數濮烽弫鍛婃叏閻戣棄鏋侀柛娑橈攻閸欏繘鏌ｉ幋锝嗩棄闁哄绶氶弻娑樷槈濮楀牊鏁鹃梺鍛婄懃缁绘﹢寮婚敐澶婄闁挎繂妫Λ鍕⒑閸濆嫷鍎庣紒鑸靛哺瀵鎮㈤崗灏栨嫽闁诲酣娼ф竟濠偽ｉ鍓х＜闁绘劦鍓欓崝銈嗐亜椤撶姴鍘寸€殿喖顭烽弫鎰板川閸屾粌鏋庨柍璇查叄楠炲棜顦虫い鏂垮缁辨捇宕掑▎鎺戝帯婵犳鍠楅幐鎶藉箖濡警娼╅悹杞扮秿閿曞倹鐓曢柡鍥ュ妼閺嬨倝鏌ｉ妶鍌氫壕闂傚倷绀佸﹢閬嶅磻閹捐绠氶悘鐐跺▏濞戙垺鍊烽柣銏㈡暩閿涙繃绻涙潏鍓ф偧闁哄拋鍋婂畷濂割敂閸喓鍘辨繝鐢靛Т閸熸壆绮婚悙纰樺亾濞堝灝鏋涙い顓犲厴楠炲啴濮€閵堝棙鍎梺闈╁瘜閸橀箖宕㈤鐐粹拻濞达絿顭堥ˉ蹇涙煟閹惧磭澧︾€规洘濞婇、姘跺焵椤掆偓閻ｅ嘲鈹戦崶褏绐為梺褰掑亰閸樻悂骞忓ú顏呪拺闁告稑锕﹂埥澶愭煥閺囶亞鐣垫鐐诧躬瀹曟﹢顢旈崱娆欑床缂傚倸鍊烽悞锕傛晝椤愶附鍤€閻犳亽鍔夐崑鎾斥枔閸喗鐏堝銈庡幘閸忔﹢鐛崘顔碱潊闁靛牆妫欓崕顏堟⒑闂堚晛鐦滈柛娆忕箳濡叉劙寮婚妷锔规嫽婵炴挻鍩冮崑鎾寸箾娴ｅ啿鎳忓畷鏌ユ煙閻戞ɑ灏伴柛娆忕箻閺岋綁濮€閻樺啿鏆堥梺绋匡工婢у酣鍩€椤掆偓缁犲秹宕曢柆宓ュ洦瀵奸弶鎴犲幈闂佺鎻梽鍕偂濞嗘挻鐓犳繛鏉戭儐濞呭懎霉閻樺磭鐭掗柡灞界Х椤т線鏌涢幘纾嬪閻撱倝鏌″搴′簻鐎殿喗鐓″缁樼瑹閳ь剙顭囪閹囧幢濞存澘娲、娑㈡倷閺夋垳绨垫繝娈垮枟閵囨盯宕戦幘缁樼厸鐎光偓閳ь剟宕伴幇顒夌劷闊洦鏌ｉ崑鍛存煕閹般劍娅撻柍褜鍓欑粔鐟邦潖閾忓湱鐭欐繛鍡樺劤閸撻亶姊洪崨濠冣拹闁荤啿鏅涢锝嗙節濮橆厼浜滈梺鎯х箰濠€閬嶆晬濠婂啠鏀介柍钘夋閻忋儲绻涢崪鍐М闁诡喚鍏橀獮鎾诲箳閸℃ɑ鏉搁梻浣虹帛閸旀浜稿▎鎰珷闁挎繂妫涚粻鎯ь熆鐠轰警鍎戞繛鍙夋尦閺?${noteName} 闂傚倸鍊搁崐鎼佸磹閹间礁纾归柟闂寸绾惧綊鏌熼梻瀵割槮缁炬儳缍婇弻鐔兼⒒鐎靛壊妲紒鐐劤缂嶅﹪寮婚悢鍏尖拻閻庨潧澹婂Σ顔剧磼閻愵剙鍔ょ紓宥咃躬瀵鏁愭径濠勵吅闂佹寧绻傞幉娑㈠箻缂佹鍘遍梺闈涚墕閹冲酣顢旈銏＄厸閻忕偛澧藉ú瀛樸亜閵忊剝绀嬮柡浣瑰姍瀹曞崬鈻庡Ο鎭嶆氨绱撻崒娆掑厡闁稿鎹囧畷鏇㈠箮鐟欙絺鍋撻敃鍌涘€婚柦妯侯槼閹芥洟姊洪崫鍕窛闁哥姵鎸剧划缁樸偅閸愨晝鍘介梺閫涘嵆濞佳勬櫠椤栫偞鐓熸繝闈涙处閳锋帞绱掓潏銊ユ诞闁诡喗鐟╅、妤呭焵椤掑嫬绀夐柕鍫濇缁犲墽鐥銏╂缂佲檧鍋撻柣搴㈩問閸犳牠鈥﹂悜钘夋瀬鐎广儱顦粈瀣亜韫囨挻鍣瑰┑顖欏嵆濮婃椽鎳￠妶鍛呫垺绻涚拠褏鐣抽柕鍥ㄥ姍瀹曟﹢鍩￠崒姘紟闂佺懓鍚嬮悾顏堝礉瀹ュ鐓曢柟杈鹃檮閻撱垺淇婇娆掝劅婵″弶鎮傞弻锟犲幢濞嗗繑鐏堥梺鍝勬湰閻╊垶骞冮埡浣烘殾闁搞儜鈧幏浼存煟鎼淬埄鍟忛柛鐘崇墵閳ワ箓鏌ㄧ€ｂ晝绠氶梺褰掓？缁€渚€鎮″☉銏＄厱閻忕偛澧介悡顖滅磼閵娿儺鐓兼慨濠勭帛閹峰懘宕ㄦ繝鍌涙畼缂傚倷娴囬褔宕愭繝姘劦妞ゆ帊娴囨竟姗€鏌熼搹顐嗘垿骞堥妸鈺佺劦妞ゆ帒瀚悡蹇涙煕椤愶絿绠栨い銉у█閺?缂?{stringIdx + 1}闂傚倸鍊搁崐鎼佸磹閹间礁纾归柟闂寸绾惧綊鏌熼梻瀵割槮缁炬儳婀遍埀顒傛嚀鐎氼參宕崇壕瀣ㄤ汗闁圭儤鍨归崐鐐差渻閵堝棗绗掓い锔垮嵆瀵煡顢旈崼鐔蜂画濠电姴锕ら崯鎵不婵犳碍鐓曢柍瑙勫劤娴滅偓淇婇悙顏勨偓鏍暜婵犲洦鍤勯柛顐ｆ礀閻撴繈鏌熼崜褏甯涢柣鎾寸洴閺屾稑鈽夐崡鐐典哗闂佸疇顕ч悧鎾诲蓟閺囥垹骞㈤柡鍥╁濡差噣姊虹€圭媭鍤欓梺甯秮閻涱喖顫滈埀顒€鐣峰鈧獮鎾诲箳閹惧瓨顓瑰┑鐘殿暜缁辨洟宕戦幋锕€纾归柡宥庡幖缁犳澘螖閿濆懎鏆欑痪鎯ь煼閺屾洟宕煎┑鍥ф櫟濠电偞鍨堕…鍥汲鐎ｎ喗鈷戞い鎾卞姂濡绢噣鎮楅棃娑氱劯婵﹥妞藉Λ鍐ㄢ槈濮橆剦鏆繝纰樻閸嬪懐绮欓幒妤€鐤鹃柛顐ｆ处閺佸棝鏌涚仦鍓х煂闁挎稒绮岄—鍐Χ閸℃﹩姊块梺绋款儐閸旀牠鎮ф惔銊︹拻濞达絽鎲￠崯鐐烘偨椤栨稑娴柡浣稿暣婵＄柉顦寸紒鎲嬬畱闇夐柣妯烘▕閸庡繒鈧懓鎲＄换鍌炲煘閹达附鍋愰柟缁樺俯娴犲ジ鎮楀▓鍨灕婵炲懏娲滈幑銏犫攽鐎ｎ偄浠洪梻鍌氱墛缁嬪牓寮搁崨顓涙斀闁绘劖婢樼亸鍐煕韫囨洖浜剧紒瀣灴閸┿垺鎯旈妸銉х杸濡炪倖甯掗崐濠氭偘椤曗偓濮婄粯鎷呴崨濠傛殘濠电偠顕滅粻鎾崇暦濡も偓閳诲酣骞囬鍛敜婵犵數濮撮敃銈団偓姘ュ妽缁傚秴顭ㄩ崼鐔哄幍闂佸搫顦悘婵嬨€傚畷鍥╃＜閻庯綆鍘奸崥鍦磼鏉堛劌娴柛鈹惧亾濡炪倖甯掔€氼剛绮堥崘鈹夸簻闊洦鎸婚ˉ鐘绘煥濞戞瑧鐭岀紒杈ㄦ崌瀹曟帒鈻庨幋婵嗩瀴婵＄偑鍊ら崢鐓幟洪妸褍鍨濆┑鐘崇閸婇绱撻崼銏犘ョ紒鐘宠壘椤啴濡堕崱妤€顫囬梺鎼炲妼缂嶅﹤顕ｉ崘娴嬫瀻闁规儳顕崢鎾绘⒑閼恒儍顏埶囬挊澹╋綁宕ㄦ繛澶哥盎濡炪倖鍔х徊璺ㄧ不閻愭番浜滈柕蹇ョ磿婢х敻鏌熺粙鍖℃敾鐎垫澘瀚换婵嬪礋椤撴稒鐎肩紓?{fret}闂?闂?MIDI ${midi}`,
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

// Circle Mode: SVG rendering, state, keyboard, and derived music data.
function createSvgElement(tagName, attributes = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  Object.entries(attributes).forEach(([key, value]) => {
    el.setAttribute(key, String(value));
  });
  return el;
}

function toRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function polarToPoint(radius, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: circleConfig.center + Math.cos(rad) * radius,
    y: circleConfig.center + Math.sin(rad) * radius,
  };
}

function buildRingSegmentPath(innerRadius, outerRadius, startAngle, endAngle) {
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
  const outerStart = polarToPoint(outerRadius, startAngle);
  const outerEnd = polarToPoint(outerRadius, endAngle);
  const innerEnd = polarToPoint(innerRadius, endAngle);
  const innerStart = polarToPoint(innerRadius, startAngle);
  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

function normalizeCircleIndex(index) {
  return (index + keysMajor.length) % keysMajor.length;
}

function parseNoteToken(note) {
  const match = String(note).match(/^([A-G])(#{1,2}|b{1,2})?$/);
  if (!match) return null;
  return {
    letter: match[1],
    accidental: match[2] || "",
  };
}

function accidentalFromDiff(diff) {
  if (diff === 0) return "";
  if (diff === 1) return "#";
  if (diff === 2) return "##";
  if (diff === 11) return "b";
  if (diff === 10) return "bb";
  return "";
}

function computeScale(rootKey, mode = "major") {
  const letters = ["C", "D", "E", "F", "G", "A", "B"];
  const naturalMap = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  const token = parseNoteToken(rootKey);
  if (!token || noteMap[rootKey] == null) return [];

  const startLetterIndex = letters.indexOf(token.letter);
  const rootPitch = noteMap[rootKey];
  const formula = mode === "minor" ? intervals.minorScale : intervals.majorScale;
  return formula.map((step, degreeIndex) => {
    const targetPitch = (rootPitch + step) % 12;
    const letter = letters[(startLetterIndex + degreeIndex) % letters.length];
    const naturalPitch = naturalMap[letter];
    const diff = (targetPitch - naturalPitch + 12) % 12;
    return `${letter}${accidentalFromDiff(diff)}`;
  });
}

function buildChordName(scaleNote, quality) {
  if (quality === "minor") return `${scaleNote}m`;
  if (quality === "dim") return `${scaleNote}\u00B0`;
  return scaleNote;
}

function computeMajorChords(scaleNotes) {
  const romans = ["I", "ii", "iii", "IV", "V", "vi", "vii\u00B0"];
  const qualities = ["major", "minor", "minor", "major", "major", "minor", "dim"];
  return romans.map((roman, idx) => ({
    roman,
    name: buildChordName(scaleNotes[idx], qualities[idx]),
  }));
}

function computeMinorChords(scaleNotes) {
  const romans = ["i", "ii\u00B0", "III", "iv", "v", "VI", "VII"];
  const qualities = ["minor", "dim", "major", "minor", "minor", "major", "major"];
  return romans.map((roman, idx) => ({
    roman,
    name: buildChordName(scaleNotes[idx], qualities[idx]),
  }));
}

function resolveDegree(roman) {
  if (roman === "viiDim" || roman === "vii°" || roman === "vii\u00B0") return 6;
  return romanToDegree[roman];
}
function computeProgressions(diatonicChords) {
  return progressionTemplates.map((template) => {
    const mappedChords = template.map((roman) => {
      const degree = resolveDegree(roman);
      return diatonicChords[degree] ? diatonicChords[degree].name : roman;
    });
    return {
      roman: template.join(" - "),
      value: mappedChords.join(" - "),
    };
  });
}

function computeCircleDerived(activeIndex) {
  const majorKey = keysMajor[activeIndex];
  const minorKey = keysMinor[activeIndex];
  const majorScaleNotes = computeScale(majorKey, "major");
  const minorScaleNotes = computeScale(minorKey.replace(/m$/, ""), "minor");
  const majorDiatonicChords = computeMajorChords(majorScaleNotes);
  const minorDiatonicChords = computeMinorChords(minorScaleNotes);
  const progressions = computeProgressions(majorDiatonicChords);
  return {
    majorScaleNotes,
    minorScaleNotes,
    majorDiatonicChords,
    minorDiatonicChords,
    progressions,
  };
}

function buildCircleKeyItem(index, type, label, radius, pillWidth, parentGroup) {
  const angle = circleConfig.startAngleDeg + index * circleConfig.angleStep;
  const point = polarToPoint(radius, angle);
  const item = createSvgElement("g", {
    class: `key-item ${type}`,
    "data-index": index,
    role: "option",
    "aria-selected": "false",
    id: `circle-${type}-${index}`,
  });

  const hitArea = createSvgElement("circle", {
    class: "key-hit-area",
    cx: point.x,
    cy: point.y,
    r: circleConfig.hitRadius,
  });
  const pill = createSvgElement("rect", {
    class: "key-pill",
    x: point.x - pillWidth / 2,
    y: point.y - circleConfig.pillHeight / 2,
    width: pillWidth,
    height: circleConfig.pillHeight,
    rx: circleConfig.pillRadius,
    ry: circleConfig.pillRadius,
  });
  const text = createSvgElement("text", {
    class: "key-text",
    x: point.x,
    y: point.y + 1,
  });
  text.textContent = label;

  item.appendChild(hitArea);
  item.appendChild(pill);
  item.appendChild(text);
  item.addEventListener("mouseenter", () => {
    circleState.hoverIndex = index;
    render();
  });
  item.addEventListener("mouseleave", () => {
    if (circleState.hoverIndex === index) {
      circleState.hoverIndex = null;
      render();
    }
  });
  item.addEventListener("click", () => setActive(index));

  parentGroup.appendChild(item);
  return item;
}

function buildCircle() {
  if (!circleWheel) return;
  circleWheel.innerHTML = "";
  circleState.nodes = [];

  const ringLayer = createSvgElement("g", { class: "circle-ring-layer" });
  for (let idx = 0; idx < keysMajor.length; idx += 1) {
    const centerAngle = circleConfig.startAngleDeg + idx * circleConfig.angleStep;
    const startAngle = centerAngle - circleConfig.angleStep / 2;
    const endAngle = centerAngle + circleConfig.angleStep / 2;
    const outerSegment = createSvgElement("path", {
      class: "circle-ring-segment outer-segment",
      d: buildRingSegmentPath(
        circleConfig.outerInnerRadius,
        circleConfig.outerRadius,
        startAngle,
        endAngle,
      ),
      fill: circleOuterColors[idx],
    });
    const innerSegment = createSvgElement("path", {
      class: "circle-ring-segment inner-segment",
      d: buildRingSegmentPath(
        circleConfig.innerInnerRadius,
        circleConfig.innerOuterRadius,
        startAngle,
        endAngle,
      ),
      fill: toRgba(circleOuterColors[idx], 0.45),
    });
    ringLayer.appendChild(outerSegment);
    ringLayer.appendChild(innerSegment);
  }
  circleWheel.appendChild(ringLayer);

  const innerCore = createSvgElement("circle", {
    cx: circleConfig.center,
    cy: circleConfig.center,
    r: circleConfig.coreRadius,
    fill: "#f3f7fd",
    stroke: "#d5e2f9",
    "stroke-width": 2,
  });
  circleWheel.appendChild(innerCore);

  const keyLayer = createSvgElement("g", { class: "circle-key-layer" });
  for (let idx = 0; idx < keysMajor.length; idx += 1) {
    const majorNode = buildCircleKeyItem(
      idx,
      "major",
      keysMajor[idx],
      circleConfig.outerTextRadius,
      circleConfig.pillMajorWidth,
      keyLayer,
    );
    const minorNode = buildCircleKeyItem(
      idx,
      "minor",
      keysMinor[idx],
      circleConfig.innerTextRadius,
      circleConfig.pillMinorWidth,
      keyLayer,
    );
    circleState.nodes.push({ majorNode, minorNode });
  }
  circleWheel.appendChild(keyLayer);
}

function renderCircleInfo() {
  const majorKey = keysMajor[circleState.activeIndex];
  const minorKey = keysMinor[circleState.activeIndex];
  const {
    majorScaleNotes,
    minorScaleNotes,
    majorDiatonicChords,
    minorDiatonicChords,
    progressions,
  } = circleState.derived;

  if (circleCurrentKey) {
    circleCurrentKey.textContent = `Current key: ${majorKey} / ${minorKey}`;
  }
  if (circleKeyTitle) {
    circleKeyTitle.textContent = `${majorKey} / ${minorKey}`;
  }
  if (circleScaleNotes) {
    circleScaleNotes.innerHTML = "";
    majorScaleNotes.forEach((note) => {
      const chip = document.createElement("span");
      chip.className = "circle-chip";
      chip.textContent = note;
      circleScaleNotes.appendChild(chip);
    });
  }
  if (circleMinorScaleNotes) {
    circleMinorScaleNotes.innerHTML = "";
    minorScaleNotes.forEach((note) => {
      const chip = document.createElement("span");
      chip.className = "circle-chip";
      chip.textContent = note;
      circleMinorScaleNotes.appendChild(chip);
    });
  }
  if (circleDiatonicChords) {
    const romanRow = majorDiatonicChords
      .map((item) => `<span class="roman-cell">${item.roman}</span>`)
      .join("");
    const chordRow = majorDiatonicChords
      .map((item) => `<span class="chord-cell">${item.name}</span>`)
      .join("");
    circleDiatonicChords.innerHTML = `
      <div class="circle-diatonic-grid">
        <div class="label">Major</div>
        <div class="row">${romanRow}</div>
        <div class="row">${chordRow}</div>
      </div>
    `;
  }
  if (circleMinorDiatonicChords) {
    const romanRow = minorDiatonicChords
      .map((item) => `<span class="roman-cell">${item.roman}</span>`)
      .join("");
    const chordRow = minorDiatonicChords
      .map((item) => `<span class="chord-cell">${item.name}</span>`)
      .join("");
    circleMinorDiatonicChords.innerHTML = `
      <div class="circle-diatonic-grid">
        <div class="label">Minor</div>
        <div class="row">${romanRow}</div>
        <div class="row">${chordRow}</div>
      </div>
    `;
  }
  if (circleProgressions) {
    circleProgressions.innerHTML = "";
    progressions.forEach((item) => {
      const row = document.createElement("div");
      row.className = "circle-row";
      row.innerHTML = `<span class="roman">${item.roman}</span><span class="value">${item.value}</span>`;
      circleProgressions.appendChild(row);
    });
  }
}
function renderCircle() {
  const relatedIndices = new Set([
    normalizeCircleIndex(circleState.activeIndex - 1),
    normalizeCircleIndex(circleState.activeIndex),
    normalizeCircleIndex(circleState.activeIndex + 1),
  ]);
  circleState.nodes.forEach((node, idx) => {
    const isActive = idx === circleState.activeIndex;
    const isRelated = relatedIndices.has(idx);
    const isHover = idx === circleState.hoverIndex && !isActive;
    [node.majorNode, node.minorNode].forEach((el) => {
      el.classList.toggle("is-active", isActive);
      el.classList.toggle("is-related", isRelated);
      el.classList.toggle("is-hover", isHover);
      el.setAttribute("aria-selected", String(isActive));
    });
  });
  if (circleWheel) {
    circleWheel.setAttribute(
      "aria-activedescendant",
      `circle-major-${circleState.activeIndex}`,
    );
  }
  renderCircleInfo();
}
function render() {
  renderCircle();
}

function setActive(index) {
  circleState.activeIndex = normalizeCircleIndex(index);
  circleState.hoverIndex = null;
  circleState.derived = computeCircleDerived(circleState.activeIndex);
  render();
}

function shiftCircleWindow(step) {
  setActive(circleState.activeIndex + step);
}

function handleCircleKeyboard(event) {
  if (currentMode !== "circle") return;
  if (
    event.target &&
    ["INPUT", "SELECT", "TEXTAREA"].includes(event.target.tagName)
  ) {
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    setActive(circleState.activeIndex - 1);
    return;
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    setActive(circleState.activeIndex + 1);
    return;
  }
  if (event.key === "Enter" && circleState.hoverIndex != null) {
    event.preventDefault();
    setActive(circleState.hoverIndex);
  }
}

function renderPhraseLibrary() {
  if (!phraseList) return;
  phraseList.innerHTML = "";

  if (phraseDemoItems.length === 0) {
    const empty = document.createElement("div");
    empty.className = "phrase-item placeholder";
    empty.textContent = "No uploaded files";
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
    meta.textContent = `${item.sizeKB} KB | ${item.uploadedAt} | Pending parse (Demo)`;

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
document.addEventListener("keydown", handleCircleKeyboard);
if (circleModule) {
  circleModule.addEventListener("keydown", handleCircleKeyboard);
}

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
    updateTrainingToast("Tap any fret to play. Use different CAGED shapes for position memory.");
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
      "Tap any fret to play. Switch highlight mode to study scales and chords.",
    );
    resetBoardVisuals();
  } else if (mode === "circle") {
    resetBoardVisuals();
    render();
    if (circleModule) {
      circleModule.focus({ preventScroll: true });
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

// 闂傚倸鍊搁崐鎼佸磹閹间礁纾归柟闂寸绾惧綊鏌熼梻瀵割槮缁炬儳缍婇弻鐔兼⒒鐎靛壊妲紒鐐劤缂嶅﹪寮婚悢鍏尖拻閻庨潧澹婂Σ顔剧磼閻愵剙鍔ょ紓宥咃躬瀵鏁愭径濠勵吅闂佹寧绻傞幉娑㈠箻缂佹鍘遍梺闈涚墕閹冲酣顢旈銏＄厸閻忕偛澧藉ú瀛樸亜閵忊剝绀嬮柡浣瑰姍瀹曞崬鈻庡Ο鎭嶆岸姊婚崒娆掑厡妞ゎ厼鐗忛幃顕€顢曢敃鈧粈澶愬箹濞ｎ剙濡肩紒鐘靛枛閺岀喖姊荤€靛壊妲紓渚囧亜缁夊綊寮诲☉銏╂晝闁绘灏欐禒鑲╃磽娴ｉ绛忕紒鐘虫尭椤繐煤椤忓嫪绱堕梺鍛婃处閸樻悂寮搁崱娑欌拺闁告稑锕﹂幊鍐⒑鐢喚鍒版い鏇秮椤㈡洟鏁冮埀顒傜矆閸愨斂浜滈柡鍐ㄥ€瑰▍鏇㈡煕濞嗗繑顥㈡慨濠冩そ瀹曨偊宕熼鈧ˇ鈺侇渻閵堝啫濡奸柟鍐茬箳缁顓兼径濠勵槶閻熸粌绻掓竟鏇熺附閸涘﹦鍘介梺閫涘嵆濞佳勬櫠椤曗偓閺屾盯寮拠娴嬪亾濡ゅ啯顫曢柟鐐墯閸氬鏌涘鍐ㄦ殺闁告凹鍋勮灃闁绘﹢娼ф禒婊堟煕閻曚礁浜伴柟顕€绠栭弫鎾绘偐閼碱剦鍚嬮梻浣瑰劤濞存岸宕戦崱娑樼劦妞ゆ巻鍋撴い顓炲槻铻為柛娑欐儗閺佸啴鏌曡箛濞惧亾閹颁焦袩闂傚倷鑳堕幊鎾绘儍閻戣棄鐤炬繝濠傛噽閻鏌熼悜妯诲暗闂傚嫬瀚伴弻娑樷槈濡垵鐗撻獮蹇撁洪鍛嫼缂佺虎鍘奸幊搴㈢瑜版帗鐓曢悗锝庡亞閳洖菐閸パ嶈含闁瑰磭鍋ゆ俊鐑藉Χ閸モ晝鏆板┑锛勫亼閸婃牠宕濋幋锕€鍨傜憸鐗堝笒濮规煡鏌ㄥ┑鍡樼闁稿鎸搁埢鎾诲垂椤旂晫浠屾俊鐐€栧▔锕傚炊瑜忛崣鈧┑鐘灱濞夋盯鈥﹂鍕亗闁靛鏅涚粻鍦磼椤旀娼愰柛銈嗘礃閵囧嫯绠涢幘鏉戞缂備浇顕уΛ婵嬪蓟閿濆绠涢柛蹇撴憸閻╁酣姊洪柅鐐茶嫰婢ь垶鏌涢妸銉т虎闁伙絽鍢查埞鎴﹀幢濞嗘劖鐣烽梻浣告啞濞诧箓宕戦崱娑欏仾闁搞儜鈧弨浠嬫煃閽樺顥滈柣蹇曞枛閹綊鍩€椤掑嫭鏅濋柍褜鍓熼垾锕傚炊椤掆偓閸愨偓閻熸粌顦靛銊︾鐎ｎ偆鍘藉┑鈽嗗灠閹碱偊寮抽柆宥嗙厱闁靛牆楠告晶鎾煛鐏炵澧查柟宄版嚇瀹曨偊濡烽幇灞芥处閻撴稓鈧厜鍋撻悗锝庡墰琚︽俊銈囧Х閸嬫稑煤椤擃潿鈧礁螖娴ｅ摜绐炴繝鐢靛Т閸犳岸宕埀顒勬⒒閸屾艾鈧绮堟笟鈧獮澶愭晸閻樿櫕娅囬梺鍐叉惈閸婂銆呴崣澶岀瘈闂傚牊绋撴晶娑氣偓瑙勬礀瀵墎鎹㈠┑瀣棃婵炴垵宕崜閬嶆⒑缁嬫鍎嶉柛鏃€鍨甸～蹇旂節濮橆剟鍞堕梺缁樻閵嗏偓闁哄妫冨铏圭矙濞嗘儳鍓遍梺鍦嚀濞差參濡存担绯曟闁靛繆鈧枼鍋撻悜鑺ョ厾缁炬澘宕晶缁樹繆閼碱剙顣煎ǎ鍥э躬閹瑩顢旈崟銊ヤ壕闁靛牆顦崒銊ッ归悩宸剰闁搞劌鍊婚埀顒冾潐濞叉牕煤閿曞偊缍栭柡鍥ュ灪閻撴瑩寮堕崼銉х暫婵＄虎鍣ｉ弻宥夋煥鐎ｎ亞鐟ㄩ梺闈涙鐢帡锝炲┑瀣櫜闁告侗鍓欓ˉ姘攽閻樺灚鏆╅柛瀣耿瀹曠娀鎮╃拠鑼€為梺闈涱焾閸庢壆绱旈弴鐐╂斀闁绘ê鐏氶弳鈺佲攽椤旇姤缍戦悡銈夋煥閺囩偛鈧摜澹曟繝姘厱鐎光偓閳ь剟宕戦悙鐑樺亗闁告劦鍠楅悡蹇擃熆閼哥數銆掗柣锝呭船椤儻顧侀柛銊ㄤ含閹广垹鈽夐姀鐘殿槯闂佸吋绁撮弲娑㈠煕瀹€鍕拺闁告繂瀚銈夋煕閳╁啰鎳呴柡澶嬫倐濮婃椽鎮烽弶搴撴寖濡炪們鍎查崝妤€鈽夐悽绋跨劦妞ゆ帒瀚埛鎺懨归敐鍫綈闁靛洨鍠栭弻娑樜熼崷顓犵厯闂佽鍠氶崗姗€宕洪敓鐘插窛妞ゆ挾濮烽弳顐︽煟閻斿摜鐭屽褎顨堥弫顕€骞掗弮鍌欑瑝闂佸湱鍎ら〃鍡涙偂濞嗘挻鐓熼柟瀵镐紳椤忓牊鍊堕柕澶涜礋娴滄粍銇勯幒鍡椾壕濡炪倖鍨甸幊姗€鍨鹃弮鍫濈妞ゆ柨妲堣閺屾盯鍩勯崘鍓у姺闂佸憡鐟ュΛ妤呭煘閹达附鍊烽柛娆忣槴閺嬫瑩姊洪崨濞掝亪濡堕幖浣规櫜闁绘劕澧庨悿鈧梺鐟板綖閻掞箑顪冩禒瀣ㄢ偓渚€寮崼婵堫槹濡炪倕绻愬Λ娑㈠磹閻愮儤鈷掗柛灞剧懅缁愭梹绻涙担鍐叉硽閸ヮ剦鏁囬柕蹇曞Х閿涚喖姊洪崫鍕潶闁稿孩鐓″畷鎰板醇閺囩喓鍘遍梺鏂ユ櫅閸熶即鍩婇弴銏＄厓闂佸灝顑呴悘鈺冪磼鏉堛劌绗ч柍褜鍓ㄧ紞鍡樼濠靛纾婚柕澶涜礋娴滄粓骞栧ǎ顒€鐒烘繛鍫熸礋閺屾洟宕惰椤忣厽銇勯姀鈽呰€垮┑顔瑰亾闂佹枼鏅涢崯顖氣枔缁嬪簱鏀介柣鎴濇川閸掔増绻涚仦鍌氣偓婵嬪极閸愵噮鏁傞柛顐ｇ箘閻ｆ椽姊烘导娆戝埌闁活剙銈搁幆灞解枎閹炬潙浠梺璇″幗鐢帗淇婇崸妤佺厸濠㈣泛锕ラ崯鐐睬庨崶褝韬柟顔界懇椤㈡棃宕熼妸銉ゅ闂佸搫绋侀崢鑲╃不閺夎鏃堟晲閸涱厽娈紒鐐劤椤兘寮婚敐澶婄睄闁搞儺鐓堟禒鈺呮⒑缂佹鐭婃い顓犲厴瀵鏁愭径濠勭杸濡炪倖姊婚崢褎淇婂ú顏呪拺闁规儼濮ら弫閬嶆煕閵娿儳绉烘鐐差樀楠炴牗鎷呴悷棰佺綍闂備礁澹婇崑鍛崲閸曨垱鍋￠柕濠忓缁犻箖鎮楀☉娆樼劷闁活厼妫濋弻娑樜旀担绯曟灆閻庢鍠涢褔鍩ユ径濠庢建闁糕剝锚缂傛捇姊绘笟鈧埀顒傚仜閼活垱鏅堕幍顔剧＜妞ゆ梻鈷堥悡鑲┾偓娈垮枛閳ь剛鍣ュΣ楣冩⒑?(闂傚倸鍊搁崐鎼佸磹閹间礁纾归柟闂寸绾惧綊鏌熼梻瀵割槮缁炬儳缍婇弻鐔兼⒒鐎靛壊妲紒鐐劤缂嶅﹪寮婚悢鍏尖拻閻庨潧澹婂Σ顔剧磼閹冣挃闁硅櫕鎹囬垾鏃堝礃椤忎礁浜鹃柨婵嗙凹缁ㄥジ鏌熼惂鍝ョМ闁哄矉缍侀、姗€鎮欓幖顓燁棧闂備線娼уΛ娆戞暜閹烘缍栨繝闈涱儐閺呮煡鏌涘☉鍗炲妞ゃ儲鑹鹃埞鎴炲箠闁稿﹥顨嗛幈銊╂倻閽樺锛涢梺缁樺姉閸庛倝宕戠€ｎ喗鐓熸俊顖濆吹濠€浠嬫煃瑜滈崗娑氭濮橆剦鍤曢柟缁㈠枛椤懘鏌ｅ鈧褔鐛崼鐔虹瘈婵炲牆鐏濋弸鐔兼煥閺囨娅婄€规洏鍨虹粋鎺斺偓锝庘偓顓ㄩ檮缁绘繈妫冨☉娆樻闂佽　鍋撳ù鐘差儐閳锋棃鏌涢妷顔煎闁哄嫨鍎甸弻鈥崇暤椤旇壈瀚版繛鍫亰濮婃椽宕ㄦ繝鍐槱闂佺锕︽繛鈧柟顔哄灲閹煎綊宕烽銊у簥濠电姷顣藉Σ鍛村垂闂堟稓鏆﹀ù锝呭暔娴滃綊鏌ㄥ┑鍡橆棤缂佲檧鍋撶紓浣哄亾濠㈡﹢藝鏉堚晛顥氶柛褎顨嗛悡鏇㈡倵閿濆骸浜滈柣蹇擃嚟閳ь剝顫夊ú姗€宕濆▎蹇ｅ殨濞寸姴顑愰弫鍥煟閹邦収鍟忛柛鐐茬埣濮婄粯鎷呴崨濠呯闂佹儳绻愰柊锝呯暦娴兼潙鍐€妞ゆ挾鍠庨埀顒€娼￠弻娑⑩€﹂幋婵呯按婵炲瓨绮嶇划鎾诲蓟閻旂厧浼犻柛鏇ㄥ墻濡偞绻涚€涙鐭婂褏鏅Σ鎰板箳濡も偓缁€鍫㈡喐閹存繍鐎堕柟闂寸劍閻撴洘淇婇姘儓闁抽攱妫冮弻娑㈠箳閹捐櫕璇為悗娈垮櫘閸ｏ絽鐣锋總鍛婂亜闁告繂瀚瑧闂備浇顕ф鍝ョ不瀹ュ纾块柛妤冨€ｅ☉妯兼殕闁告洦鍋嗛鍡欑磽閸屾瑧鍔嶆い顓炴川缁粯銈ｉ崘銊ч獓闂佸壊鍋呯换鍌炲煕閺冨牊鐓欐い鏃傤儠閸嬨垽鏌″畝瀣М闁糕晛瀚板畷姗€鍩℃繝鍐炬闂佽姘﹂～澶娒洪悢濂夌劷鐟滄棃宕洪姀鈩冨劅闁靛鍎抽悿鈧俊鐐€栭幐楣冨磻濞戞瑥顕遍幖娣灮缁♀偓濠电偛鐗嗛悘婵嬪几閻旀悶浜滈柕濞垮劜閸ゅ洭鏌熼銊ユ閻も偓濠电偞鍨堕悷銉︾婵傚憡鈷戞慨鐟版搐閻忊晠鏌熺拠褏绡€闁诡噯绻濇俊鐑芥晜閸撗呮闂傚倸鍊搁悧濠勭矙閹惧瓨娅犻柡鍥╀紳瑜版帗鍋戦柛娑卞弾濞差參姊洪柅鐐茶嫰婢ь噣鏌ｈ箛鏃囧妞ゎ厼鐏濊灒閻忓繑鐗曟禍鐐叏濡厧甯舵繛鍛Ч閺屾盯鍩為幆褌澹曞┑锛勫亼閸婃牜鏁幒妤佹櫇闁挎柨澧介惌鎾绘煟閵忕姵鍟為柣鎾存礋閻擃偊宕堕妸锔绘闂佸吋濯藉▔鏇㈠焵椤掍緡鍟忛柛鐘虫崌瀹曟繈骞嬪┑鍫熸濠碘槅鍨伴妶浠嬪捶椤撴稑浜鹃柨婵嗛娴滄繈鏌℃径瀣€愭慨濠勭帛閹峰懘鎼归悷鎵偧闂備礁鎲″鐟懊洪弽顓ф晪闁挎繂顦柋鍥煛閸モ晛浠ч柛妯绘そ濮婃椽宕崟顒€绐涙繛鏉戝悑缁诲牓骞冮悜鑺ョ劷闁挎梹鍎冲鎶芥⒒娴ｅ憡鍟炴繛璇х畵瀹曘垺銈ｉ崘鈺佷痪闂佸憡娲﹂崹閬嶅磹閻㈠憡鍋℃繛鍡楃箰椤忣亞绱掗埀顒勫礃閳哄啰顔曢梺鍛婄懃椤﹁鲸鏅堕崹顐犱簻闁靛繆妲勯懓璺ㄢ偓瑙勬礃椤ㄥ﹪骞冮埄鍐╁劅闁挎繂娲ㄥ畵渚€姊绘担绛嬪殭闁告垹鏅槐鐐哄幢濞戞顦┑鐐叉閹告儳鐣垫担閫涚箚闁靛牆鎳忛崳娲煃闁垮绗掗棁澶愭煥濠靛棙鍣洪柛鐔哄仱閺岀喖顢涘鍗炩叺闂佸搫鏈粙鎺旀崲濠靛纾兼繛鎴炵矌椤㈠懘姊绘笟鈧埀顒傚仜閼活垱鏅舵导瀛樼厽闁绘梻顭堥埢鏇犫偓瑙勬礃閸庡ジ藝閹绢喗鐓涢悘鐐垫櫕婢э附鎱ㄦ繝鍛仩缂佽鲸甯掕灒闁告繂瀚峰鏇㈡⒒娴ｄ警鐒剧紒銊︽そ瀹曟劕鈹戠€ｎ亞鐣?
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
    collapsed ? "Expand metronome" : "Collapse metronome",
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
buildCircle();
setActive(0);
renderPhraseLibrary();
setTopTab("training");
setTrainingView(getTrainingView());
setMode("training");
updateScaleAndChord();






import { computed, ref } from "vue";
import { defineStore } from "pinia";

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

const noteNamesBySignature = {
  sharp: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  flat: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
};

const majorRoman = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];
const minorRoman = ["i", "ii°", "III", "iv", "v", "VI", "VII"];
const romanToDegree = {
  I: 0,
  ii: 1,
  iii: 2,
  IV: 3,
  V: 4,
  vi: 5,
  "vii°": 6,
  i: 0,
  "ii°": 1,
  III: 2,
  iv: 3,
  v: 4,
  VI: 5,
  VII: 6,
};

const progressionTemplates = [
  ["I", "IV", "V", "I"],
  ["I", "V", "vi", "IV"],
  ["ii", "V", "I"],
  ["I", "vi", "ii", "V"],
  ["vi", "IV", "I", "V"],
];

function normalizeCircleIndex(value) {
  return ((value % 12) + 12) % 12;
}

function shouldUseFlatSpelling(keyName) {
  return keyName.includes("b") || ["F", "Dm", "Gm", "Cm", "Fm", "Bbm", "Eb", "Ab", "Db", "Bb"].includes(keyName);
}

function getNoteName(index, preferFlat) {
  return preferFlat
    ? noteNamesBySignature.flat[index]
    : noteNamesBySignature.sharp[index];
}

function computeScale(root, scaleType, preferFlat) {
  const rootIndex = noteMap[root];
  const formula = intervals[scaleType];
  return formula.map((semitone) => getNoteName((rootIndex + semitone) % 12, preferFlat));
}

function computeChords(scaleNotes, isMinor) {
  const qualityMajor = ["", "m", "m", "", "", "m", "dim"];
  const qualityMinor = ["m", "dim", "", "m", "m", "", ""];
  const roman = isMinor ? minorRoman : majorRoman;
  const quality = isMinor ? qualityMinor : qualityMajor;

  return roman.map((degree, idx) => ({
    degree,
    chord: `${scaleNotes[idx]}${quality[idx]}`,
  }));
}

function computeProgressions(chordRows) {
  return progressionTemplates.map((template) => {
    const mapped = template.map((roman) => {
      const index = romanToDegree[roman];
      return chordRows[index]?.chord ?? roman;
    });
    return {
      template: template.join(" - "),
      resolved: mapped.join(" - "),
    };
  });
}

export const useCircleStore = defineStore("circle", () => {
  const activeIndex = ref(0);
  const hoverIndex = ref(null);

  const majorKey = computed(() => keysMajor[activeIndex.value]);
  const minorKey = computed(() => keysMinor[activeIndex.value]);

  const majorScaleNotes = computed(() =>
    computeScale(majorKey.value, "majorScale", shouldUseFlatSpelling(majorKey.value)),
  );

  const minorScaleNotes = computed(() =>
    computeScale(minorKey.value.replace("m", ""), "minorScale", shouldUseFlatSpelling(minorKey.value)),
  );

  const majorDiatonicChords = computed(() => computeChords(majorScaleNotes.value, false));
  const minorDiatonicChords = computed(() => computeChords(minorScaleNotes.value, true));
  const progressions = computed(() => computeProgressions(majorDiatonicChords.value));

  const relatedChordSet = computed(() => {
    const idx = activeIndex.value;
    const indices = [
      normalizeCircleIndex(idx - 1),
      idx,
      normalizeCircleIndex(idx + 1),
    ];
    const values = new Set();
    indices.forEach((i) => {
      values.add(keysMajor[i]);
      values.add(keysMinor[i]);
    });
    return values;
  });

  function setActive(index) {
    activeIndex.value = normalizeCircleIndex(index);
    hoverIndex.value = null;
  }

  function shift(step) {
    setActive(activeIndex.value + step);
  }

  function setHover(indexOrNull) {
    hoverIndex.value = indexOrNull == null ? null : normalizeCircleIndex(indexOrNull);
  }

  return {
    keysMajor,
    keysMinor,
    activeIndex,
    hoverIndex,
    majorKey,
    minorKey,
    majorScaleNotes,
    minorScaleNotes,
    majorDiatonicChords,
    minorDiatonicChords,
    progressions,
    relatedChordSet,
    setActive,
    shift,
    setHover,
  };
});

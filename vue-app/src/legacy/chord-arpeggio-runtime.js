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

const openStrings = ["E", "B", "G", "D", "A", "E"]; // 缂傚倸鍊搁崐鎼佸磹閹间礁纾归柟闂寸绾惧綊鏌熼梻瀵割槮缁炬儳缍婇弻鐔兼⒒鐎靛壊妲紒鐐劤缂嶅﹪寮婚悢鍏尖拻閻庨潧澹婂Σ顔剧磼閻愵剙鍔ょ紓宥咃躬瀵鎮㈤崗灏栨嫽闁诲酣娼ф竟濠偽ｉ鍓х＜闁绘劦鍓欓崝銈囩磽瀹ュ拑韬€殿喖顭烽幃銏ゅ礂鐏忔牗瀚介梺璇查叄濞佳勭珶婵犲伣锝夘敊閸撗咃紲闂佺粯鍔﹂崜娆撳礉閵堝棛绡€闁逞屽墴閺屽棗顓奸崨顖氬Е婵＄偑鍊栫敮鎺楀磹瑜版帒鍚归柍褜鍓熼弻锝嗘償閵忋垻鍙濋梺鍛婎殔閸熷潡鎮鹃悜钘夌闁绘劗鏁搁惁鍫ユ⒑缁嬫寧婀伴懣銈夋煕鐎ｎ偅宕屾鐐村浮楠炴﹢宕滄担鐑橆潓濠电姵顔栭崰妤呮晝閳哄懎鍌ㄥΔ锝呭暙閸屻劑鏌ｉ姀鐘冲暈闁抽攱鍨圭槐鎾存媴婵埈浜幃姗€鏁冮崒娑樼彅闂備緡鍓欑粔鐢告偂閸愵喗鈷戦柛顭戝櫘閸庡繑绻涢幖顓炴珝闁哄备鈧磭鏆嗛悗锝庡墰琚︽俊鐐€戦崹娲晝閵忋倕绠栭柕蹇曞Х閺嗗鏌ｅΔ鈧悧濠囧吹閸儲鈷掗柛灞剧懅椤︼箓鏌熺喊鍗炰喊鐎殿喚鏁婚、妤呭礋椤掆偓閸擃喖顪冮妶鍡欏⒈闁稿鍨块崺鈧い鎴ｆ硶缁愭梻鈧鍠楅幐铏叏閳ь剟鏌嶉埡浣告殲闁绘繃濞婂缁樻媴閾忓箍鈧﹪鏌涢幘瀵哥疄闁诡喚鍏橀、娑樞掔涵椋庣М妞ゃ垺顨婂畷鐔碱敄閼恒儱顏烘繝鐢靛仩閹活亞绱為埀顒併亜椤愩埄妯€鐎规洘鍨块幃鈺冪磼濡厧骞堥梻浣告惈閸婅棄鈻旈弴銏″€块柛婵勫劗閸嬫挾鎲撮崟顒傤槰闂佸憡姊归悷銉╂偩妞嬪海鐭欓悹鍥╁亾濡啴宕洪埀顒併亜閹烘垵顏悗姘嚇閺岋綁寮幐搴㈠枑缂備胶濞€缁犳牠寮婚悢琛″亾濞戞瑯鐒介柟鍐插暣閺岋綀绠涢敐鍕仐闂佸搫鐭夌换婵嗙暦閵娾晩鏁婇柛鎾楀懎甯ㄩ梻鍌欐祰椤曟牠宕伴弽顐ょ濠电姴鍊婚弳锕傛煕椤愶絾绀€閹喖姊洪棃娑崇础闁告侗鍋勬禒顓犵磽閸屾艾鈧悂宕愰悜鑺ュ殑闁肩鐏氶崣蹇涙煙缂併垹鏋涚紒鐘侯潐閵囧嫰骞囬幆鏉挎倕闂?0闂?闂傚倸鍊搁崐鎼佸磹閹间礁纾归柟闂寸绾惧綊鏌熼梻瀵割槮缁炬儳缍婇弻鐔兼⒒鐎靛壊妲紒鐐劤濠€閬嶅焵椤掑倹鍤€閻庢凹鍙冨畷宕囧鐎ｃ劋姹楅梺鍦劋閸ㄥ綊宕愰悙宸富闁靛牆妫楃粭鎺撱亜閿斿灝宓嗙€殿喗鐓￠、鏃堝醇閻旇渹鐢绘繝鐢靛Т閿曘倝宕幍顔句笉濠电姵纰嶉悡鏇㈡煃鐟欏嫬鍔ゅù婊呭亾娣囧﹪鎮欓鍕ㄥ亾閺嶎偅鏆滃┑鐘叉处閸ゅ嫰鏌涢锝嗙闁绘挻绻堥弻鐔煎礈瑜忕敮娑㈡煟閹惧娲撮柡灞剧☉閳藉宕￠悙鍏稿摋闂備礁鐤囬褔鎮ч幘璇茶摕闁哄洢鍨归獮銏ゆ煛閸モ晛顎屾俊宸櫍濮婅櫣鈧湱濯崵娆撴⒑鐢喚绉柣娑卞枛椤粓鍩€椤掆偓閻ｅ嘲顫滈埀顒勭嵁閹捐绠抽柟鎯х摠椤撶懓鈹戦悩娈挎殰缂佽鲸娲熷畷鎴﹀箣閿曗偓绾惧綊鏌″搴″箹缂佺姵婢樿灃闁挎繂鎳庨弳娆戠棯閹岀吋闁哄本娲熷畷鐓庘攽閸パ勬珶婵犵數鍋為崹鍫曗€﹂崶顒€姹查悗锝庡枟閳锋垶銇勯幘鍗炲婵＄虎鍣ｉ幃妤呮濞戞氨鍔┑顔硷攻濡炶棄螞閸愩劉妲堟慨姗嗗墻閺嗩偅绻濈喊妯活潑闁稿鎳愮划娆撳箳濡も偓閻ら箖鏌涢锝嗗闁轰礁妫濋弻娑氫沪閸撗呯厒闂佹寧绋掔划宀勨€旈崘顔嘉ч柛鈩冿供濮婂潡姊虹粙娆惧剱闁告梹鐗犻幃褎鎯旈妸锔规嫽婵炶揪绲介幉锟犲疮閻愮儤鍋ㄦい鏍ㄧ☉濞搭噣鏌℃担绋挎殻濠碉紕鏌夐ˇ瀵哥磼閹插鐣遍棁澶愭煟濡儤鈻曢柛搴＄箳閳ь剛鎳撻幉锛勬崲閸岀偛鐓橀柟杈鹃檮閸嬫劙鏌熺紒妯轰刊濞寸姴銈搁幃妤€鈻撻崹顔界仌濠电偛鎳忓ú婊堝箲閵忕姭鏀介悗锝庡亜娴犳椽姊婚崒姘卞缂佸鐗撳鎼佸川椤撴稒鏂€闂佺粯鍔栧妯间焊閸愵喗鐓曢煫鍥ㄦ礀娴滃墽绱掔€ｎ偄鐏撮柛鈹垮灪閹棃濡搁妷褏鏉告俊鐐€栫敮鎺楀磹婵犳碍鍋樻い鏇楀亾婵﹦绮幏鍛村川婵犲倹娈樻繝鐢靛仩椤曟粎绮婚幘宕囨殾婵°倐鍋撻柍璇查叄楠炲洭顢氶崨顕€鏁?闂?闂?
const openStringMidis = [64, 59, 55, 50, 45, 40]; // 缂傚倸鍊搁崐鎼佸磹閹间礁纾归柟闂寸绾惧綊鏌熼梻瀵割槮缁炬儳缍婇弻鐔兼⒒鐎靛壊妲紒鐐劤缂嶅﹪寮婚悢鍏尖拻閻庨潧澹婂Σ顔剧磼閻愵剙鍔ょ紓宥咃躬瀵鎮㈤崗灏栨嫽闁诲酣娼ф竟濠偽ｉ鍓х＜闁绘劦鍓欓崝銈囩磽瀹ュ拑韬€殿喖顭烽幃銏ゅ礂鐏忔牗瀚介梺璇查叄濞佳勭珶婵犲伣锝夘敊閸撗咃紲闂佺粯鍔﹂崜娆撳礉閵堝棛绡€闁逞屽墴閺屽棗顓奸崨顖氬Е婵＄偑鍊栫敮鎺楀磹瑜版帒鍚归柍褜鍓熼弻锝嗘償閵忋垻鍙濋梺鍛婎殔閸熷潡鎮鹃悜钘夌闁绘劗鏁搁惁鍫ユ⒑缁嬫寧婀伴懣銈夋煕鐎ｎ偅宕屾鐐村浮楠炴﹢宕滄担鐑橆潓濠电姵顔栭崰妤呮晝閳哄懎鍌ㄥΔ锝呭暙閸屻劑鏌ｉ姀鐘冲暈闁抽攱鍨圭槐鎾存媴婵埈浜幃姗€鏁冮崒娑樼彅闂備緡鍓欑粔鐢告偂閸愵喗鈷戦柛顭戝櫘閸庡繑绻涢幖顓炴珝闁哄备鈧磭鏆嗛悗锝庡墰琚︽俊鐐€戦崹娲晝閵忋倕绠栭柕蹇曞Х閺嗗鏌ｅΔ鈧悧濠囧吹閸儲鈷掗柛灞剧懅椤︼箓鏌熺喊鍗炰喊鐎殿喚鏁婚、妤呭礋椤掆偓閸擃喖顪冮妶鍡欏⒈闁稿鍨块崺鈧い鎴ｆ硶缁愭梻鈧鍠楅幐铏叏閳ь剟鏌嶉埡浣告殲闁绘繃濞婂缁樻媴閾忓箍鈧﹪鏌涢幘瀵哥疄闁诡喚鍏橀、娑樞掔涵椋庣М妞ゃ垺顨婂畷鐔碱敄閼恒儱顏烘繝鐢靛仩閹活亞绱為埀顒併亜椤愩埄妯€鐎规洘鍨块幃鈺冪磼濡厧骞堥梻浣告惈閸婅棄鈻旈弴銏″€块柛婵勫劗閸嬫挾鎲撮崟顒傤槰闂佸憡姊归悷銉╂偩妞嬪海鐭欓悹鍥╁亾濡啴宕洪埀顒併亜閹烘垵顏悗姘嚇閺岋綁寮幐搴㈠枑缂備胶濞€缁犳牠寮婚悢琛″亾濞戞瑯鐒介柟鍐插暣閺岋綀绠涢敐鍕仐闂佸搫鐭夌换婵嗙暦閵娾晩鏁婇柛鎾楀懎甯ㄩ梻鍌欐祰椤曟牠宕伴弽顐ょ濠电姴鍊婚弳锕傛煕椤愶絾绀€閹喖姊洪棃娑崇础闁告侗鍋勬禒顓犵磽閸屾艾鈧悂宕愰悜鑺ュ殑闁肩鐏氶崣蹇涙煙缂併垹鏋涚紒鐘侯潐閵囧嫰骞囬幆鏉挎倕闂?0闂?闂?E4)闂?闂?闂?E2)

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

const circleRingColors = {
  outer: "#7aa8f3",
  inner: "#c9dbfb",
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
const phraseList = document.getElementById("phraseList");
const phraseFormModal = document.getElementById("phraseFormModal");
const phraseForm = document.getElementById("phraseForm");
const phraseFormCloseBtn = document.getElementById("phraseFormCloseBtn");
const phraseFormCancelBtn = document.getElementById("phraseFormCancelBtn");
const phraseNameInput = document.getElementById("phraseNameInput");
const phraseAuthorInput = document.getElementById("phraseAuthorInput");
const phraseUploadedAtInput = document.getElementById("phraseUploadedAtInput");
const phraseFileInput = document.getElementById("phraseFileInput");
const phraseTagInput = document.getElementById("phraseTagInput");
const phraseTagFilterSelect = document.getElementById("phraseTagFilterSelect");
const phraseTitleSearchInput = document.getElementById("phraseTitleSearchInput");
const phraseViewerModal = document.getElementById("phraseViewerModal");
const phraseViewerCloseBtn = document.getElementById("phraseViewerCloseBtn");
const phraseViewerMeta = document.getElementById("phraseViewerMeta");
const phraseViewerBody = document.getElementById("phraseViewerBody");
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
const phraseObjectUrls = new Set();
let phraseViewerScoreApi = null;
let phraseViewerScoreBlobUrl = "";
let alphaTabLoadPromise = null;
const phraseFilterState = {
  tag: "",
  query: "",
};
const phraseDbConfig = {
  name: "fretflow_phrase_library",
  version: 1,
  storeName: "phrases",
};
let phraseDb = null;
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
  if (rootSelect) rootSelect.disabled = trainingDisabled || nextView === "none";
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

function playChordByLabel(chordLabel, whenOffset = 0) {
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
    playTrainingTone(baseMidi + interval, 0.9, whenOffset + idx * 0.02);
  });

}

function playProgressionByLabel(progressionLabel) {
  if (!progressionLabel) return;
  const chords = progressionLabel
    .split("-")
    .map((item) => item.trim())
    .filter(Boolean);
  const chordGap = 0.52;
  chords.forEach((chord, idx) => {
    playChordByLabel(chord, idx * chordGap);
  });
}

function flashPlaybackFeedback(target) {
  if (!target) return;
  target.classList.add("is-playing");
  window.setTimeout(() => {
    target.classList.remove("is-playing");
  }, 220);
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
      `当前音符 <span class="toast-note">${noteName}</span> <span class="toast-meta">第 ${stringIdx + 1} 弦 · 第 ${fret} 品 · MIDI ${midi}</span>`,
      true,
    );
  } else {
    updateTrainingToast(
      `当前音符 ${noteName} · 第 ${stringIdx + 1} 弦 · 第 ${fret} 品 · MIDI ${midi}`,
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
  if (roman === "viiDim" || roman === "vii掳" || roman === "vii\u00B0") return 6;
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
  const segmentNodes = [];

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
      fill: circleRingColors.outer,
    });
    const innerSegment = createSvgElement("path", {
      class: "circle-ring-segment inner-segment",
      d: buildRingSegmentPath(
        circleConfig.innerInnerRadius,
        circleConfig.innerOuterRadius,
        startAngle,
        endAngle,
      ),
      fill: circleRingColors.inner,
    });
    ringLayer.appendChild(outerSegment);
    ringLayer.appendChild(innerSegment);
    segmentNodes.push({ outerSegment, innerSegment });
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
    circleState.nodes.push({
      majorNode,
      minorNode,
      outerSegment: segmentNodes[idx].outerSegment,
      innerSegment: segmentNodes[idx].innerSegment,
    });
  }
  circleWheel.appendChild(keyLayer);
}

function renderCircleInfo() {
  const majorKey = keysMajor[circleState.activeIndex];
  const minorKey = keysMinor[circleState.activeIndex];
  const minorTonic = minorKey.endsWith("m") ? minorKey.slice(0, -1) : minorKey;
  const {
    majorDiatonicChords,
    minorDiatonicChords,
    progressions,
  } = circleState.derived;

  if (circleCurrentKey) {
    circleCurrentKey.textContent = `当前调性：${majorKey} / ${minorKey}`;
  }
  if (circleKeyTitle) {
    circleKeyTitle.textContent = `${majorKey}大调/${minorTonic}小调`;
  }
  if (circleDiatonicChords) {
    const degreeRow = majorDiatonicChords
      .map((item) => `<span class="roman-cell">${item.roman}</span>`)
      .join("");
    const majorChordRow = majorDiatonicChords
      .map(
        (item) =>
          `<button type="button" class="chord-cell chord-trigger" data-chord-label="${item.name}" aria-label="播放和弦 ${item.name}">${item.name}</button>`,
      )
      .join("");
    const minorChordRow = minorDiatonicChords
      .map(
        (item) =>
          `<button type="button" class="chord-cell chord-trigger" data-chord-label="${item.name}" aria-label="播放和弦 ${item.name}">${item.name}</button>`,
      )
      .join("");
    circleDiatonicChords.innerHTML = `
      <div class="circle-diatonic-grid">
        <div class="row row-with-tag"><span class="row-tag">级数</span>${degreeRow}</div>
        <div class="row row-with-tag"><span class="row-tag">大调</span>${majorChordRow}</div>
        <div class="row row-with-tag"><span class="row-tag">小调</span>${minorChordRow}</div>
      </div>
    `;
    circleDiatonicChords.querySelectorAll(".chord-trigger").forEach((btn) => {
      btn.addEventListener("click", () => {
        flashPlaybackFeedback(btn);
        playChordByLabel(btn.dataset.chordLabel);
      });
    });
  }
  if (circleProgressions) {
    circleProgressions.innerHTML = "";
    progressions.forEach((item) => {
      const row = document.createElement("button");
      row.type = "button";
      row.className = "circle-row circle-line-row progression-trigger";
      row.setAttribute("aria-label", `播放和弦进行 ${item.value}`);
      row.innerHTML = `<span class="roman">${item.roman}</span><span class="value">${item.value}</span>`;
      row.addEventListener("click", () => {
        playProgressionByLabel(item.value);
      });
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
    [node.outerSegment, node.innerSegment].forEach((segment) => {
      segment.classList.toggle("is-active", isActive);
      segment.classList.toggle("is-related", isRelated);
      segment.classList.toggle("is-hover", isHover);
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

const phraseScoreExtensions = new Set([
  "gtp",
  "gp3",
  "gp4",
  "gp5",
  "gpx",
  "gp",
  "xml",
  "musicxml",
  "mxl",
  "mscz",
  "mscx",
  "ptb",
]);

const phraseAudioExtensions = new Set(["mp3", "m4a", "wav", "flac", "ogg", "aac"]);
const phraseImageExtensions = new Set(["jpg", "jpeg", "png", "webp", "gif"]);

function getFileExtension(filename) {
  const lastDot = filename.lastIndexOf(".");
  if (lastDot < 0 || lastDot === filename.length - 1) return "";
  return filename.slice(lastDot + 1).toLowerCase();
}

function inferPhraseType(filename) {
  const ext = getFileExtension(filename);
  if (phraseImageExtensions.has(ext)) return `图片 · .${ext}`;
  if (ext === "pdf") return "文档 · .pdf";
  if (phraseScoreExtensions.has(ext)) return `曲谱 · .${ext}`;
  if (phraseAudioExtensions.has(ext)) return `音频 · .${ext}`;
  return ext ? `文件 · .${ext}` : "文件";
}

function inferPhraseTag(filename, mimeType = "") {
  const ext = getFileExtension(filename || "");
  if (phraseScoreExtensions.has(ext)) return "曲谱";
  if (phraseAudioExtensions.has(ext) || mimeType.startsWith("audio/")) return "音频";
  if (phraseImageExtensions.has(ext) || mimeType.startsWith("image/")) return "图片";
  if (ext === "pdf" || mimeType === "application/pdf") return "文档";
  return "其他";
}

function inferSongMeta(filename) {
  const baseName = filename.replace(/\.[^.]+$/, "");
  const normalized = baseName.replace(/\s+/g, " ").trim();
  const parts = normalized.split(/\s*[-_]\s*/);
  if (parts.length >= 2) {
    return {
      title: parts[0] || "未命名",
      author: parts[1] || "未知作者",
    };
  }
  return {
    title: normalized || "未命名",
    author: "未知作者",
  };
}

function getNowDateTimeLocal() {
  const now = new Date();
  const tzOffset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - tzOffset).toISOString().slice(0, 16);
}

function toDisplayDate(value) {
  if (!value) return "--";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString("zh-CN", { hour12: false });
}

function toDisplayDateOnly(value) {
  if (!value) return "--";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("zh-CN");
}

function getPhraseMediaKind(item) {
  const filename = item.fileName || item.name || "";
  const ext = getFileExtension(filename);
  const mime = item.mimeType || "";
  if (mime.startsWith("image/") || phraseImageExtensions.has(ext)) return "image";
  if (mime.startsWith("audio/") || phraseAudioExtensions.has(ext)) return "audio";
  if (mime === "application/pdf" || ext === "pdf") return "pdf";
  if (phraseScoreExtensions.has(ext)) return "score";
  return "file";
}

function clearPhraseObjectUrls() {
  phraseObjectUrls.forEach((url) => URL.revokeObjectURL(url));
  phraseObjectUrls.clear();
}

function makeObjectUrl(blob) {
  if (!blob) return "";
  const url = URL.createObjectURL(blob);
  phraseObjectUrls.add(url);
  return url;
}

function openPhraseDb() {
  if (phraseDb) return Promise.resolve(phraseDb);
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(phraseDbConfig.name, phraseDbConfig.version);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(phraseDbConfig.storeName)) {
        db.createObjectStore(phraseDbConfig.storeName, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };
    request.onsuccess = () => {
      phraseDb = request.result;
      resolve(phraseDb);
    };
    request.onerror = () => reject(request.error);
  });
}

async function loadPhraseItems() {
  const db = await openPhraseDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(phraseDbConfig.storeName, "readonly");
    const store = tx.objectStore(phraseDbConfig.storeName);
    const request = store.getAll();
    request.onsuccess = () => {
      const items = Array.isArray(request.result) ? request.result : [];
      items.sort(
        (a, b) => new Date(b.uploadedAt || 0).getTime() - new Date(a.uploadedAt || 0).getTime(),
      );
      resolve(items);
    };
    request.onerror = () => reject(request.error);
  });
}

async function savePhraseItem(item) {
  const db = await openPhraseDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(phraseDbConfig.storeName, "readwrite");
    const store = tx.objectStore(phraseDbConfig.storeName);
    const request = store.add(item);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function openPhraseForm() {
  if (!phraseFormModal || !phraseForm) return;
  phraseForm.reset();
  if (phraseUploadedAtInput) {
    phraseUploadedAtInput.value = getNowDateTimeLocal();
  }
  if (phraseTagInput) phraseTagInput.value = "曲谱";
  phraseFormModal.hidden = false;
  if (phraseNameInput) phraseNameInput.focus();
}

function closePhraseForm() {
  if (!phraseFormModal) return;
  phraseFormModal.hidden = true;
}

function closePhraseViewer() {
  if (!phraseViewerModal) return;
  destroyPhraseScoreViewer();
  phraseViewerModal.hidden = true;
  if (phraseViewerBody) phraseViewerBody.innerHTML = "";
}

function destroyPhraseScoreViewer() {
  if (phraseViewerScoreApi && typeof phraseViewerScoreApi.destroy === "function") {
    phraseViewerScoreApi.destroy();
  }
  phraseViewerScoreApi = null;
  if (phraseViewerScoreBlobUrl) {
    URL.revokeObjectURL(phraseViewerScoreBlobUrl);
    phraseObjectUrls.delete(phraseViewerScoreBlobUrl);
    phraseViewerScoreBlobUrl = "";
  }
}

async function ensureAlphaTab() {
  if (window.alphaTab && window.alphaTab.AlphaTabApi) return window.alphaTab;
  if (alphaTabLoadPromise) return alphaTabLoadPromise;
  alphaTabLoadPromise = (async () => {
    const loaded = await new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "/vendor/alphaTab/alphaTab.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.head.appendChild(script);
    });
    if (loaded && window.alphaTab && window.alphaTab.AlphaTabApi) {
      return window.alphaTab;
    }
    return null;
  })();
  return alphaTabLoadPromise;
}

function createPhraseThumbnail(item) {
  const thumb = document.createElement("div");
  thumb.className = "phrase-card-thumb";
  const mediaKind = getPhraseMediaKind(item);
  if (mediaKind === "image" && item.fileBlob) {
    const img = document.createElement("img");
    img.src = makeObjectUrl(item.fileBlob);
    img.alt = `${item.title || "乐句"} 缩略图`;
    thumb.appendChild(img);
    return thumb;
  }

  const typeLabel = document.createElement("span");
  typeLabel.className = "thumb-type";
  if (mediaKind === "audio") typeLabel.textContent = "音频预览";
  else if (mediaKind === "pdf") typeLabel.textContent = "PDF 文档";
  else if (mediaKind === "score") typeLabel.textContent = "GTP 曲谱";
  else typeLabel.textContent = "文件预览";
  thumb.appendChild(typeLabel);
  return thumb;
}

function getPhraseTagList(item) {
  if (Array.isArray(item.tags)) {
    return item.tags.filter(Boolean).slice(0, 5);
  }
  if (typeof item.tags === "string" && item.tags.trim()) {
    return item.tags
      .split(/[,\s/|]+/)
      .map((tag) => tag.trim())
      .filter(Boolean)
      .slice(0, 5);
  }
  if (item.fileTag) return [item.fileTag];
  return [];
}

function getFilteredPhraseItems() {
  const activeTag = phraseFilterState.tag.trim();
  const query = phraseFilterState.query.trim().toLowerCase();
  return phraseDemoItems.filter((item) => {
    const title = String(item.title || item.name || "").toLowerCase();
    const tags = getPhraseTagList(item);
    const hasTag = !activeTag || tags.includes(activeTag);
    const hasQuery = !query || title.includes(query);
    return hasTag && hasQuery;
  });
}

function updatePhraseTagFilterOptions() {
  if (!phraseTagFilterSelect) return;
  const currentValue = phraseTagFilterSelect.value || "";
  const baseOptions = [
    ["", "全部标签"],
    ["曲谱", "曲谱"],
    ["音频", "音频"],
    ["文档", "文档"],
    ["图片", "图片"],
    ["其他", "其他"],
  ];
  const dynamicTags = Array.from(
    new Set(
      phraseDemoItems
        .flatMap((item) => getPhraseTagList(item))
        .filter((tag) => tag && !baseOptions.some(([value]) => value === tag)),
    ),
  );

  phraseTagFilterSelect.innerHTML = "";
  [...baseOptions, ...dynamicTags.map((tag) => [tag, tag])].forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    phraseTagFilterSelect.appendChild(option);
  });

  phraseTagFilterSelect.value = currentValue;
}

function renderPhraseLibrary() {
  if (!phraseList) return;
  clearPhraseObjectUrls();
  phraseList.innerHTML = "";
  updatePhraseTagFilterOptions();
  const filteredItems = getFilteredPhraseItems();

  if (phraseDemoItems.length === 0) {
    const empty = document.createElement("div");
    empty.className = "phrase-empty-tip";
    empty.textContent = "点击 + 号上传乐句文件并保存到本地库";
    phraseList.appendChild(empty);
  } else if (filteredItems.length === 0) {
    const empty = document.createElement("div");
    empty.className = "phrase-empty-tip";
    empty.textContent = "未找到符合筛选条件的乐句";
    phraseList.appendChild(empty);
  }

  filteredItems.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "phrase-card phrase-file-card";
    card.setAttribute("aria-label", `查看乐句 ${item.title || item.name || "未命名"}`);

    const cover = createPhraseThumbnail(item);
    cover.classList.add("phrase-card-cover");
    const title = document.createElement("div");
    title.className = "phrase-card-title";
    title.textContent = item.title || item.name || "未命名";

    const info = document.createElement("div");
    info.className = "phrase-card-info";

    const meta = document.createElement("div");
    meta.className = "phrase-card-meta";
    const metaParts = [toDisplayDateOnly(item.uploadedAt)];
    if (item.bpm) metaParts.push(`${item.bpm} BPM`);
    if (item.difficulty) metaParts.push(`难度 ${item.difficulty}`);
    meta.textContent = metaParts.filter(Boolean).join(" / ");

    const tagRow = document.createElement("div");
    tagRow.className = "phrase-card-tags";
    const tags = getPhraseTagList(item).slice(0, 3);
    tags.forEach((tag) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "phrase-tag-chip";
      chip.textContent = tag;
      chip.setAttribute("data-tag", tag);
      chip.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        phraseFilterState.tag = tag;
        if (phraseTagFilterSelect) phraseTagFilterSelect.value = tag;
        renderPhraseLibrary();
      });
      tagRow.appendChild(chip);
    });

    const desc = document.createElement("div");
    desc.className = "phrase-card-desc";
    desc.textContent = item.description || "";

    info.appendChild(title);
    info.appendChild(meta);
    if (tags.length > 0) info.appendChild(tagRow);
    if (desc.textContent) info.appendChild(desc);

    card.appendChild(cover);
    card.appendChild(info);
    card.addEventListener("click", () => {
      void openPhraseViewer(item);
    });
    phraseList.appendChild(card);
  });

  const addCard = document.createElement("button");
  addCard.type = "button";
  addCard.className = "phrase-card phrase-upload-card";
  addCard.setAttribute("aria-label", "上传文件");
  addCard.innerHTML = "<span>+</span>";
  addCard.addEventListener("click", openPhraseForm);
  phraseList.appendChild(addCard);
}

async function openPhraseViewer(item) {
  if (!phraseViewerModal || !phraseViewerBody || !phraseViewerMeta) return;
  destroyPhraseScoreViewer();
  phraseViewerBody.innerHTML = "";
  const fileTag = item.fileTag || inferPhraseTag(item.fileName || item.name || "", item.mimeType || "");
  phraseViewerMeta.innerHTML = `
    <div><strong>名称：</strong>${item.title || "未命名"}</div>
    <div><strong>作者：</strong>${item.author || "未知作者"}</div>
    <div><strong>上传时间：</strong>${toDisplayDate(item.uploadedAt)}</div>
    <div><strong>类型：</strong>${item.typeLabel || "文件"}</div>
    <div><strong>标签：</strong>${fileTag}</div>
  `;

  const mediaKind = getPhraseMediaKind(item);
  if (mediaKind === "image" && item.fileBlob) {
    const img = document.createElement("img");
    img.className = "phrase-viewer-image";
    img.src = makeObjectUrl(item.fileBlob);
    img.alt = item.title || "乐句图片";
    phraseViewerBody.appendChild(img);
  } else if (mediaKind === "audio" && item.fileBlob) {
    const audio = document.createElement("audio");
    audio.className = "phrase-viewer-audio";
    audio.controls = true;
    audio.preload = "metadata";
    audio.src = makeObjectUrl(item.fileBlob);
    phraseViewerBody.appendChild(audio);
  } else if (mediaKind === "pdf" && item.fileBlob) {
    const frame = document.createElement("iframe");
    frame.className = "phrase-viewer-frame";
    frame.src = makeObjectUrl(item.fileBlob);
    frame.title = item.title || "PDF 预览";
    phraseViewerBody.appendChild(frame);
  } else if (mediaKind === "score") {
    const alphaTabLib = await ensureAlphaTab();
    if (!alphaTabLib || !alphaTabLib.AlphaTabApi || !item.fileBlob) {
      const tip = document.createElement("div");
      tip.className = "phrase-viewer-tip";
      tip.innerHTML =
        "本地 alphaTab 资源加载失败，暂时无法在线播放 GTP。<br/>请确认以下文件可访问：`/vendor/alphaTab/alphaTab.js` 与 `/vendor/alphaTab/sonivox.sf2`。";
      phraseViewerBody.appendChild(tip);
      if (item.fileBlob) {
        const downloadBtn = document.createElement("a");
        downloadBtn.className = "btn-primary";
        downloadBtn.href = makeObjectUrl(item.fileBlob);
        downloadBtn.download = item.fileName || "phrase.gtp";
        downloadBtn.textContent = "下载曲谱文件";
        phraseViewerBody.appendChild(downloadBtn);
      }
    } else {
      const toolbar = document.createElement("div");
      toolbar.className = "phrase-score-toolbar";
      const playBtn = document.createElement("button");
      playBtn.type = "button";
      playBtn.className = "btn-primary";
      playBtn.textContent = "播放/暂停";
      const stopBtn = document.createElement("button");
      stopBtn.type = "button";
      stopBtn.className = "btn-ghost";
      stopBtn.textContent = "停止";
      toolbar.appendChild(playBtn);
      toolbar.appendChild(stopBtn);

      const scoreWrap = document.createElement("div");
      scoreWrap.className = "phrase-viewer-score";
      phraseViewerBody.appendChild(toolbar);
      phraseViewerBody.appendChild(scoreWrap);
      phraseViewerScoreBlobUrl = makeObjectUrl(item.fileBlob);
      const AlphaTabApiCtor = alphaTabLib.AlphaTabApi;
      phraseViewerScoreApi = new AlphaTabApiCtor(scoreWrap, {
        file: phraseViewerScoreBlobUrl,
        core: {
          fontDirectory: "https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/font/",
        },
        player: {
          enablePlayer: true,
          soundFont: "/vendor/alphaTab/sonivox.sf2",
        },
      });
      playBtn.addEventListener("click", () => {
        if (!phraseViewerScoreApi) return;
        if (typeof phraseViewerScoreApi.playPause === "function") {
          phraseViewerScoreApi.playPause();
          return;
        }
        if (typeof phraseViewerScoreApi.play === "function") {
          phraseViewerScoreApi.play();
        }
      });
      stopBtn.addEventListener("click", () => {
        if (!phraseViewerScoreApi) return;
        if (typeof phraseViewerScoreApi.stop === "function") {
          phraseViewerScoreApi.stop();
        }
      });
      if (phraseViewerScoreApi.error && phraseViewerScoreApi.error.on) {
        phraseViewerScoreApi.error.on((e) => {
          const tip = document.createElement("div");
          tip.className = "phrase-viewer-tip";
          tip.textContent = `曲谱渲染失败：${e && e.message ? e.message : "请检查文件格式或资源路径"}`;
          phraseViewerBody.innerHTML = "";
          phraseViewerBody.appendChild(tip);
        });
      }
    }
  } else {
    const tip = document.createElement("div");
    tip.className = "phrase-viewer-tip";
    tip.textContent = "该文件类型暂不支持在线预览，可先下载后查看。";
    phraseViewerBody.appendChild(tip);
  }

  phraseViewerModal.hidden = false;
}

async function handlePhraseFormSubmit(event) {
  event.preventDefault();
  if (!phraseFileInput || !phraseNameInput || !phraseAuthorInput || !phraseUploadedAtInput) return;
  const file = phraseFileInput.files && phraseFileInput.files[0];
  if (!file) return;
  const title = phraseNameInput.value.trim() || inferSongMeta(file.name).title;
  const author = phraseAuthorInput.value.trim() || "未知作者";
  const uploadedAt = phraseUploadedAtInput.value || getNowDateTimeLocal();

  const fileTag = phraseTagInput && phraseTagInput.value
    ? phraseTagInput.value
    : inferPhraseTag(file.name, file.type || "");
  const item = {
    fileName: file.name,
    title,
    author,
    uploadedAt,
    typeLabel: inferPhraseType(file.name),
    fileTag,
    sizeKB: (file.size / 1024).toFixed(1),
    size: file.size,
    mimeType: file.type || "",
    fileBlob: file,
  };

  const createdId = await savePhraseItem(item);
  item.id = createdId;
  phraseDemoItems.unshift(item);
  renderPhraseLibrary();
  closePhraseForm();
}

async function initPhraseLibrary() {
  try {
    const items = await loadPhraseItems();
    phraseDemoItems.splice(0, phraseDemoItems.length, ...items);
  } catch (error) {
    console.error("Phrase library init failed:", error);
  }
  renderPhraseLibrary();
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

function handleGlobalEscape(event) {
  if (event.key !== "Escape") return;
  if (phraseViewerModal && !phraseViewerModal.hidden) {
    closePhraseViewer();
    return;
  }
  if (phraseFormModal && !phraseFormModal.hidden) {
    closePhraseForm();
  }
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
if (phraseForm) {
  phraseForm.addEventListener("submit", handlePhraseFormSubmit);
}
if (phraseTagFilterSelect) {
  phraseTagFilterSelect.addEventListener("change", (event) => {
    phraseFilterState.tag = event.target.value || "";
    renderPhraseLibrary();
  });
}
if (phraseTitleSearchInput) {
  phraseTitleSearchInput.addEventListener("input", (event) => {
    phraseFilterState.query = event.target.value || "";
    renderPhraseLibrary();
  });
}
if (phraseFormCloseBtn) {
  phraseFormCloseBtn.addEventListener("click", closePhraseForm);
}
if (phraseFormCancelBtn) {
  phraseFormCancelBtn.addEventListener("click", closePhraseForm);
}
if (phraseFormModal) {
  phraseFormModal.addEventListener("click", (event) => {
    if (event.target === phraseFormModal) closePhraseForm();
  });
}
if (phraseViewerCloseBtn) {
  phraseViewerCloseBtn.addEventListener("click", closePhraseViewer);
}
if (phraseViewerModal) {
  phraseViewerModal.addEventListener("click", (event) => {
    if (event.target === phraseViewerModal) closePhraseViewer();
  });
}
topTabButtons.forEach((btn) => {
  btn.addEventListener("click", () => setTopTab(btn.dataset.topTab));
});
document.addEventListener("keydown", handleCircleKeyboard);
document.addEventListener("keydown", handleGlobalEscape);
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
    updateTrainingToast("点击任意品位即可发声；切换不同 CAGED 指型可强化把位记忆。");
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
      "点击任意品位即可发声；切换不同模式可学习音阶与和弦分布。",
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

// 闂傚倸鍊搁崐鎼佸磹閹间礁纾归柟闂寸绾惧綊鏌熼梻瀵割槮缁炬儳缍婇弻鐔兼⒒鐎靛壊妲紒鐐劤缂嶅﹪寮婚悢鍏尖拻閻庨潧澹婂Σ顔剧磼閻愵剙鍔ょ紓宥咃躬瀵鎮㈤崗灏栨嫽闁诲酣娼ф竟濠偽ｉ鍓х＜闁绘劦鍓欓崝銈囩磽瀹ュ拑韬€殿喖顭烽弫鎰緞婵犲嫷鍚呴梻浣瑰缁诲倿骞夊☉銏犵缂備焦顭囬崢閬嶆⒑闂堟稓澧曢柟鍐查叄椤㈡棃顢橀姀锛勫幐闁诲繒鍋涙晶钘壝虹€涙ǜ浜滈柕蹇婂墲缁€瀣煛娴ｇ懓濮嶇€规洖宕埢搴∥熼幁宥嗗哺濮婂宕掑▎鎺戝帯濡炪値鍘奸悧蹇涘箖椤曗偓椤㈡洟鏁冮埀顒傜矆婢舵劕绠规繛锝庡墮婵¤偐绱掗悩闈涙灈闁哄瞼鍠栧鑽も偓闈涘濡差喚绱撴笟鍥т簻缂佸缍婂璇测槈閵忊晜鏅濋梺缁橆焾鐏忔瑦绂掗懖鈺冪＝濞达綁顥撶粵蹇曠磼閻樿櫕灏い顐㈢箰鐓ゆい蹇撳缁卞爼姊洪崨濠冨闁告ɑ鎮傚鎼佸幢濞戞瑢鎷洪梺鍛婄☉閿曪箓骞婇崘顔解拺閻㈩垼鍠氶崚鐗堛亜閺囶亞绉い銏℃礋閺佸啴鍩€椤掑倻鐭嗛柛鎰ㄦ杺娴滄粓鏌￠崘銊モ偓鐟扳枍閺囥垺鐓曟繛鍡楃箲椤ャ垺鎱ㄦ繝鍐┿仢鐎规洦鍋婂畷鐔碱敆閳ь剟藝閳轰緡娓婚柕鍫濆暙婵″ジ鏌熼崘鑼缂侇喖顑呴鍏煎緞婵犲嫷妲堕柣鐔哥矊缁绘帗绔熼弴鐔洪檮闁告稑锕﹂崢浠嬫⒑闁稑宓嗘繛浣冲嫭娅犳い鏇楀亾闁哄本鐩顒傛嫚濞村浜炬俊銈呭暞椤洟鏌熼悙顒€澧柛姘儔閺屾稑顭ㄩ崘銊︽闂佸憡鍑归崑鍕亙闂佺粯锕㈠褎绂掑鍫熺厱闁绘洑绀佹禍浼存煙椤曗偓缁犳牠寮幘缁樺亹闁肩⒈鍓﹂崥瀣⒒娴ｇ懓鍔ゆ繛瀛樺哺瀹曟垿宕卞☉妯煎姦濡炪倖宸婚崑鎾淬亜椤撶偛妲婚摶鐐烘煕濞戞瑦鍎楅柡浣稿暣閺屾洝绠涙繛鎯т壕闁归鐒﹁ⅸ闂傚倸鍊烽懗鍫曞箠閹剧粯鍎嶉柣鎴ｆ閻ょ偓绻濇繝鍌涘櫧闁活厼顦甸弻鐔兼倻濡鏆楅梻鍌氬鐎氫即寮诲☉妯锋婵☆垱鍨甸悧鎾荤嵁韫囨拋娲敂閸涱亝瀚肩紓浣鸿檸閸樺ジ骞婃惔銏㈩洸鐟滅増甯楅悡鏇㈡倵閿濆骸浜為柍顖涙礀鑿愰柛銉戝秷鍚梺鐟扮－閸嬨倖淇婇悜钘壩ч柛銉㈡櫇閺嗘澘鈹戦敍鍕杭闁稿﹥鐗犲畷婵嬪箣閿曗偓閸ㄥ倻鎲搁悧鍫濈瑨婵鐓￠弻銊モ攽閸℃顦遍梺绋款儐閹告悂鍩㈤幘璇插瀭妞ゆ梻鏅禒灞句繆閻愵亜鈧牕鈻旈敃鍌氱倞鐟滃繘宕ｉ埀顒€鈹戦悩顔肩伇婵炲鐩垾锕傤敆閸曨剙浜楅梺闈涱槴閺呮稓绮婚崷顓犵＜妞ゆ梹顑欏鎰版煕閵堝棙绀冮柕鍥у缁犳盯骞橀弶鎴烆仧缂傚倷娴囬褍螞濠靛钃熼柨婵嗩槸缁犳盯鏌涜箛鎾存喐闁烩晛閰ｅ娲焻閻愯尪瀚板褜鍨堕弻娑㈠Ω閵壯傝檸闂佷紮绲介崲鏌ュ煘閹达箑骞㈡繛鍡樺姈閻ｇ兘姊绘担鍛婂暈婵炶绠撳畷鎴﹀幢濞戞瑥浠鹃梺鎼炲劀閳ь剟寮ㄦ禒瀣厓闁芥ê顦伴ˉ婊堟煟韫囨洖鏋涢柟顔肩秺閸┾偓妞ゆ帒瀚弲婵嬫煃瑜滈崜鐔煎灳閿曞倸鐐婃い鎺嗗亾闁告劏鍋撻柣鐔哥矊椤﹂潧顕ｉ妸锔绢浄閻庯綆鍋嗛崢钘夆攽閳藉棗鐏犻柟纰卞亰瀵娊鏌嗗鍡欏幈闂侀潧鐗嗘鍛婃櫠閹绢喗鐓涢悘鐐殿焾婢ф煡鏌熷畡鐗堝殗鐎规洦鍋婃俊鐑藉箛鐏炶姤澶勯柣鎾寸〒閳ь剙鍘滈崑鎾绘倵閿濆骸澧扮悮锔戒繆閵堝洤啸闁稿绋戠叅妞ゆ搩娼块埀顑跨铻栧ù锝呮憸缁愮偞绻濋悽闈浶㈤柛鐘冲哺瀹曨垶鍩€椤掑嫭鈷掗柛灞捐壘閳ь剟顥撶划鍫熺瑹閳ь剟鐛径鎰櫢闁绘娅曞▍鍥⒑閸愬弶鎯堥柛濠傤煼閵嗗懘宕ｆ径宀€鐦堥梻鍌氱墛缁嬫挻鏅跺☉姘ｅ亾鐟欏嫭绀€鐎殿喖澧庨幑銏犫攽鐎ｎ偒妫冨┑鐐村灥瀹曨剟宕滈柆宥嗏拺缂佸顑欓崕宥夋煕閺冣偓閸ㄧ敻锝炶箛鏃傜瘈婵﹩鍓熼崬鍫曟⒑缂佹ɑ顥嗛柕鍡忓亾闂佸搫顑嗗Λ鍐潖閾忓湱鐭欐繛鍡樺劤閸撻亶姊洪崷顓熷殌婵炲樊鍙冩俊瀛樻媴缁洘顫嶉梺闈涚箚閳ь剚鏋奸崑鎾绘倻閼恒儳鍘剧紒鐐緲瀹曨剚鏅剁紒妯圭箚闁肩⒈鍓欓。鐓幥庨崶褝韬柟顔界懇椤㈡棃宕熼妸銉ゅ闂侀潧鐗嗛ˇ顖炲磼閵娿儍褰掓偐瀹割喖鍓伴梺鎼炲妼閸婂鍩€椤掑喚娼愭繛鍙夌墪鐓ら柨鏇炲亰缂嶆牠鏌￠崶銉ョ仾闁绘挻鐟╁鍫曞醇閵壯呮毇濠碉紕铏庨崳锝夊蓟瀹ュ鐓ラ悗锝庝簽閻熴劑姊洪棃娑欘棡閻㈩垱甯￠敐鐐测攽鐎ｎ偅娅滈梺鍛婁緱閸撴瑩藟濮橆兘鏀介柣妯虹仛閺嗏晠鏌涚€ｎ偓鑰跨€规洜濞€閹晝鎷犻懠顒€鈧偤姊洪棃娑辩劸闁稿孩澹嗙槐鏃堝即閻愨晜鏂€闂佺粯锚閻忔岸寮抽埡浣叉斀妞ゆ棁濮ょ紞鎴︽偂閵堝鐓ラ柡鍥╁仜閳ь剙鎽滄竟鏇熺節濮橆厾鍘遍悗鍏夊亾闁逞屽墴瀹曟垿鎮欓悜妯轰簵闂佸憡鍔﹂崰妤呮偂韫囨搩鐔嗛柤鍝ユ暩閵嗘帡鏌ｉ敐鍛埞妞ゎ叀鍎婚¨渚€鏌涢妸銊ゅ惈闁瑰箍鍨归埥澶愬閻樻妲梻浣稿悑缁佹挳寮插☉銏犵厱鐎光偓閸曨兘鎷洪梺鍛婄箓鐎氼喖顭囬妶澶嬬厱闁斥晛鍟伴幊鍛存煛婢跺鍊愭慨濠冩そ閹兘寮舵惔鎾村瘱婵＄偑鍊戦崕鏌ュ礉濡も偓閳藉鎮界粙璺ㄥ姦濡炪倖甯掔€氼參鍩涢幒鎳ㄥ綊鏁愰崼顐ｇ秷闂侀潧娲ㄩ崰鏍蓟濞戞鐔煎捶椤撶姷鍘梻浣筋嚃閸犳岸宕楀鈧畷娲晸閻樻彃绐涘銈嗘尵婵兘寮抽锔界厽闁绘柨鎽滈惌灞筋熆瑜庨〃鍫ュ极椤曗偓楠炴帡寮崒娆戠憹闂備礁婀遍崕銈夈€冮崱娑欏亗婵炲棙鎸婚悡鐔兼煙鐎甸晲绱虫い蹇撶墛閸婂爼鏌曟径娑滅濞存粍绮嶉妵鍕箳閸℃ぞ澹曟俊鐐€栭崹鐢稿箠濮椻偓閸ㄩ箖寮崼婵堫槰濡炪倖鏌ㄥΣ鍫ｎ樄闁哄本鐩崺鍕礃閸撗冨Ш闂備礁鎲￠悷銉ノ涘Δ鍛厴闁硅揪闄勯崐鐑芥煕濞嗗浚妲撮柡瀣懇濮婃椽宕ㄦ繛鎺濅邯婵″爼骞栨担瑙勬珳闂佺粯鍔曟晶搴ㄦ偪閳ь剟姊洪悷鏉跨稏闁绘帪绠戦—鍐╃鐎ｃ劉鍋撴笟鈧顕€宕煎┑鍫Ч婵＄偑鍊曠换鎰涘☉銏犵９闁绘劗鍎ら埛鎺楁煕鐏炲墽鎳呯紒鎰⒐缁绘稒鎷呴崘鍙夌〗闁搞儺鍓﹂弫鍥煏韫囨洖啸闁挎稓鍠栧娲传閸曨噮娼堕梺绋垮閻撯€崇暦閹版澘閱囬柡鍥╁枔閸橀亶姊洪弬銉︽珔闁哥喍鍗抽崺濠囧即閵忥紕鍘撻梻浣哥仢椤戝懘鎮橀埡鍐＜閺夊牄鍔岀粭褔鏌嶈閸撱劎绱為崱妯碱洸婵犻潧顑呯壕濠氭煏婢舵稖绀嬪ù婊勭矒楠炴牕菐椤掆偓閻掔儤绻涢崼鐔哥闁哄本娲熷畷鎯邦槻妞ゅ浚鍘介妵鍕閳藉懓鈧灝鈹戦鐟颁壕闂備焦鏋奸弲娑㈠疮椤栨埃鏋旂紒瀣氨閺€浠嬫煟閹存繃宸濋柛鎺斿缁绘稓浠﹂崒姘ｅ亾濠靛鏋侀柛鎰靛櫘閺佸倿鏌涢锝囩畼闁伙絾妞藉鐑樺濞嗘垵鍩岄梺娲诲墮閵堟悂骞嗙仦瑙ｆ瀻闁圭偓娼欐禒顖炴⒑鐠団€冲箺閻㈩垱甯楁穱濠囧锤濡や胶鍘告繝銏ｆ硾閿曘儵宕悙鐫酣宕惰闊剟鏌熼鐣屾噰妞ゃ垺妫冨畷鐔煎Ω閵夈倕顥氶梻浣告惈缁嬩線宕㈤懖鈺冧笉闁哄顕抽弮鍫熸櫜闁告侗鍘藉▓顓犵磼閻愵剙鍔ゆい顓犲厴瀵鏁愭径濠勭潉闂佹悶鍎洪悡鍫熺閳哄懏鈷戠紓浣诡焽閻﹥銇勯鐘插幋鐎殿喖顭烽弫鎰緞婵犲嫮鏉告俊鐐€栧濠氬储瑜庢穱濠偯洪鍛嫼闂佽鍎兼慨銈夊极闁秵鐓曢柕濞垮劤缁夌儤顨ラ悙宸█妤犵偞鐗楅幏鍛存偡妫颁胶缍嶉梻鍌欑婢瑰﹪宕戦崨顖涘床闁告洦鍨遍崑锟犳煏婵犲繐顩紒鐘荤畺閹鈽夊▎妯煎姺闂佹椿鍘煎Λ婵嬪蓟濞戞鏃€鎷呯化鏇熺亞闁诲孩顔栭崰娑㈩敋瑜旈崺銉﹀緞婵犲孩寤洪梺绯曞墲閿氱紓鍌涙崌濮婄粯绗熼埀顒勫焵椤掑倸浠滈柤娲诲灡閺呭爼骞嶉鍓э紲濡炪倖姊婚埛鍫ユ偂閼测斁鍋撳▓鍨灈闁逞屽墰閸ｃ儱危妤ｅ啯鈷?(闂傚倸鍊搁崐鎼佸磹閹间礁纾归柟闂寸绾惧綊鏌熼梻瀵割槮缁炬儳缍婇弻鐔兼⒒鐎靛壊妲紒鐐劤缂嶅﹪寮婚悢鍏尖拻閻庨潧澹婂Σ顔剧磼閻愵剙鍔ょ紓宥咃躬瀵鎮㈤崗灏栨嫽闁诲酣娼ф竟濠偽ｉ鍓х＜闁诡垎鍐ｆ寖闂佺娅曢幑鍥灳閺冨牆绀冩い蹇庣娴滈箖鏌ㄥ┑鍡欏嚬缂併劌銈搁弻鐔兼儌閸濄儳袦闂佸搫鐭夌紞渚€銆佸鈧幃娆撳箹椤撶噥妫ч梻鍌欑窔濞佳兾涘▎鎴炴殰闁圭儤顨愮紞鏍ㄧ節闂堟侗鍎愰柡鍛叀閺屾稑鈽夐崡鐐差潻濡炪們鍎查懝楣冨煘閹寸偛绠犻梺绋匡攻椤ㄥ棝骞堥妸鈺傚€婚柦妯侯槺閿涙盯姊虹紒妯哄闁稿簺鍊濆畷鎴犫偓锝庡枟閻撶喐淇婇婵嗗惞婵犫偓娴犲鐓冪憸婊堝礂濞戞碍顐芥慨姗嗗墻閸ゆ洟鏌熺紒銏犳灈妞ゎ偄鎳橀弻锝咁潨閳ь剙顭囪閻涱噣宕奸悢铏圭槇濠电偛鐗嗛悘婵嬪几閻斿吋鐓ラ柡鍥殕濞呭﹦鈧娲忛崹铏圭矉閹烘柡鍋撻敐搴樺亾椤撱劑妾紒缁樼箞濡啫鈽夊▎妯活棓闂備浇銆€閸嬫挸霉閻樺樊鍎愰柍閿嬫閺屾盯濡烽鐓庮潻闂佸搫瀚ㄩ崕鐢稿蓟閳ュ磭鏆ゆい鏃囧鐎氱増绻涢崼顐喊婵﹥妞藉畷銊︾節閸愵煈妲遍梻浣侯焾閿曪附绻涢埀顒勬煙椤斿搫鐏查柟鐓庣秺瀹曠兘顢橀妸褍绨ユ繝鐢靛Х椤ｈ棄危閸涙潙鍨傞梻鍫熺〒閺嗭箑霉閿濆懎鏆斿ù婊冪秺閺屻劌鈹戦崱姗嗘￥缂備讲妾ч崑鎾剁磽娴ｅ搫浜炬繝銏★耿钘濋弶鍫氭櫅椤ユ岸鏌涜椤ㄥ棝鎮￠弴銏″€甸柨婵嗛娴滄粓鏌ｈ箛鎿冨殶闁逞屽墲椤煤濮椻偓瀹曟繂鈻庤箛锝呮婵炲濮撮鎰板极閸ヮ剚鐓熼柟閭﹀弾閸熷繘鏌涢悙鑼煟婵﹦绮幏鍛村川婵犲懐顢呴梻浣瑰劤缁绘劙鏌婇敐鍛殾濞村吋娼欓崘鈧銈嗘尵閸犲酣鍩€椤掆偓濞硷繝寮诲☉鈶┾偓锕傚箣濠靛懐鎸夊┑鐐茬摠缁秶鍒掗幘璇茶摕闁绘梻鍘ф导鐘绘煕閺囥劌澧绘俊顐ゅ仦缁绘稓鈧稒顭囬惌濠傤熆瑜忛弲顐⑽ｉ幇鏉跨婵°倐鍋撶紒鈧崼銏″枑闁瑰瓨绻嶉悗鍫曟煙闂傚鍔嶉柣鎾存礃娣囧﹪顢涘顓熷創闂佹娊鏀卞Λ鍐蓟濞戙垹绠抽柟鎹愭珪鐠囩偤鎮楀▓鍨珮闁革綇绲介悾閿嬬附閸涘﹤浜滈梺鍛婄箓鐎氼剛鐟ч梻鍌欐祰椤曆勵殽閸濄儳涓嶇€广儱顦壕鍧楁煕濡ゅ啫鈧絽鈽夊Ο鍏兼畷闂佸憡娲﹂崑鍡涱敊閸℃瑧纾介柛灞剧懅閸斿秵銇勯鐐村窛缂侇喚绮妶锝夊礃閵娧囩崜闂備礁澹婇崑鍛崲閸岀偛鐓曢柡鍐ㄧ墛閻撴瑦銇勯弮鍌ゅ劆闁稿鍨介弻鈥崇暆鐎ｎ剛袦闂佺硶鏅涚€氭澘鐣峰鈧崺鈩冪節閸愮偓顥堥梻浣筋嚙濮橈箓锝炴径濞掓椽鎮㈡總澶屽姺閻熸粍妫冨畷娲閳╁啫鍔呴梺闈涱焾閸庢娊鎮块埀顒佷繆閻愵亜鈧牠骞愭ィ鍐ㄧ；婵炴垶鐟ラ閬嶅箹濞ｎ剙鐏紒鈾€鍋撴繝鐢靛仜閻楀棝鎮樺┑瀣嚑闁绘梹鎮舵禍婊堟煏婵炲灝鍔滈柛銈呮喘閺岀喖顢欓妸銉︻棤闁汇倐鍋撴繝鐢靛仦閸ㄥ爼鎮烽妷锔绢浄濠靛倸鎲￠埛鎴炴叏閻熺増鎼愰柣蹇婃櫊閺岀喓鎷犺缁♀偓闂佽鍣换婵囦繆閻戣姤鏅滈柛鎾楀懏顫岄梻鍌氬€搁崐鎼佹偋婵犲嫮鐭欓柟鎯х摠濞呯娀鏌￠崶鈺€绱崇憸鐗堝笚閸嬫垿鏌涘☉鍗炲季婵炲樊鍙冨娲焻閻愯尪瀚板褜鍣ｉ弻锝堢疀閺冨洤顥濆銈庡幖閻忔繆鐏掗柣蹇撶箲閻楁洘绂嶉悙顒佸弿婵☆垳鍘х敮鑸电箾閸涱厾效闁哄本鐩崺鐐哄箚瑜屾竟鏇炩攽閿涘嫬浜奸柛濠冪墱閺侇噣骞掑Δ浣规珖闂佹寧鏌ㄦ晶浠嬫儗閹剧粯鐓熼柕蹇曞У閸熺偤鏌ｉ幘瀛樼闁绘搩鍋婂畷鍫曞Ω閿旂粯顥涢梻浣稿悑婵棄鈻旈弴銏犵劦妞ゆ帊绶￠崯蹇涙煕閻樿櫕宕岀€规洘绻堥獮瀣攽閸喐顔曟繝纰樻閸ㄤ即濡舵禒瀣嵍妞ゆ挻绋戞禍楣冩煥濠靛棝顎楀ù婊勭箞閺屸剝寰勭€ｎ偄鈧劖鎱ㄦ繝鍕笡闁瑰嘲鎳橀幖褰掓偡閹殿噮鍋ч梻鍌欑閹测€愁潖閻熸噴娲冀椤撗勬櫔闂佹寧绻傞ˇ顖炴煁閸ヮ剚鐓涢柛銉㈡櫅娴犙囨煕濡粯銇濇慨濠冩そ瀹曨偊宕熼鈧粣娑欑箾閺夋垵鎮戠紒璇茬墦楠炲啴鎮滈懞銉у姺闂佹寧姊归崕鍐差嚕閹惰姤鈷掑ù锝呮啞閸熺偞绻涚拠褏鐣电€规洏鍨洪妶锝夊礃閳轰椒鐥梻浣告啞濞诧箓宕归柆宥呯９闁汇垹鎲￠崑鈩冪箾閸℃绠版い蹇ｄ簽缁辨帡鍩€椤掑嫬绀冮柍鍝勫暟椤旀洟姊洪崨濠勬噧妞わ箒椴搁弲鍫曞垂椤愮姳绨婚梺闈涚箚濡插嫰鎳撶捄銊㈠亾鐟欏嫭绀冩い銊ワ躬楠炲啴鍩勯崘鈺佸妳闂佹寧绻傚ú銊ョ暤娓氣偓濮婄粯鎷呯粵瀣闂佸憡鍨归弲顐ゆ閻愬搫骞㈡繛鎴烆焽椤︻厼鈹戦悙鍙夘棡闁瑰憡鍎抽悾鍨媴闁稓绠氶梺闈涚墕閹冲繘宕冲ú顏呯厓闂佸灝顑呯粭鎺楁婢舵劖鐓ユ繝闈涙閸ｆ椽鏌涢悢鍝勪槐闁哄瞼鍠栭、娑橆潩閸楃偐鍙洪梻浣告惈閺堫剛绮欓幒鏃€宕叉繝闈涱儏绾惧吋绻涢幋鐐电煂妞ゃ垹鎳樺缁樼瑹閳ь剟鍩€椤掑倸浠滈柤娲诲灡閺呰埖瀵肩€涙鍘介梺缁樻⒒椤牓鍩㈤弴鐘亾鐟欏嫭绀冮柛搴°偢钘濋柟缁㈠枟閻撴盯鎮橀悙鍨珪濠⒀嶉檮閹便劍绻濋崨顕呬哗缂備浇椴哥敮鎺曠亽闂佸憡绻傜€氬嘲顭囬弴銏♀拻濞达絼璀﹂悞鍓х磼閵婏附銇濈€规洘鍔曢埞鎴犫偓锝庝簽閻?
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
buildCircle();
setActive(0);
initPhraseLibrary();
setTopTab("training");
setTrainingView(getTrainingView());
setMode("training");
updateScaleAndChord();






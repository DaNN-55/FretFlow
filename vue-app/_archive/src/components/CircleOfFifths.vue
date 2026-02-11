<template>
  <div
    class="circle-module"
    tabindex="0"
    @keydown="onKeydown"
    aria-label="Circle of fifths key selector"
  >
    <header class="circle-header">
      <h2>Circle of Fifths</h2>
      <p>
        Click a key on the wheel to view major/minor scales, diatonic chords,
        and common progressions.
      </p>
    </header>

    <div class="circle-layout">
      <div class="circle-shell">
        <svg class="circle-wheel" :viewBox="`0 0 ${svgSize} ${svgSize}`" role="listbox">
          <circle class="circle-band major-band" :cx="center" :cy="center" :r="outerBandRadius" />
          <circle class="circle-band minor-band" :cx="center" :cy="center" :r="innerBandRadius" />

          <g
            v-for="(_, idx) in circle.keysMajor"
            :key="`major-${idx}`"
            class="key-item major"
            :class="itemClass(idx, 'major')"
          >
            <circle
              class="key-hit-area"
              :cx="pointAt(outerTextRadius, idx).x"
              :cy="pointAt(outerTextRadius, idx).y"
              :r="hitRadius"
              @mouseenter="circle.setHover(idx)"
              @mouseleave="circle.setHover(null)"
              @click="circle.setActive(idx)"
            />
            <rect
              class="key-pill"
              :x="pointAt(outerTextRadius, idx).x - majorPillWidth / 2"
              :y="pointAt(outerTextRadius, idx).y - pillHeight / 2"
              :width="majorPillWidth"
              :height="pillHeight"
              :rx="pillRadius"
              :ry="pillRadius"
            />
            <text class="key-text" :x="pointAt(outerTextRadius, idx).x" :y="pointAt(outerTextRadius, idx).y">
              {{ circle.keysMajor[idx] }}
            </text>
          </g>

          <g
            v-for="(_, idx) in circle.keysMinor"
            :key="`minor-${idx}`"
            class="key-item minor"
            :class="itemClass(idx, 'minor')"
          >
            <circle
              class="key-hit-area"
              :cx="pointAt(innerTextRadius, idx).x"
              :cy="pointAt(innerTextRadius, idx).y"
              :r="hitRadius"
              @mouseenter="circle.setHover(idx)"
              @mouseleave="circle.setHover(null)"
              @click="circle.setActive(idx)"
            />
            <rect
              class="key-pill"
              :x="pointAt(innerTextRadius, idx).x - minorPillWidth / 2"
              :y="pointAt(innerTextRadius, idx).y - pillHeight / 2"
              :width="minorPillWidth"
              :height="pillHeight"
              :rx="pillRadius"
              :ry="pillRadius"
            />
            <text class="key-text" :x="pointAt(innerTextRadius, idx).x" :y="pointAt(innerTextRadius, idx).y">
              {{ circle.keysMinor[idx] }}
            </text>
          </g>
        </svg>
      </div>

      <aside class="circle-info" aria-live="polite">
        <h3 class="circle-info-title">{{ circle.majorKey }} Major / {{ circle.minorKey }}</h3>

        <section class="circle-info-block">
          <h4>Major Scale</h4>
          <div class="circle-chip-row">
            <span v-for="note in circle.majorScaleNotes" :key="`maj-scale-${note}`" class="circle-chip">{{ note }}</span>
          </div>
        </section>

        <section class="circle-info-block">
          <h4>Minor Scale</h4>
          <div class="circle-chip-row">
            <span v-for="note in circle.minorScaleNotes" :key="`min-scale-${note}`" class="circle-chip">{{ note }}</span>
          </div>
        </section>

        <section class="circle-info-block">
          <h4>Diatonic Chords (Major)</h4>
          <div class="circle-diatonic-grid">
            <div class="label">Degree</div>
            <div class="row">
              <span v-for="row in circle.majorDiatonicChords" :key="`maj-roman-${row.degree}`" class="roman-cell">{{ row.degree }}</span>
            </div>
            <div class="label">Chord</div>
            <div class="row">
              <span v-for="row in circle.majorDiatonicChords" :key="`maj-chord-${row.degree}`" class="chord-cell">{{ row.chord }}</span>
            </div>
          </div>
        </section>

        <section class="circle-info-block">
          <h4>Diatonic Chords (Minor)</h4>
          <div class="circle-diatonic-grid">
            <div class="label">Degree</div>
            <div class="row">
              <span v-for="row in circle.minorDiatonicChords" :key="`min-roman-${row.degree}`" class="roman-cell">{{ row.degree }}</span>
            </div>
            <div class="label">Chord</div>
            <div class="row">
              <span v-for="row in circle.minorDiatonicChords" :key="`min-chord-${row.degree}`" class="chord-cell">{{ row.chord }}</span>
            </div>
          </div>
        </section>

        <section class="circle-info-block">
          <h4>Common Progressions</h4>
          <div class="circle-list">
            <div v-for="item in circle.progressions" :key="item.template" class="circle-row">
              <span class="roman">{{ item.template }}</span>
              <span class="value">{{ item.resolved }}</span>
            </div>
          </div>
        </section>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { useCircleStore } from "../stores/circle";

const circle = useCircleStore();

const svgSize = 720;
const center = 360;
const outerBandRadius = 280;
const innerBandRadius = 196;
const outerTextRadius = 278;
const innerTextRadius = 194;
const hitRadius = 30;
const angleStep = 30;
const startAngleDeg = -90;
const majorPillWidth = 62;
const minorPillWidth = 66;
const pillHeight = 30;
const pillRadius = 8;

function pointAt(radius, idx) {
  const angleDeg = startAngleDeg + idx * angleStep;
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: center + Math.cos(rad) * radius,
    y: center + Math.sin(rad) * radius,
  };
}

function itemClass(idx, type) {
  const keyLabel = type === "major" ? circle.keysMajor[idx] : circle.keysMinor[idx];
  return {
    "is-active": idx === circle.activeIndex,
    "is-hover": idx === circle.hoverIndex && idx !== circle.activeIndex,
    "is-related": circle.relatedChordSet.has(keyLabel) && idx !== circle.activeIndex,
  };
}

function onKeydown(event) {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    circle.shift(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    circle.shift(1);
  } else if (event.key === "Enter" && circle.hoverIndex != null) {
    event.preventDefault();
    circle.setActive(circle.hoverIndex);
  }
}
</script>

<template>
  <div>
    <div class="phrase-library-head">
      <h2>Phrase Library</h2>
      <p>Click + to upload score files (gtp/gp/xml) and audio (mp3/m4a/wav).</p>
    </div>

    <input
      id="phraseUpload"
      ref="inputRef"
      type="file"
      class="phrase-file-input"
      multiple
      accept=".gtp,.gp3,.gp4,.gp5,.gpx,.gp,.xml,.musicxml,.mxl,.mscz,.mscx,.ptb,.mp3,.m4a,.wav,.flac,.ogg,.aac,audio/mpeg,audio/mp4,audio/x-m4a,audio/aac,audio/wav,audio/ogg,audio/flac"
      @change="onUpload"
    />

    <div class="phrase-grid">
      <article
        v-for="item in phrase.items"
        :key="item.id"
        class="phrase-card phrase-file-card"
      >
        <h3 class="phrase-card-title">{{ item.title }}</h3>
        <p class="phrase-card-author">{{ item.author }}</p>
        <p class="phrase-card-time">{{ item.uploadedAt }}</p>
        <p class="phrase-card-type">{{ item.kind }}</p>
      </article>

      <button type="button" class="phrase-card phrase-upload-card" @click="triggerUpload">
        <span>+</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePhraseStore } from "../stores/phrase";

const phrase = usePhraseStore();
const inputRef = ref(null);

function triggerUpload() {
  inputRef.value?.click();
}

function onUpload(event) {
  const target = event.target;
  phrase.addFiles(target.files);
  target.value = "";
}
</script>

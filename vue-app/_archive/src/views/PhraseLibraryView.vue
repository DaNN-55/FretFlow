<template>
  <section class="phrase-library-demo tab-panel tab-panel-phrase active" id="phraseTabPanel">
    <PhraseLibrary />
  </section>
</template>

<script setup>
import PhraseLibrary from "../components/PhraseLibrary.vue";
import { useUiStore } from "../stores/ui";

const ui = useUiStore();
ui.setTopTab("phrase");
</script>

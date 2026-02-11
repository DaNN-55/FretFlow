import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", () => {
  const topTab = ref("training");
  const mode = ref("training");

  const isCircle = computed(() => mode.value === "circle");
  const isTraining = computed(() => mode.value === "training");
  const isCaged = computed(() => mode.value === "caged");

  function setTopTab(next) {
    topTab.value = next === "phrase" ? "phrase" : "training";
  }

  function setMode(next) {
    const allowed = ["training", "caged", "circle"];
    mode.value = allowed.includes(next) ? next : "training";
  }

  return {
    topTab,
    mode,
    isCircle,
    isTraining,
    isCaged,
    setTopTab,
    setMode,
  };
});

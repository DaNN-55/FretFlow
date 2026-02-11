import { createRouter, createWebHashHistory } from "vue-router";
import TrainingView from "../views/TrainingView.vue";
import PhraseLibraryView from "../views/PhraseLibraryView.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/training" },
    { path: "/training", name: "training", component: TrainingView },
    { path: "/phrase", name: "phrase", component: PhraseLibraryView },
  ],
});

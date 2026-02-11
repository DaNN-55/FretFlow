import { createApp } from "vue";
import App from "./App.vue";
import "./legacy/guitartraining.css";
import "./legacy/chord-arpeggio.css";
import "./vue-overrides.css";

const app = createApp(App);
app.mount("#app");

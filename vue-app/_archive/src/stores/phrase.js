import { ref } from "vue";
import { defineStore } from "pinia";

const scoreExtensions = new Set(["gtp", "gp3", "gp4", "gp5", "gpx", "gp", "xml", "musicxml", "mxl", "mscz", "mscx", "ptb"]);
const audioExtensions = new Set(["mp3", "m4a", "wav", "flac", "ogg", "aac"]);

function fileExt(name) {
  const idx = name.lastIndexOf(".");
  if (idx < 0) return "";
  return name.slice(idx + 1).toLowerCase();
}

function fileKind(name) {
  const ext = fileExt(name);
  if (scoreExtensions.has(ext)) return `曲谱 · .${ext}`;
  if (audioExtensions.has(ext)) return `音频 · .${ext}`;
  return ext ? `文件 · .${ext}` : "文件";
}

export const usePhraseStore = defineStore("phrase", () => {
  const items = ref([]);

  function addFiles(fileList) {
    const now = new Date();
    const timestamp = now.toLocaleString("zh-CN", { hour12: false });
    const files = Array.from(fileList || []);
    files.forEach((file) => {
      items.value.unshift({
        id: `${file.name}-${file.size}-${file.lastModified}`,
        title: file.name,
        author: "本地上传",
        uploadedAt: timestamp,
        kind: fileKind(file.name),
      });
    });
  }

  return {
    items,
    addFiles,
  };
});

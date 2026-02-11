# Vue App 文件说明（当前版本）

## 1) 当前实际生效（运行链路）

### 根目录
- `index.html`
  - Vite 入口 HTML，提供 `#app` 挂载点。
- `package.json`
  - 项目依赖与脚本（`dev` / `build` / `preview`）。
- `vite.config.js`
  - Vite 配置（启用 Vue 插件）。

### `src/`
- `src/main.js`
  - 应用启动入口：创建 Vue App，挂载 `App.vue`。
  - 引入当前生效样式：
    - `src/legacy/guitartraining.css`
    - `src/legacy/chord-arpeggio.css`
    - `src/vue-overrides.css`

- `src/App.vue`
  - 当前完整页面结构。
  - 在 `onMounted` 时动态加载：
    - `src/legacy/chord-arpeggio-runtime.js`

- `src/legacy/chord-arpeggio-runtime.js`
  - 当前核心交互逻辑：
    - 指板渲染与点击发声
    - 训练模式 / CAGED / 五度圈模式切换
    - 五度圈数据计算与交互
    - 乐句库上传列表
    - 节拍器

- `src/legacy/chord-arpeggio.css`
  - 主视觉样式（布局、五度圈、乐句库、节拍器等）。

- `src/legacy/guitartraining.css`
  - 指板基础样式（弦、品位、音符等）。

- `src/vue-overrides.css`
  - 轻量覆盖层（尽量不直接改 legacy 文件时可用）。

## 2) 已归档（当前不参与运行）

以下文件已从 `src/` 移出并归档到 `_archive/`，用于保留历史方案：

- `vue-app/_archive/src/components/CircleOfFifths.vue`
- `vue-app/_archive/src/components/PhraseLibrary.vue`
- `vue-app/_archive/src/views/TrainingView.vue`
- `vue-app/_archive/src/views/PhraseLibraryView.vue`
- `vue-app/_archive/src/router/index.js`
- `vue-app/_archive/src/stores/ui.js`
- `vue-app/_archive/src/stores/circle.js`
- `vue-app/_archive/src/stores/phrase.js`
- `vue-app/_archive/src/styles.css`

说明：这些是早期“组件化 + 路由 + Pinia”迁移阶段文件，当前入口未引用。

## 3) 维护建议

- 日常功能迭代优先修改：
  - `src/App.vue`
  - `src/legacy/chord-arpeggio-runtime.js`
  - `src/legacy/chord-arpeggio.css`

- 若后续继续组件化改造：
  - 再逐步恢复 `router + views + components + stores`
  - 将 `legacy/chord-arpeggio-runtime.js` 拆分为组件与 composables

## 4) 一句话总结

当前 `vue-app` 是“Vue 壳 + legacy 运行时”架构：
入口是 Vue，核心业务交互主要在 `src/legacy/chord-arpeggio-runtime.js`。

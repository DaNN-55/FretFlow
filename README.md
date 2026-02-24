# FretFlow

FretFlow 是一个用于吉他指板训练的 Vue 3 + Vite 项目。

当前主应用位于 `vue-app/`，采用“Vue 外壳 + legacy 运行时”的结构：页面由 Vue 挂载，核心交互逻辑主要在 `vue-app/src/legacy/chord-arpeggio-runtime.js`。

## 当前功能（以 `vue-app` 为准）

- 自由训练（音阶 / 和弦 / CAGED / 五度圈）
- 节拍器（BPM、拍号、灯光提示、折叠）
- 顶部“乐句库”入口已改为外链：新标签页打开 Songsterr

说明：仓库根目录下的 `src/` 为历史静态版本，当前已废弃，不作为主开发入口。

## 在线地址

- GitHub Pages: <https://dann-55.github.io/FretFlow/>

## 技术栈

- Vue 3
- Vite
- 原生 CSS / JavaScript（包含 legacy 运行时代码）
- GitHub Pages（GitHub Actions 部署）

## 本地开发

### 环境要求

- Node.js `20+`（建议 `22.x`）
- npm `10+`

### 安装依赖

```bash
cd vue-app
npm install
```

### 启动开发环境

```bash
npm run dev
```

启动后打开终端输出的本地地址（通常是 `http://localhost:5173/`）。

### 构建生产版本

```bash
npm run build
```

### 本地预览构建产物

```bash
npm run preview
```

## 项目结构（当前有效）

```text
FretFlow/
├─ .github/workflows/           # GitHub Pages 部署工作流
├─ vue-app/                     # 当前主项目（请在这里开发）
│  ├─ index.html
│  ├─ vite.config.js
│  ├─ package.json
│  ├─ FILES_GUIDE.md            # 当前生效文件说明（建议先读）
│  └─ src/
│     ├─ main.js                # Vue 入口，挂载 App
│     ├─ App.vue                # 页面结构（Vue 壳）
│     ├─ vue-overrides.css      # 覆盖层样式（优先在此做轻量覆盖）
│     └─ legacy/
│        ├─ chord-arpeggio-runtime.js  # 核心交互逻辑
│        ├─ chord-arpeggio.css         # 主视觉样式
│        └─ guitartraining.css         # 指板基础样式
└─ src/                         # 历史静态版本（已废弃，不再维护）
```

## 开发约定（重要）

- 优先修改 `vue-app/`，不要再把功能改到根目录 `src/`
- 轻量样式调整优先放在 `vue-app/src/vue-overrides.css`
- 若涉及核心交互（模式切换、指板渲染、五度圈、节拍器），通常需要改 `vue-app/src/legacy/chord-arpeggio-runtime.js`
- `App.vue` 主要负责页面结构与挂载，不建议把大量业务逻辑继续堆进去

## 手动验证清单（推荐）

运行 `vue-app` 后，至少验证以下内容：

- 顶部 `自由训练` 正常显示训练页
- 顶部 `乐句库` 在新标签页打开 Songsterr，当前页不跳转
- 模式切换（训练 / CAGED / 五度圈）正常
- 指板渲染、点击发声正常
- 五度圈交互与切换正常
- 节拍器开关、BPM、拍号、折叠按钮正常
- 移动端和桌面端布局无明显错位

## 部署说明（GitHub Pages）

- 工作流文件：`.github/workflows/deploy-pages.yml`
- 触发条件：推送到 `main`
- 部署目录：`vue-app/dist`

请确认仓库设置：

1. `Settings -> Pages -> Source` 选择 `GitHub Actions`
2. `Settings -> Actions -> General -> Workflow permissions` 选择 `Read and write permissions`

## Vite Base 路径

`vue-app/vite.config.js` 当前配置：

```js
base: "/FretFlow/";
```

用于适配 GitHub Pages 项目路径。

## 备注

- 历史版本/废弃代码仍保留在仓库中，主要用于参考或迁移对照
- 若后续恢复“乐句库”内置功能，建议在 `vue-app` 内重新设计数据结构与组件边界，不再继续扩展旧的 legacy 乐句库逻辑

# FretFlow

一个基于 Vue 3 + Vite 的吉他训练与乐句管理项目，包含：
- 自由训练（音阶/和弦/CAGED/五度圈）
- 乐句库（上传与预览曲谱、音频、图片、PDF）
- 节拍器等辅助功能

线上地址：<https://dann-55.github.io/FretFlow/>

## 技术栈

- Vue 3
- Vite
- 原生 CSS / JS（含部分 legacy 逻辑迁移）
- GitHub Pages（GitHub Actions 自动部署）

## 本地开发

### 1. 环境要求

- Node.js `20+`（建议 `22.x`）
- npm `10+`（随 Node 版本）

### 2. 安装依赖

```bash
cd vue-app
npm install
```

### 3. 启动开发环境

```bash
npm run dev
```

### 4. 构建生产包

```bash
npm run build
```

## 目录结构（核心）

```text
FretFlow/
├─ .github/workflows/         # GitHub Actions 工作流（Pages 自动部署）
├─ vue-app/                   # Vue 主项目
│  ├─ index.html
│  ├─ vite.config.js
│  ├─ package.json
│  └─ src/
│     ├─ App.vue
│     └─ legacy/
│        ├─ chord-arpeggio-runtime.js
│        ├─ chord-arpeggio.css
│        └─ guitartraining.css
└─ src/                       # 旧版静态页面（已忽略，不再作为主开发入口）
```

## 自动部署（GitHub Pages）

仓库已配置自动部署工作流：

- 工作流文件：`.github/workflows/deploy-pages.yml`
- 触发条件：`push` 到 `main`
- 部署目标：`vue-app/dist` -> GitHub Pages

请确保仓库设置如下：

1. `Settings -> Pages -> Source` 选择 **GitHub Actions**
2. `Settings -> Actions -> General -> Workflow permissions` 选择 **Read and write permissions**

## Vite Base 路径

`vue-app/vite.config.js` 中已使用：

```js
base: "/FretFlow/"
```

用于匹配 GitHub Pages 项目路径。

## 乐句库数据存储说明

当前乐句库上传内容保存在浏览器本地 `IndexedDB`：

- DB 名称：`fretflow_phrase_library`
- Store：`phrases`

注意：
- 仅当前浏览器/设备可见
- 清除站点数据后会丢失
- 不会随 GitHub Pages 自动同步

## Git 忽略规则（当前）

已忽略（不再建议提交）：

- `.history/`
- `src/`
- `frame.excalidraw`

## 后续建议

如果你希望“登录后跨设备同步乐句库”，建议下一步接入云端后端（如 Supabase）：
- 用户认证（登录）
- 元数据入库（Postgres）
- 文件存储（Object Storage）
- 前端按 `user_id` 查询个人数据


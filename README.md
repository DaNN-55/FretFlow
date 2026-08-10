# FretFlow

[FretFlow](https://dann-55.github.io/FretFlow/) 是一个用于吉他指板训练的 Vue 3 + Vite 应用。

项目从真实练习场景出发，把音阶、和弦、CAGED、五度圈和节拍器整合到一个可直接使用的训练页面中。它是我独立完成的个人产品，用于探索“明确训练目标—即时反馈—持续练习”的工具化体验。

## Online demo

https://dann-55.github.io/FretFlow/

## Current features

- 自由训练：音阶、和弦、CAGED、五度圈
- 指板交互与音符反馈
- 节拍器：BPM、拍号和灯光提示
- 响应式桌面与移动端布局
- 乐句库入口：在新标签页打开 Songsterr

## Technical overview

当前主应用位于 vue-app/，采用 Vue 外壳 + legacy 运行时的结构：

- Vue 3
- Vite
- Pinia / Vue Router
- 原生 CSS / JavaScript
- GitHub Pages + GitHub Actions

核心交互主要位于：

- vue-app/src/App.vue：页面结构与应用挂载
- vue-app/src/legacy/chord-arpeggio-runtime.js：指板、训练模式和节拍器逻辑
- vue-app/src/vue-overrides.css：轻量样式覆盖

根目录的 src/ 和 vue-app/_archive/ 仅用于历史参考，当前开发以 vue-app/ 为准。

## Local development

环境要求：Node.js 20+，建议使用 Node.js 22.x；npm 10+。

~~~
cd vue-app
npm install
npm run dev
~~~

生产构建：

~~~
cd vue-app
npm run build
npm run preview
~~~

## Validation checklist

- 自由训练页面正常显示
- 模式切换正常
- 指板渲染和点击发声正常
- 五度圈切换正常
- 节拍器开关、BPM、拍号和折叠按钮正常
- 移动端和桌面端无明显错位
- GitHub Pages 构建和发布正常

## Deployment

GitHub Pages 工作流位于 .github/workflows/deploy-pages.yml，部署目录为 vue-app/dist。

Vite 使用项目路径：

~~~
base: "/FretFlow/"
~~~

## Project status

项目仍在迭代中。当前重点是保持核心训练流程稳定，并逐步改善移动端体验和训练反馈。

## License

This project is a personal learning and product prototyping project.

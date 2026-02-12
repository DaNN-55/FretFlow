<template>
  <div class="page">
    <header class="page-hero">
      <div class="hero-copy">
        <p class="eyebrow">FretFlow</p>
        <h1>FretFlow · 音乐从指板到表达</h1>
        <p class="hero-subtitle">
          不再死记音阶与指型，而是理解它们为什么好听。
        </p>
        <p class="hero-subtitle">
          通过节奏、听觉与和声训练，让手指、耳朵与音乐建立连接。
        </p>
      </div>
      <div class="hero-card">
        <div class="hero-card-title">训练提示</div>
        <div class="hero-card-body">
          <div class="tip-row">
            <span class="tip-label">节奏</span>
            <span>先慢速练习，拍子稳定后再加速。</span>
          </div>
          <div class="tip-row">
            <span class="tip-label">听感</span>
            <span>先在脑中听到再弹，听出每个音是“紧张”还是“放松”。</span>
          </div>
          <div class="tip-row">
            <span class="tip-label">定位</span>
            <span>随时知道自己落在根音还是和弦音。</span>
          </div>
        </div>
      </div>
    </header>

    <section class="top-tabs" role="tablist" aria-label="页面功能切换">
      <button
        type="button"
        class="top-tab-btn active"
        data-top-tab="training"
        role="tab"
        aria-selected="true"
      >
        自由训练
      </button>
      <button
        type="button"
        class="top-tab-btn"
        data-top-tab="phrase"
        role="tab"
        aria-selected="false"
      >
        乐句库
      </button>
    </section>

    <div class="tab-panel tab-panel-training active" id="trainingTabPanel">
      <section class="control-panel">
        <div class="mode-toggle" role="tablist" aria-label="训练模式切换">
          <button
            type="button"
            class="mode-btn active"
            data-mode="training"
            role="tab"
            aria-selected="true"
          >
            训练模式
          </button>
          <button
            type="button"
            class="mode-btn"
            data-mode="caged"
            role="tab"
            aria-selected="false"
          >
            CAGED 模式
          </button>
          <button
            type="button"
            class="mode-btn"
            data-mode="circle"
            role="tab"
            aria-selected="false"
          >
            五度圈模式
          </button>
        </div>
        <div class="control-panel-grid">
          <div class="control-group training-only scale-group">
            <div class="group-title">选择模式</div>
            <div class="control-row compact-controls">
              <div class="field training-mode-field">
                <div
                  class="training-view-toggle"
                  role="tablist"
                  aria-label="训练内容选择"
                >
                  <button
                    type="button"
                    class="training-view-btn"
                    data-training-view="none"
                    role="tab"
                    aria-selected="false"
                  >
                    自由
                  </button>
                  <button
                    type="button"
                    class="training-view-btn active"
                    data-training-view="scale"
                    role="tab"
                    aria-selected="true"
                  >
                    音阶
                  </button>
                  <button
                    type="button"
                    class="training-view-btn"
                    data-training-view="chord"
                    role="tab"
                    aria-selected="false"
                  >
                    和弦
                  </button>
                </div>
              </div>
              <div class="training-option-row">
                <label class="field" id="rootBox">
                  <span class="field-label">根音</span>
                  <select id="rootSelect" aria-label="选择根音">
                    <option value="C">C</option>
                    <option value="C#">C#</option>
                    <option value="D">D</option>
                    <option value="D#">D#</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="F#">F#</option>
                    <option value="G">G</option>
                    <option value="G#">G#</option>
                    <option value="A">A</option>
                    <option value="A#">A#</option>
                    <option value="B">B</option>
                  </select>
                </label>
                <div
                  id="scaleBox"
                  data-training-field="scale"
                  class="training-row"
                >
                  <label class="field">
                    <span class="field-label">调式</span>
                    <select id="scaleSelect" aria-label="选择音阶调式">
                      <option value="major">自然大调</option>
                      <option value="minor">自然小调</option>
                      <option value="pentatonicMajor">大五声音阶</option>
                      <option value="pentatonicMinor">小五声音阶</option>
                      <option value="blues">布鲁斯音阶</option>
                    </select>
                  </label>
                </div>
                <div
                  id="chordBox"
                  data-training-field="chord"
                  hidden
                  class="training-row"
                >
                  <label class="field">
                    <span class="field-label">和弦</span>
                    <select id="chordSelect" aria-label="选择和弦类型">
                      <option value="majorTriad">大三和弦</option>
                      <option value="minorTriad">小三和弦</option>
                      <option value="sus2">挂二和弦</option>
                      <option value="sus4">挂四和弦</option>
                      <option value="dominant7">属七和弦</option>
                      <option value="major7">大七和弦</option>
                      <option value="minor7">小七和弦</option>
                    </select>
                  </label>
                  <label class="field">
                    <span class="field-label">把位</span>
                    <div class="chord-position-control">
                      <select
                        id="chordPositionSelect"
                        aria-label="选择和弦把位"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <button
                        type="button"
                        id="chordPositionPlayBtn"
                        class="chord-position-play-btn"
                        aria-label="播放当前把位和弦"
                        title="播放当前把位和弦"
                      >
                        ▶
                      </button>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="control-group caged-only">
            <div class="group-title">CAGED 指型</div>
            <div class="control-row">
              <div class="btn-group">
                <button type="button" data-pattern="1" aria-pressed="false">
                  C 指型
                </button>
                <button type="button" data-pattern="2" aria-pressed="false">
                  A 指型
                </button>
                <button type="button" data-pattern="3" aria-pressed="false">
                  G 指型
                </button>
                <button type="button" data-pattern="4" aria-pressed="false">
                  E 指型
                </button>
                <button type="button" data-pattern="5" aria-pressed="false">
                  D 指型
                </button>
              </div>
              <div class="switch-box">
                <span class="switch-label">CAGED System</span>
                <label class="switch">
                  <input
                    type="checkbox"
                    id="cagedToggle"
                    aria-label="切换 CAGED 和弦音显示"
                  />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
          </div>

          <div class="control-group circle-only circle-mode-group">
            <div
              class="circle-module"
              id="circleModule"
              tabindex="0"
              aria-label="五度圈调性选择器"
            >
              <header class="circle-header">
                <h2>五度圈</h2>
                <p>
                  点击圆环调名查看对应大调音阶、自然和弦与常见和弦进行，帮助快速建立调性与和声关系。
                </p>
              </header>
              <div class="circle-layout">
                <div class="circle-shell">
                  <svg
                    class="circle-wheel"
                    id="circleWheel"
                    viewBox="0 0 720 720"
                    role="listbox"
                    aria-label="五度圈调名列表"
                  ></svg>
                </div>
                <aside class="circle-info" id="circleInfoPanel" aria-live="polite">
                  <h3 class="circle-info-title" id="circleKeyTitle">
                    C大调/A小调
                  </h3>
                  <p class="circle-info-desc">
                    关系大小调共享同一组音高，但重心不同：大调以主和弦呈现明亮稳定，小调以主和弦营造内敛张力。理解两者对应后，你可以在同一把位下快速切换旋律走向、和声色彩与段落情绪，让编配与即兴更连贯。
                  </p>
                  <section class="circle-info-block">
                    <h4>关系大小调</h4>
                    <div class="circle-list" id="circleDiatonicChords"></div>
                  </section>
                  <section class="circle-info-block">
                    <h4>常见和弦进行</h4>
                    <div class="circle-list" id="circleProgressions"></div>
                  </section>
                </aside>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section
        class="fretboard-section training-only"
        id="trainingFretboardSection"
      >
        <div class="fretboard-shell" id="fretboardShell">
          <div class="training-toast" id="trainingToast">
            点击任意品位即可发声；切换不同模式可学习音阶与和弦分布。
          </div>
          <div class="fretboard-wrapper">
            <div id="fretboard" class="fretboard"></div>
            <div id="fretNumbers" class="fret-numbers"></div>
          </div>
        </div>
      </section>

      <section
        class="fretboard-section caged-only"
        id="cagedFretboardSection"
      >
        <div id="cagedFretboardMount"></div>
      </section>

    </div>

    <section
      class="phrase-library-demo tab-panel tab-panel-phrase"
      id="phraseTabPanel"
    >
      <div class="phrase-library-head">
        <h2>乐句库</h2>
      </div>
      <div class="phrase-library-filters">
        <label class="phrase-filter-field" for="phraseTagFilterSelect">
          <span>标签筛选</span>
          <select id="phraseTagFilterSelect" aria-label="按标签筛选乐句">
            <option value="">全部标签</option>
            <option value="曲谱">曲谱</option>
            <option value="音频">音频</option>
            <option value="文档">文档</option>
            <option value="图片">图片</option>
            <option value="其他">其他</option>
          </select>
        </label>
        <label class="phrase-filter-field phrase-filter-search" for="phraseTitleSearchInput">
          <span>标题搜索</span>
          <input
            id="phraseTitleSearchInput"
            type="search"
            placeholder="输入乐句名称"
            aria-label="按标题搜索乐句"
          />
        </label>
      </div>
      <div class="phrase-grid" id="phraseList"></div>
    </section>
  </div>

  <div
    class="phrase-modal"
    id="phraseFormModal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="phraseFormTitle"
    hidden
  >
    <div class="phrase-modal-panel">
      <div class="phrase-modal-head">
        <h3 id="phraseFormTitle">新增乐句</h3>
        <button
          type="button"
          class="phrase-modal-close"
          id="phraseFormCloseBtn"
          aria-label="关闭新增乐句弹窗"
        >
          ×
        </button>
      </div>
      <form id="phraseForm" class="phrase-form">
        <label class="field">
          <span class="field-label">名称</span>
          <input
            id="phraseNameInput"
            name="title"
            type="text"
            maxlength="64"
            required
            placeholder="例如：Hotel California Solo"
          />
        </label>
        <label class="field">
          <span class="field-label">作者</span>
          <input
            id="phraseAuthorInput"
            name="author"
            type="text"
            maxlength="64"
            required
            placeholder="例如：Eagles"
          />
        </label>
        <label class="field">
          <span class="field-label">上传时间</span>
          <input id="phraseUploadedAtInput" name="uploadedAt" type="datetime-local" required />
        </label>
        <label class="field">
          <span class="field-label">上传文件</span>
          <input
            id="phraseFileInput"
            name="file"
            type="file"
            accept=".gtp,.gp3,.gp4,.gp5,.gpx,.gp,.xml,.musicxml,.mxl,.mscz,.mscx,.ptb,.mp3,.m4a,.wav,.flac,.ogg,.aac,.jpg,.jpeg,.png,.webp,.gif,.pdf,audio/mpeg,audio/mp4,audio/x-m4a,audio/aac,audio/wav,audio/ogg,audio/flac,image/*,application/pdf"
            required
          />
        </label>
        <label class="field">
          <span class="field-label">文件标签</span>
          <select id="phraseTagInput" name="fileTag">
            <option value="曲谱">曲谱</option>
            <option value="音频">音频</option>
            <option value="文档">文档</option>
            <option value="图片">图片</option>
            <option value="其他">其他</option>
          </select>
        </label>
        <div class="phrase-form-actions">
          <button type="button" id="phraseFormCancelBtn" class="btn-ghost">
            取消
          </button>
          <button type="submit" class="btn-primary">保存乐句</button>
        </div>
      </form>
    </div>
  </div>

  <div
    class="phrase-modal"
    id="phraseViewerModal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="phraseViewerTitle"
    hidden
  >
    <div class="phrase-modal-panel phrase-viewer-panel">
      <div class="phrase-modal-head">
        <h3 id="phraseViewerTitle">乐句预览</h3>
        <button
          type="button"
          class="phrase-modal-close"
          id="phraseViewerCloseBtn"
          aria-label="关闭乐句预览弹窗"
        >
          ×
        </button>
      </div>
      <div id="phraseViewerMeta" class="phrase-viewer-meta"></div>
      <div id="phraseViewerBody" class="phrase-viewer-body"></div>
    </div>
  </div>

  <aside class="fixed-metronome" aria-label="全局节拍器">
    <button
      type="button"
      class="metronome-collapse-btn"
      id="metronomeCollapseBtn"
      aria-label="收起节拍器"
      aria-expanded="true"
    >
      >
    </button>
    <div class="fixed-metronome-title">节拍器</div>
    <div class="metronome-toggle">
      <label for="metronomeToggle">开启</label>
      <label class="switch">
        <input type="checkbox" id="metronomeToggle" aria-label="开启节拍器" />
        <span class="slider"></span>
      </label>
    </div>
    <div class="metronome-signature-control">
      <label for="metronomeSignature">拍号</label>
      <select id="metronomeSignature" aria-label="选择拍号">
        <option value="2/4">2/4</option>
        <option value="3/4">3/4</option>
        <option value="4/4" selected>4/4</option>
        <option value="5/4">5/4</option>
        <option value="6/4">6/4</option>
      </select>
    </div>
    <div class="metronome-speed">
      <label for="metronomeSpeed">速度 (BPM)</label>
      <input
        type="range"
        id="metronomeSpeed"
        min="40"
        max="200"
        value="120"
      />
    </div>
    <div class="metronome-speed-value">
      <span id="speedValue">120</span> BPM
    </div>
    <div class="metronome-light-row" aria-hidden="true"></div>
  </aside>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(async () => {
  document.body.classList.add("chord-arpeggio", "mode-training");
  if (!window.__fretflowRuntimeLoaded) {
    window.__fretflowRuntimeLoaded = true;
    await import("./legacy/chord-arpeggio-runtime.js");
  }
});
</script>

# Clashvpn 网站实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 复刻 clashvps.com 网站（Clash客户端下载站），每个子页面集成 Waline 邮箱登录评论功能

**Architecture:** 纯静态 HTML 网站，托管在 GitHub Pages，每个页面独立评论区通过 Waline + LeanCloud 实现

**Tech Stack:** HTML/CSS/JS（静态）、Waline v3、LeanCloud 国际版

---

## 文件结构

```
clashvpn/
├── index.html                    # 首页
├── ny/index.html                 # 奈云
├── sy/index.html                 # 瞬云
├── dageyun/index.html            # 大哥云
├── jilianyun/index.html          # 极连云
├── feimiaoyun/index.html         # 肥猫云
├── sanfanyun/index.html          # 三番云
├── youxinyun/index.html          # 优信云
├── feiniaoyun/index.html         # 飞鸟云
├── yangfanyun/index.html         # 扬帆云
├── longmiaoyun/index.html        # 龙猫云
├── xiaoxuanfeng/index.html       # 小旋风
├── jinglingxueyuan/index.html     # 精灵学院
├── css/
│   ├── bootstrap.min.css         # Bootstrap 4
│   ├── font-awesome.min.css      # FontAwesome
│   ├── main.css                  # 自定义样式
│   └── style.css                 # WordPress 样式（复用）
├── js/
│   └── jquery.min.js             # jQuery
├── img/                          # 图片资源
└── docs/
    └── plans/                    # 实现计划
```

---

## Task 1: 创建目录结构和基础文件

**Files:**
- Create: `css/bootstrap.min.css`
- Create: `css/font-awesome.min.css`
- Create: `css/main.css`
- Create: `css/style.css`
- Create: `js/jquery.min.js`

- [ ] **Step 1: 创建目录结构**

```bash
mkdir -p css js img ny sy dageyun jilianyun feimiaoyun sanfanyun youxinyun feiniaoyun yangfanyun longmiaoyun xiaoxuanfeng jinglingxueyuan
```

- [ ] **Step 2: 下载 Bootstrap CSS**
  从 https://getbootstrap.com/ 或使用 CDN 引用

- [ ] **Step 3: 下载 FontAwesome CSS**
  从 https://fontawesome.com/ 或使用 CDN 引用

- [ ] **Step 4: 创建 main.css（网站自定义样式）**

```css
/* 站点导航样式 */
.site-navbar { list-style: none; padding: 0; margin: 0; }
.site-navbar li a { display: block; padding: 10px 40px; font-size: 18px; border-bottom: 1px solid #eee; text-decoration: none; color: #333; }
.site-navbar li a:hover { background: #f5f5f5; }

/* 评论区样式 */
#waline { margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; }

/* 页面容器 */
.container-page { display: flex; gap: 20px; }
.pageside { width: 200px; flex-shrink: 0; }
.content { flex: 1; }

/* 响应式 */
@media (max-width: 768px) {
  .container-page { flex-direction: column; }
  .pageside { width: 100%; }
}
```

---

## Task 2: 创建首页 index.html

**Files:**
- Create: `index.html`

- [ ] **Step 1: 创建首页 HTML 结构**

首页包含：
- Header（Logo + 导航）
- 广告横幅
- 左侧边栏（机场导航列表）
- 主内容区（Clash简介 + 客户端下载表格）
- Waline 评论区
- Footer

```html
<!DOCTYPE HTML>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>Clash节点 - 分享稳定可靠clash机场</title>
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="css/main.css">
</head>
<body>
<header class="header">
  <div class="container">
    <div class="logo"><a href="/">Clash节点</a></div>
  </div>
</header>

<section class="container">
  <div class="sjbdmap" style="text-align:center;">
    <a href="/dageyun/"><img src="img/dgy640.jpg" alt=""></a>
  </div>
</section>

<section class="container container-page">
  <div class="pageside">
    <div class="pagemenus">
      <ul class="site-nav site-navbar">
        <li><a href="/">首页</a></li>
        <li><a href="/ny/">奈云</a></li>
        <li><a href="/sy/">瞬云</a></li>
        <!-- ... 其他机场 ... -->
      </ul>
    </div>
  </div>
  <div class="content">
    <h1>Clash客户端大全 | 使用教程汇总</h1>
    <article class="article-content">
      <!-- Clash简介 -->
      <!-- 客户端下载表格（Windows/Android/iOS/macOS）-->
    </article>

    <!-- Waline 评论区 -->
    <div id="waline"></div>
  </div>
</section>

<!-- Waline JS -->
<script src="https://cdn.jsdelivr.net/npm/@waline/client@v3/dist/waline.js"></script>
<script>
Waline.init({
  el: '#waline',
  path: window.location.pathname,
  serverURL: 'https://your-waline-server.vercel.app',
  placeholder: '写下你的留言...',
  requiredMeta: ['nick', 'comment'],
  login: 'enable',  // 启用登录
});
</script>
</body>
</html>
```

---

## Task 3: 创建机场子页面模板

**Files:**
- Create: `template.html`（公共模板）
- Create: `ny/index.html`
- Create: `sy/index.html`
- Create: `dageyun/index.html`
- Create: `jilianyun/index.html`
- Create: `feimiaoyun/index.html`
- Create: `sanfanyun/index.html`
- Create: `youxinyun/index.html`
- Create: `feiniaoyun/index.html`
- Create: `yangfanyun/index.html`
- Create: `longmiaoyun/index.html`
- Create: `xiaoxuanfeng/index.html`
- Create: `jinglingxueyuan/index.html`

- [ ] **Step 1: 创建通用页面模板**

每个机场页面结构相同，只是侧边栏高亮当前项 + 主内容为该机场介绍

```html
<!DOCTYPE HTML>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>奈云 - Clash节点</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/main.css">
</head>
<body>
<header class="header">
  <div class="container">
    <div class="logo"><a href="/">Clash节点</a></div>
  </div>
</header>

<section class="container container-page">
  <div class="pageside">
    <ul class="site-nav site-navbar">
      <li><a href="/">首页</a></li>
      <li class="active"><a href="/ny/">奈云</a></li>
      <!-- 高亮当前页 -->
    </ul>
  </div>
  <div class="content">
    <h1>奈云</h1>
    <article>
      <!-- 机场介绍内容 -->
    </article>

    <!-- Waline 评论区 -->
    <div id="waline"></div>
  </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/@waline/client@v3/dist/waline.js"></script>
<script>
Waline.init({
  el: '#waline',
  path: window.location.pathname,
  serverURL: 'https://your-waline-server.vercel.app',
  placeholder: '写下你的留言...',
  requiredMeta: ['nick', 'comment'],
  login: 'enable',
});
</script>
</body>
</html>
```

- [ ] **Step 2: 复制并修改为各机场页面**
  - 复制 template.html 到各机场目录
  - 修改 `<title>` 和 `<h1>`
  - 修改侧边栏 `class="active"`
  - 修改 Waline `path`（自动通过 `window.location.pathname` 获取）

---

## Task 4: 配置 Waline 服务端

- [ ] **Step 1: 注册 LeanCloud 国际版**
  - 访问 https://leancloud.cn/
  - 注册账号并验证邮箱
  - 创建应用（选择国际版）
  - 获取 AppID 和 AppKey

- [ ] **Step 2: 部署 Waline 到 Vercel**
  - 访问 https://vercel.com/
  - 使用 GitHub 账号登录
  - 一键部署 Waline: https://github.com/walinejs/waline/tree/main/examples/comment
  - 配置环境变量:
    - `LEAN_ID`: AppID
    - `LEAN_KEY`: AppKey
  - 获取部署后的 URL（如 `https://your-app.vercel.app`）

- [ ] **Step 3: 更新 HTML 中的 serverURL**
  - 将 `https://your-waline-server.vercel.app` 替换为实际 Vercel URL

---

## Task 5: 测试

- [ ] **Step 1: 本地测试**
  - 用 Python 启动本地服务器: `python -m http.server 8080`
  - 访问 http://localhost:8080
  - 测试评论提交（需要邮箱登录）
  - 测试评论展示
  - 切换到子页面，验证评论独立

- [ ] **Step 2: 部署测试**
  - 部署到 GitHub Pages 或 Netlify
  - 验证各页面评论功能正常

---

## 实现顺序

1. Task 1: 创建目录结构和基础文件
2. Task 2: 创建首页
3. Task 3: 创建 12 个机场子页面
4. Task 4: 配置 Waline 服务端
5. Task 5: 测试

---

**Plan complete. 两个执行选项：**

**1. Subagent-Driven (recommended)** - 我调度子 agent 逐任务执行，任务间审查

**2. Inline Execution** - 在当前 session 执行，批量执行带检查点

选择哪个？
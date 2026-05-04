# 网站结构重新设计实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 clash.download 的客户端下载内容整合到 clashvpn 网站，重新设计目录结构为 download/jichang/tutorial 三大分类。

**Architecture:** 静态 HTML 网站，使用现有目录结构迁移整合。不涉及代码逻辑变更，纯内容迁移和结构重组。

**Tech Stack:** 纯 HTML/CSS/JS，现有结构，waline 评论系统

---

## 文件结构

```
clashvpn/
├── index.html                  # 首页（需更新）
├── download/                    # [新建] 客户端下载
│   ├── index.html              # 下载中心汇总页
│   ├── clash-verge/index.html
│   ├── clash-for-windows/index.html
│   ├── flclash/index.html
│   ├── clash-meta-for-android/index.html
│   ├── clash-for-android/index.html
│   ├── clashx/index.html
│   └── potatso/index.html
├── jichang/                     # [新建] 机场推荐
│   ├── index.html              # 机场汇总推荐页
│   ├── dageyun/index.html      # [迁移] 现有机场
│   ├── feimiaoyun/index.html
│   ├── feiniaoyun/index.html
│   ├── guangnian/index.html
│   ├── jilianyun/index.html
│   ├── jinglingxueyuan/index.html
│   ├── longmiaoyun/index.html
│   ├── ny/index.html
│   ├── sy/index.html
│   ├── yangfanyun/index.html
│   └── youxinyun/index.html
├── tutorial/                     # [新建] 通用教程
│   └── switchyomega/index.html  # [迁移] 现有教程
├── css/                         # [保留]
├── js/                          # [保留]
├── img/                         # [保留]
├── waline/                      # [保留] 评论系统
├── sitemap.xml                  # [更新]
└── robots.txt                   # [更新]
```

---

## 实施任务

### Task 1: 创建目录结构

**Files:**
- Create: `download/`
- Create: `download/clash-verge/`
- Create: `download/clash-for-windows/`
- Create: `download/flclash/`
- Create: `download/clash-meta-for-android/`
- Create: `download/clash-for-android/`
- Create: `download/clashx/`
- Create: `download/potatso/`
- Create: `jichang/`

- [ ] **Step 1: 创建下载目录**

```bash
mkdir -p download/clash-verge download/clash-for-windows download/flclash download/clash-meta-for-android download/clash-for-android download/clashx download/potatso
```

- [ ] **Step 2: 创建机场目录**

```bash
mkdir -p jichang
```

- [ ] **Step 3: 验证目录创建**

```bash
ls -la download/ jichang/
```

- [ ] **Step 4: 提交**

```bash
git add -A && git commit -m "feat: 创建download和jichang目录结构"
```

---

### Task 2: 迁移机场页面到 jichang/

**Files:**
- Create: `jichang/dageyun/index.html` (从 `dageyun/index.html` 迁移)
- Create: `jichang/feimiaoyun/index.html`
- Create: `jichang/feiniaoyun/index.html`
- Create: `jichang/guangnian/index.html`
- Create: `jichang/jilianyun/index.html`
- Create: `jichang/jinglingxueyuan/index.html`
- Create: `jichang/longmiaoyun/index.html`
- Create: `jichang/ny/index.html`
- Create: `jichang/sy/index.html`
- Create: `jichang/yangfanyun/index.html`
- Create: `jichang/youxinyun/index.html`
- Delete: `dageyun/` (原目录)
- Delete: `feimiaoyun/` (原目录)
- Delete: `feiniaoyun/` (原目录)
- Delete: `guangnian/` (原目录)
- Delete: `jilianyun/` (原目录)
- Delete: `jinglingxueyuan/` (原目录)
- Delete: `longmiaoyun/` (原目录)
- Delete: `ny/` (原目录)
- Delete: `sy/` (原目录)
- Delete: `yangfanyun/` (原目录)
- Delete: `youxinyun/` (原目录)

- [ ] **Step 1: 迁移所有机场目录到 jichang/**

```bash
for dir in dageyun feimiaoyun feiniaoyun guangnian jilianyun jinglingxueyuan longmiaoyun ny sy yangfanyun youxinyun; do
  mv $dir jichang/
done
```

- [ ] **Step 2: 验证迁移**

```bash
ls jichang/
```

- [ ] **Step 3: 提交**

```bash
git add -A && git commit -m "feat: 迁移机场页面到jichang目录"
```

---

### Task 3: 迁移 SwitchyOmega 到 tutorial/

**Files:**
- Create: `tutorial/switchyomega/index.html` (从 `switchyomega/index.html` 迁移)
- Delete: `switchyomega/` (原目录)

- [ ] **Step 1: 创建教程目录**

```bash
mkdir -p tutorial/switchyomega
```

- [ ] **Step 2: 迁移 SwitchyOmega**

```bash
mv switchyomega/index.html tutorial/switchyomega/index.html
rmdir switchyomega
```

- [ ] **Step 3: 提交**

```bash
git add -A && git commit -m "feat: 迁移switchyomega到tutorial目录"
```

---

### Task 4: 获取 clash.download 内容

**Files:**
- Fetch: `https://clash.download/clash-verge`
- Fetch: `https://clash.download/clash-for-windows`
- Fetch: `https://clash.download/flclash`
- Fetch: `https://clash.download/clash-meta-for-android`
- Fetch: `https://clash.download/clash-for-android`
- Fetch: `https://clash.download/clashx`
- Fetch: `https://clash.download/potatso`
- Fetch: `https://clash.download/downloads`

- [ ] **Step 1: 使用 curl 获取各页面内容并保存**

```bash
curl -s https://clash.download/clash-verge > download/clash-verge/index.html
curl -s https://clash.download/clash-for-windows > download/clash-for-windows/index.html
curl -s https://clash.download/flclash > download/flclash/index.html
curl -s https://clash.download/clash-meta-for-android > download/clash-meta-for-android/index.html
curl -s https://clash.download/clash-for-android > download/clash-for-android/index.html
curl -s https://clash.download/clashx > download/clashx/index.html
curl -s https://clash.download/potatso > download/potatso/index.html
curl -s https://clash.download/downloads > download/index.html
```

- [ ] **Step 2: 验证获取结果**

```bash
ls -la download/*/
```

- [ ] **Step 3: 提交**

```bash
git add -A && git commit -m "feat: 获取clash.download客户端页面内容"
```

---

### Task 5: 创建机场汇总页 jichang/index.html

**Files:**
- Create: `jichang/index.html`

- [ ] **Step 1: 参考现有机场页面风格，创建汇总页**

汇总页应包含：
- 所有机场的卡片式展示
- 每个机场的名称、简介、特点
- 链接到各机场详情页
- 保持与现有机场页面一致的样式

- [ ] **Step 2: 提交**

```bash
git add jichang/index.html && git commit -m "feat: 创建机场汇总推荐页"
```

---

### Task 6: 更新根目录 index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: 更新首页内容**

新的首页应包含：
- Clash 下载入口（指向 `/download/`）
- 机场推荐入口（指向 `/jichang/`）
- 教程入口（指向 `/tutorial/`）
- 保留现有样式和评论功能

- [ ] **Step 2: 提交**

```bash
git add index.html && git commit -m "feat: 更新首页导航结构"
```

---

### Task 7: 更新 sitemap.xml

**Files:**
- Modify: `sitemap.xml`

- [ ] **Step 1: 更新 sitemap 包含所有新页面**

需要包含：
- /
- /download/
- /download/clash-verge/
- /download/clash-for-windows/
- /download/flclash/
- /download/clash-meta-for-android/
- /download/clash-for-android/
- /download/clashx/
- /download/potatso/
- /jichang/
- /jichang/dageyun/
- /jichang/feimiaoyun/
- /jichang/feiniaoyun/
- /jichang/guangnian/
- /jichang/jilianyun/
- /jichang/jinglingxueyuan/
- /jichang/longmiaoyun/
- /jichang/ny/
- /jichang/sy/
- /jichang/yangfanyun/
- /jichang/youxinyun/
- /tutorial/switchyomega/

- [ ] **Step 2: 提交**

```bash
git add sitemap.xml && git commit -m "feat: 更新sitemap.xml"
```

---

### Task 8: 更新 robots.txt

**Files:**
- Modify: `robots.txt`

- [ ] **Step 1: 检查并更新 robots.txt**

确保允许爬取所有新页面路径。

- [ ] **Step 2: 提交**

```bash
git add robots.txt && git commit -m "feat: 更新robots.txt"
```

---

### Task 9: 验证所有页面可访问

**Files:**
- Verify: 所有新建/迁移的 HTML 页面

- [ ] **Step 1: 使用本地服务器测试**

```bash
# 启动本地服务器
python3 -m http.server 8080
# 或
npx serve .
```

- [ ] **Step 2: 验证各页面链接正确**

检查：
- 首页导航链接
- 下载页面内容完整
- 机场页面内容完整
- 教程页面可访问
- 评论功能正常

- [ ] **Step 3: 最终提交**

```bash
git add -A && git commit -m "feat: 完成网站结构重组"
```

---

## 任务依赖关系

```
Task 1 (创建目录) → Task 2, 3, 4 (迁移/获取内容)
Task 2, 3 → Task 5 (创建汇总页)
Task 4 → Task 6 (更新首页)
Task 2, 3, 4, 5, 6 → Task 7, 8 (更新sitemap/robots)
Task 7, 8 → Task 9 (验证)
```

---

## 注意事项

1. 迁移页面时确保内部链接正确更新
2. 保持 waline 评论系统正常工作
3. 图片资源路径需要正确调整
4. 确保所有页面的 canonical URL 正确
5. 保留所有页面的 meta 信息
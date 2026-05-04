# 网站结构重新设计方案

## 背景

将 clash.download 网站的内容整合到现有 clashvpn 网站，重新设计目录结构。

## 目标结构

```
/
├── index.html                    # 首页（展示下载和机场入口）
├── download/                     # 客户端下载（含教程）
│   ├── index.html               # 下载中心汇总
│   ├── clash-verge/             # Clash Verge (Win/Mac/Linux)
│   ├── clash-for-windows/       # Clash for Windows
│   ├── flclash/                 # FlClash (跨平台)
│   ├── clash-meta-for-android/  # Clash Meta for Android
│   ├── clash-for-android/       # Clash for Android
│   ├── clashx/                  # ClashX Pro (Mac)
│   └── potatso/                 # Potatos (iOS)
├── jichang/                      # 机场推荐
│   ├── index.html              # 机场汇总推荐页
│   ├── dageyun/                # 大哥云
│   ├── feimiaoyun/             # 肥猫云
│   ├── feiniaoyun/             # 飞鸟云
│   ├── guangnian/              # 光年梯
│   ├── jilianyun/              # 极连云
│   ├── jinglingxueyuan/        # 精灵学院
│   ├── longmiaoyun/            # 龙猫云
│   ├── ny/                     # 奈云
│   ├── sy/                     # 瞬云
│   ├── yangfanyun/             # 扬帆云
│   └── youxinyun/              # 优信云
└── tutorial/                    # 通用教程
    └── switchyomega/          # SwitchyOmega 教程
```

## 设计决策

1. **客户端页面命名**：使用英文（如 `clash-verge`）
2. **客户端页面结构**：每个客户端页面同时包含下载链接和配置教程
3. **机场处理**：
   - 现有机场页面（`/dageyun/` 等）移动到 `/jichang/` 目录下
   - 创建 `/jichang/index.html` 作为机场汇总推荐页
4. **教程整合**：clash.download 各客户端页面的教程内容整合到对应客户端目录下
5. **评论功能**：保留现有 waline 评论系统，不受影响

## 实施步骤

1. 创建新目录结构
2. 获取 clash.download 各客户端页面的完整内容（下载链接 + 教程）
3. 迁移现有机场页面到 `/jichang/` 目录
4. 创建机场汇总页 `/jichang/index.html`
5. 创建下载中心汇总页 `/download/index.html`
6. 更新网站导航和首页
7. 更新 sitemap.xml 和 robots.txt

## 评论功能

- 每个页面独立支持 waline 评论
- 评论数据存储在 `/waline/` 目录
- 不因结构调整而受影响
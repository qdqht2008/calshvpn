# Clashvpn 网站设计文档

## 1. 概述

复刻 clashvps.com 功能，增加用户留言功能。轻量级实现，无需自建服务器。

## 2. 技术方案

| 组件 | 技术选型 | 说明 |
|------|----------|------|
| 前端 | 纯 HTML/CSS/JS | 静态页面 |
| 评论系统 | Waline | 第三方评论，数据存 LeanCloud |
| 部署 | 静态托管 | Vercel / Netlify / GitHub Pages |

## 3. 页面结构

```
/                           # 首页 - Clash客户端大全
/ny/                        # 奈云
/sy/                        # 瞬云
/dageyun/                   # 大哥云
/jilianyun/                 # 极连云
/feimiaoyun/                # 肥猫云
/sanfanyun/                 # 三番云
/youxinyun/                 # 优信云
/feiniaoyun/                # 飞鸟云
/yangfanyun/                # 扬帆云
/longmiaoyun/               # 龙猫云
/xiaoxuanfeng/              # 小旋风
/jinglingxueyuan/           # 精灵学院
```

每个页面底部包含独立的评论区。

## 4. 评论区设计

### 嵌入方式
```html
<div id="waline"></div>
<script src="https://cdn.jsdelivr.net/npm/@waline/client@v3/dist/waline.js"></script>
<script>
  Waline.init({
    el: '#waline',
    path: window.location.pathname,
    serverURL: 'https://your-waline-server.vercel.app',
    placeholder: '写下你的留言...',
    requiredMeta: ['nick', 'comment'],
  });
</script>
```

### 功能
- 每个页面通过 `path` 参数隔离评论
- **需要登录后才能留言**（仅支持邮箱登录）
- 所有访客可查看留言

## 5. Waline 配置步骤

1. 注册 [LeanCloud](https://leancloud.cn/) 国际版
2. 创建应用，获取 AppID 和 AppKey
3. 一键部署 Waline 到 Vercel
4. 修改页面 `serverURL` 为你的地址

## 6. 实现清单

- [ ] 搭建静态页面结构
- [ ] 迁移首页（index.html）
- [ ] 创建 12 个机场子页面
- [ ] 集成 Waline 评论组件
- [ ] 配置 LeanCloud 应用
- [ ] 部署 Waline 服务端
- [ ] 测试各页面评论功能

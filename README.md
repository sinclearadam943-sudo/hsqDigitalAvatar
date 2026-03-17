# hsqDigitalAvatar / 洪思齐数字分身

个人数字网站，记录生活、读书、电影、音乐、遇见，自律打卡。基于 VitePress 构建。

## 项目结构

```
.
├── .github/workflows/deploy.yml  # GitHub Actions 自动部署
├── docs/
│   ├── .vitepress/
│   │   └── config.js          # VitePress 配置（导航已设置好）
│   ├── index.md               # 首页（VitePress 默认布局）
│   ├── resume.md              # 简历
│   ├── daily.md               # 每日动态
│   ├── personality.md         # 性格分析
│   ├── hobbies.md            # 喜好
│   ├── experience.md          # 经历
│   ├── knowledge.md           # 知识库
│   └── public/
│       ├── self-management.html  # 自律打卡（HTML + Tailwind CSS）
│       ├── books.html            # 书单（HTML + Tailwind CSS）
│       ├── music.html            # 音乐（HTML + Tailwind CSS）
│       ├── movies.html           # 电影（HTML + Tailwind CSS）
│       ├── people.html           # 遇见（HTML + Tailwind CSS）
│       └── data-manager.html     # 🔐 统一数据管理 - AES 加密备份恢复
├── package.json
└── README.md
```

## 功能模块

| 模块 | 说明 |
|------|------|
| 📄 **简历** | 个人简历 |
| 📚 **书单** | 记录读过的书、在读、待读 |
| 🎵 **音乐** | 记录喜欢的歌、专辑、歌单 |
| 🎬 **电影** | 记录看过的电影、五星推荐、想看 |
| 👥 **遇见** | 记录生命中遇见的人，分类保存故事 |
| 🎯 **自律打卡** | 每日/每周任务打卡 + 积分银行 |
| 🔐 **数据管理** | 统一 AES 加密备份/恢复所有数据 |

## 🔒 数据安全

- 所有数据存储在浏览器本地 `localStorage`，不会上传到任何服务器
- 支持导出**全量加密备份**（AES 加密），备份文件可以存到任何云盘
- 没有密码无法解密，即使备份泄露也安全
- 支持从备份一键恢复所有数据

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build
```

## 部署到 GitHub Pages

GitHub Actions 已经配置好，推送代码自动部署。

1. 创建 GitHub 仓库 `hsqDigitalAvatar`
2. 推送代码到 main 分支
3. GitHub Actions 自动构建部署
4. 开启 GitHub Pages，源选择 `gh-pages` 分支即可

## 特点

- 🚀 基于 VitePress，快速响应
- 📱 响应式设计，移动端友好
- 🎨 Tailwind CSS 美化交互页面
- 🔒 AES 加密备份，隐私安全
- 📝 易于维护，Markdown + HTML 混合

## 许可证

MIT

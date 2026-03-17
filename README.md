# 洪思齐个人网站

基于 VitePress 构建的个人静态网站。

## 项目结构

```
.
├── docs/
│   ├── .vitepress/
│   │   └── config.js    # VitePress 配置
│   ├── index.md         # 首页
│   ├── resume.md        # 简历
│   ├── daily.md         # 每日动态
│   ├── personality.md   # 性格分析
│   ├── hobbies.md       # 喜好
│   ├── experience.md    # 成长经历
│   ├── knowledge.md     # 知识库
│   └── public/          # 静态资源
├── package.json
└── README.md
```

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

1. 将代码推送到 GitHub 仓库
2. 在 GitHub 仓库设置中，开启 GitHub Pages
3. 部署源选择 `main` 分支下的 `docs/.vitepress/dist` 文件夹
4. 保存后几分钟即可访问

## 特点

- 🚀 基于 VitePress，快速响应
- 📱 响应式设计，移动端友好
- 🎨 清晰简洁的默认主题
- 📝 易于维护，纯 Markdown 编写
- 🔍 内置搜索支持（如需开启可在配置中添加）

## 维护

内容更新直接编辑对应 `.md` 文件即可。

## 许可证

MIT

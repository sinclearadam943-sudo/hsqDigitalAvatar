# 🎯 hsqDigitalAvatar / 洪思齐数字分身

> 个人数字分身，记录生活、读书、电影、音乐、遇见，自律打卡。  
> 所有数据本地存储，AES 加密备份，隐私完全保护。  
> 基于 VitePress 构建，部署在 GitHub Pages。

## 📋 功能模块

| 模块 | 说明 | 链接 |
|------|------|------|
| 📄 **简历** | 个人简历 | `/resume` |
| 📚 **书单** | 交互式记录读过的书 | `/public/books.html` |
| 🎵 **音乐** | 交互式记录喜欢的音乐 | `/public/music.html` |
| 🎬 **电影** | 交互式记录看过的电影 | `/public/movies.html` |
| 👥 **遇见** | 分类记录生命中遇见的人 | `/public/people.html` |
| 🎯 **自律打卡** | 每日/每周任务打卡 + 积分银行 | `/public/self-management.html` |
| 🔐 **数据管理** | 统一 AES 加密备份/恢复所有数据 | `/public/data-manager.html` |
| 🧠 **性格分析** | 性格分析 | `/personality` |
| ❤️ **喜好** | 个人喜好 | `/hobbies` |
| 📜 **经历** | 成长经历 | `/experience` |
| 📝 **知识库** | 知识笔记 | `/knowledge` |
| 📅 **每日动态** | 每日记录 | `/daily` |

## 🔒 安全特性

✅ **所有数据存储在浏览器本地 `localStorage`**，**不会上传到任何服务器**  
✅ 支持导出**全量加密备份**（AES 加密），备份文件可以存到任何云盘  
✅ 没有密码**无法解密**，即使备份泄露也安全  
✅ 支持从备份**一键恢复**所有数据

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/sinclearadam943-sudo/hsqDigitalAvatar.git
cd hsqDigitalAvatar

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build
```

### 部署

项目已经配置 GitHub Actions 自动部署，推送代码自动构建。

部署完成后：
1. 打开 GitHub → **Settings** → **Pages**
2. **Source** → 选择 `Deploy from a branch`
3. **Branch** → 选择 `main`，folder 选择 `/(root)` → `/docs`
4. 点击 **Save**，几分钟后即可访问：  
   `https://sinclearadam943-sudo.github.io/hsqDigitalAvatar/`

## 🎨 技术栈

- 🚀 **VitePress** - 静态网站生成器
- 💨 **Tailwind CSS** - 交互式页面美化
- 🔐 **CryptoJS** - AES 加密备份
- 📱 **响应式设计** - 手机电脑都好看
- 🤖 **GitHub Actions** - 自动部署

## 📄 许可证

MIT [![Deploy to GitHub Pages](https://github.com/sinclearadam943-sudo/hsqDigitalAvatar/actions/workflows/deploy.yml/badge.svg)](https://github.com/sinclearadam943-sudo/hsqDigitalAvatar/actions/workflows/deploy.yml)


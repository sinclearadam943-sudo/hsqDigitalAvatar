export default {
  title: '洪思齐',
  description: '洪思齐个人网站',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '简历', link: '/resume' },
      { text: '每日动态', link: '/daily' },
      { text: '性格分析', link: '/personality' },
      { text: '喜好', link: '/hobbies' },
      { text: '经历', link: '/experience' },
      { text: '知识库', link: '/knowledge' },
    ],
    sidebar: false,
    outline: {
      level: [2, 3],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2026 洪思齐'
    }
  }
}

export default {
  title: '洪思齐',
  description: '洪思齐个人网站',
  // 如果部署到 https://<username>.github.io/<repo>/ 需要设置 base: '/<repo>/'
  // base: '/hongsiqi-website/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '简历', link: '/resume' },
      { text: '书单', link: '/books' },
      { text: '音乐', link: '/music' },
      { text: '电影', link: '/movies' },
      { text: '遇见', link: '/people' },
      { text: '自律打卡', link: '/self-management.html' },
    ],
    search: {
      provider: 'local'
    },
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

export default {
  title: '洪思齐 | 数字分身',
  description: '洪思齐数字分身 - 个人数字网站，记录生活、读书、电影、音乐、遇见，自律打卡',
  // 如果部署 to https://sinclearadam943-sudo.github.io/hsqDigitalAvatar/
  base: '/hsqDigitalAvatar/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '简历', link: '/resume' },
      { text: '书单', link: '/public/books.html' },
      { text: '音乐', link: '/public/music.html' },
      { text: '电影', link: '/public/movies.html' },
      { text: '遇见', link: '/public/people.html' },
      { text: '自律打卡', link: '/public/self-management.html' },
      { text: '🔐 数据管理', link: '/public/data-manager.html' },
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

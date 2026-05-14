import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Knowledge Base',
  description: 'AI、Agent、Projects、Tech Learning and Ideas',
  base: '/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'AI', link: '/ai/' },
      { text: 'Agent', link: '/agent/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Tech', link: '/tech/' },
      { text: 'Ideas', link: '/ideas/' }
    ],
    sidebar: [
      {
        text: 'Knowledge Base',
        items: [
          { text: '首页', link: '/' },
          { text: 'AI', link: '/ai/' },
          { text: 'Agent', link: '/agent/' },
          { text: 'Projects', link: '/projects/' },
          { text: 'Tech', link: '/tech/' },
          { text: 'Ideas', link: '/ideas/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhubn123/zhubn123.github.io' }
    ],
    search: {
      provider: 'local'
    }
  }
})


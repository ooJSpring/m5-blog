import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "村头搬砖",
  description: "后端技术分享 | 前端模版搭建 | AI Agent",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '进入主页', link: '/articles/api-examples' },
      { text: 'AI大模型', link: '/ai/' },
    ],

    sidebar: {
      '/articles/': [
        {
          text: '后端技术',
          items: [
            { text: 'GitLab CI', link: '/articles/api-examples' },
            { text: 'Docker安装', link: '/articles/markdown-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zo3i/frpMgr' }
    ],

    footer: {
      message: '<span style="display: inline-block;"><img src="/gwabeian.png" style="display: inline-block;width:18px;height:18px;"><a style="vertical-align: middle;" href="https://beian.mps.gov.cn/#/query/webSearch?code=51010702043520" rel="noreferrer" target="_blank" style="vertical-align: middle;">川公网安备51010702043520号</a> | <a href="https://beian.miit.gov.cn" target="_blank">蜀ICP备2025133372号-1</a></span>',
      // copyright: ''
    }
  }
})

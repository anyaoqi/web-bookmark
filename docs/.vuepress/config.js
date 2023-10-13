import { defineUserConfig,defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
  base: '/web-bookmark/',
  lang: 'zh-CN',
  title: '前端书签',
  description: '收集前端相关官网和工具的网址',
  plugins: [
    backToTopPlugin(),
    docsearchPlugin({
      // 配置项
    }),
  ],
  theme: defaultTheme({
    navbar: [
      {  text: '前端文档', link: '/Document/' },
      {  text: '前端工具', link: '/Tools/' },
      {  text: '前端社区', link: '/Community/' },
    ]
  })
})
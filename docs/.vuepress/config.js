module.exports = {
  title: '宏哲的博客',
  description: "欢迎来到我的酒馆~~",
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/kabishou.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '前端基础', link: '/accumulate/' },
      {text: '算法题库', link: '/algorithm/'},
      {text: '微博', link: 'https://baidu.com'}
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
}

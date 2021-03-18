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
    serviceWorker: {
      updatePopup: {
        // 刷新内容的弹窗
        message: '没想到吧，宏哲刚刚更新了内容，搞快刷新啦！',
        buttonText: '点这里'
      }
    },
    lastUpdated: 'Last Updated', // 最后更新时间
    nav:[ // 导航栏配置
      {text: '前端基础', link: '/accumulate/' },
      {text: '算法题库', link: '/algorithm/'},
      {text: '微博', link: 'https://baidu.com'}
    ],
    sidebar: {
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/accumulate/': [
        '/accumulate/', // accumulate文件夹的README.md
        {
          title: 'Css',
          children: [
            '/accumulate/Css/清除默认样式',
            '/accumulate/Css/media参考',
            '/accumulate/Css/iphonex',
            '/accumulate/Css/纸页效果',
            '/accumulate/Css/毛玻璃效果',
            '/accumulate/Css/1px',
            '/accumulate/Css/优惠券',
            '/accumulate/Css/不规则',
            '/accumulate/Css/投影',
            '/accumulate/Css/底部自适应',
            '/accumulate/Css/文字特效',
            '/accumulate/Css/文字输入效果',
            '/accumulate/Css/文本溢出截断省略',
            '/accumulate/Css/hover',
            '/accumulate/Css/加载动画',
            '/accumulate/Css/搜索框',
            '/accumulate/Css/tab',
            '/accumulate/Css/滚动条进度',
            '/accumulate/Css/滚动吸顶',
            '/accumulate/Css/flex',
            '/accumulate/Css/transform'
          ]
        },
        {
          title: 'Html',
          children: [
            '/accumulate/html/audio'
          ]
        },
        {
          title: 'JavaScript',
          children: [
            '/accumulate/Js/操作dom'
          ]
        },
        {
          title: 'Vue',
          children: [
            '/accumulate/Vue/根据环境配置url',
            '/accumulate/Vue/通信',
            '/accumulate/Vue/路由切换效果',
            '/accumulate/Vue/小技巧',
            '/accumulate/Vue/搭建vue',
            '/accumulate/Vue/vuex',
          ]
        },
        {
          title: 'Node',
          children: [
            '/accumulate/Node/七牛云上传',
            '/accumulate/Node/socket'
          ]
        },
        {
          title: '微信小程序',
          children: [
            '/accumulate/miniprogram/bug'
          ]
        },

      ],
      '/document/': [
        '/document/',
        '/document/documents/markdown教程',
        '/document/documents/markdownEmoji',
        '/document/documents/github教程',
        '/document/documents/mongodb教程',
        '/document/documents/vue-cli3教程',
        '/document/documents/canvas',
        '/document/documents/重学前端',
        '/document/documents/photoshop',
      ],
      '/interview/': [
        '/interview/',
        '/interview/Interview/闭包',
        '/interview/Interview/缓存',
        '/interview/Interview/回调函数'
      ],
      '/errorAccumulate/': [
        '/errorAccumulate/',
        '/errorAccumulate/error/expres取不到值',
        '/errorAccumulate/error/跨域'
      ],
      '/demo/': [
        '/demo/',
        {
          title: '1908',
          children: [
            '/demo/1908/canvas圆环',
            '/demo/1908/heart',
          ],
        },
        {
          title: '1909',
          children: [
            '/demo/1909/颜色选取'
          ],
        }

      ],
      '/tools/': [
        '/tools/',
        {
          title: '工具',
          children: [
            '/tools/tool/vueTool',
            '/tools/tool/vsc技能1',
            '/tools/tool/vsc工具'
          ]
        },
        {
          title: '插件',
          children: [
            '/tools/plugin/懒加载插件',
            '/tools/plugin/better-scroll',
            '/tools/plugin/swiper',
            '/tools/plugin/fullpage',
            '/tools/plugin/翻页',
            '/tools/plugin/移动端调试',
            '/tools/plugin/good-storage',
            '/tools/plugin/create-keyframe-animation'
          ]
        }
      ],
    },
    sidebarDepth: 3,
  }
}

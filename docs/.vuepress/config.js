import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
	lang: 'zh-CN',
  title: 'Crypto Lab',
  description: '陕西省密码应用与创新实验室 ',
 

  theme: defaultTheme({
    //logo: 'https://vuejs.press/images/hero.png',
	//logo:'../public/1.jpg',
    navbar: ['/', '/openHiTLS/', '/technique share/'],
	// 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/openHiTLS/': [
        {
          text: 'openHiTLS教程',
          // 相对路径会自动追加子路径前缀
          children: [
            // 解析为 `/openHiTLS/注册.md`
			'下载.md', 
			'测试.md',
			'运行.md',
			'提交.md',
          ],
        },
      ],
	'/technique share/': [
        {
          text: '技术分享',
          // 相对路径会自动追加子路径前缀
          children: [
            '技术文章1.md', 
	'技术文章2.md', 
	'技术文章3.md', 
          ],
        },
      ],  
      '/reference/': 'heading',
    },
  }),

  bundler: viteBundler(),
})

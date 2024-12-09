import comp from "D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"1.jpg\",\"actions\":[{\"text\":\"进入了解\",\"link\":\"/openHiTLS/\",\"type\":\"primary\"},{\"text\":\"团队介绍\",\"link\":\"/Team Introduction/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"密码学应用\",\"details\":\"探讨密码学在现代网络中的应用，以及它如何成为守护数字世界的基石。\"},{\"title\":\"后量子密码\",\"details\":\"设计出能够在量子计算环境下保持安全性的密码算法。\"},{\"title\":\"开源成果\",\"details\":\"探讨开源生态、开源风险等开源领域热点问题研究，洞察开源生态最新发展。\"}],\"footer\":\"Copyright © 2024-present Xdu Crypto Lab\"},\"headers\":[],\"git\":{\"updatedTime\":1732775763000,\"contributors\":[{\"name\":\"WXF334\",\"email\":\"23151214334@stu.xidian.edu.cn\",\"commits\":1,\"url\":\"https://github.com/WXF334\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

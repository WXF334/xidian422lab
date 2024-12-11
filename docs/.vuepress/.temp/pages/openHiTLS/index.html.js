import comp from "D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/openHiTLS/index.html.vue"
const data = JSON.parse("{\"path\":\"/openHiTLS/\",\"title\":\"openHiTLS教程\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1732775763000,\"contributors\":[{\"name\":\"WXF334\",\"email\":\"23151214334@stu.xidian.edu.cn\",\"commits\":1,\"url\":\"https://github.com/WXF334\"}]},\"filePathRelative\":\"openHiTLS/README.md\"}")
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

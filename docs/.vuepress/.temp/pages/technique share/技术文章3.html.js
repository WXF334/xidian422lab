import comp from "D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/technique share/技术文章3.html.vue"
const data = JSON.parse("{\"path\":\"/technique%20share/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A03.html\",\"title\":\"技术文章3\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"technique share/技术文章3.md\"}")
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

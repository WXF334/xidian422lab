import comp from "D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/technique share/index.html.vue"
const data = JSON.parse("{\"path\":\"/technique%20share/\",\"title\":\"技术分享\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"technique share/README.md\"}")
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
export const themeData = JSON.parse("{\"logo\":\"https://th.bing.com/th/id/OIP.G-P3-RcX6XZeFj9DcZ7dxgAAAA?w=159&h=180&c=7&r=0&o=5&pid=1.7\",\"navbar\":[\"/\",\"/openHiTLS/\",\"/technique share/\"],\"sidebar\":{\"/openHiTLS/\":[{\"text\":\"openHiTLS教程\",\"children\":[\"注册.md\",\"下载.md\",\"运行.md\",\"提交.md\"]}],\"/technique share/\":[{\"text\":\"技术分享\",\"children\":[\"技术文章1.md\",\"技术文章2.md\",\"技术文章3.md\"]}],\"/reference/\":\"heading\"},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/openHiTLS/", { loader: () => import(/* webpackChunkName: "openHiTLS_index.html" */"D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/openHiTLS/index.html.js"), meta: {"title":"openHiTLS教程"} }],
  ["/openHiTLS/%E4%B8%8B%E8%BD%BD.html", { loader: () => import(/* webpackChunkName: "openHiTLS_下载.html" */"D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/openHiTLS/下载.html.js"), meta: {"title":"下载并构建OpenHiTLS"} }],
  ["/openHiTLS/%E6%8F%90%E4%BA%A4.html", { loader: () => import(/* webpackChunkName: "openHiTLS_提交.html" */"D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/openHiTLS/提交.html.js"), meta: {"title":"提交"} }],
  ["/openHiTLS/%E6%B3%A8%E5%86%8C.html", { loader: () => import(/* webpackChunkName: "openHiTLS_注册.html" */"D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/openHiTLS/注册.html.js"), meta: {"title":"注册"} }],
  ["/openHiTLS/%E6%B5%8B%E8%AF%95.html", { loader: () => import(/* webpackChunkName: "openHiTLS_测试.html" */"D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/openHiTLS/测试.html.js"), meta: {"title":"测试"} }],
  ["/Team%20Introduction/", { loader: () => import(/* webpackChunkName: "Team Introduction_index.html" */"D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/Team Introduction/index.html.js"), meta: {"title":"XDU Crypto Lab"} }],
  ["/technique%20share/", { loader: () => import(/* webpackChunkName: "technique share_index.html" */"D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/technique share/index.html.js"), meta: {"title":"技术分享"} }],
  ["/technique%20share/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A01.html", { loader: () => import(/* webpackChunkName: "technique share_技术文章1.html" */"D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/technique share/技术文章1.html.js"), meta: {"title":"技术文章1"} }],
  ["/technique%20share/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A02.html", { loader: () => import(/* webpackChunkName: "technique share_技术文章2.html" */"D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/technique share/技术文章2.html.js"), meta: {"title":"技术文章2"} }],
  ["/technique%20share/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A03.html", { loader: () => import(/* webpackChunkName: "technique share_技术文章3.html" */"D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/technique share/技术文章3.html.js"), meta: {"title":"技术文章3"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/DocsBuilder/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

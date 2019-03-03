export const imports = {
  'pages/test.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-test" */ 'pages/test.mdx'),
}

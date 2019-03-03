export const imports = {
  'Food.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "food" */ 'Food.mdx'),
  'The Joint.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "the-joint" */ 'The Joint.mdx'),
  'test.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "test" */ 'test.mdx'),
}

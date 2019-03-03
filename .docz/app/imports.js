export const imports = {
  '1005.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "1005" */ '1005.mdx'),
  'arabella.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "arabella" */ 'arabella.mdx'),
  'food.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "food" */ 'food.mdx'),
  'pizza_d.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pizza-d" */ 'pizza_d.mdx'),
  'the_joint.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "the-joint" */ 'the_joint.mdx'),
  'transportation.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "transportation" */ 'transportation.mdx'),
  'welcome.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "welcome" */ 'welcome.mdx'),
}

export const imports = {
  'food.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "food" */ 'food.mdx'),
  'transportation.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "transportation" */ 'transportation.mdx'),
  'welcome.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "welcome" */ 'welcome.mdx'),
  'Activities/noma.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "activities-noma" */ 'Activities/noma.mdx'),
  'Activities/pres-hall.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "activities-pres-hall" */ 'Activities/pres-hall.mdx'),
  'Activities/wwii.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "activities-wwii" */ 'Activities/wwii.mdx'),
}

export default {
  dest: '/dist',
  public: '/assets',
  menu: [
    'Welcome', // auto ordered menu "Introduction"
    'Transportation',
    {
      name: 'Food', // manually oredered menu "Guides"
      // menu: ['Theming'] // oredered items for "Guides",
      docs: [
       'Pizza Delicious',
       'The Joint',
       'Arabella'
     ],
    },
    {
      name: 'Activities', // manually oredered menu "Guides"
      // menu: ['Theming'] // oredered items for "Guides",
      docs: [
       'NOMA',
       'WWII Museum',
       'Preservation Hall'
     ],
    },
  ]
}

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: Aboutme,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contactme,
    },
    {
      path: '/:catchAll(.)',
      name: 'notfound',
      component: NotFound,
    },
  ],
})

export default router;
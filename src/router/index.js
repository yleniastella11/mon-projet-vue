import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue"
import Aboutme from "../views/AboutMeView.vue"
import Projects from "../views/ProjectsView.vue"
import Contactme from "../views/ContactMeView.vue"
import NotFound from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
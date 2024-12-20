import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue"
import Aboutme from "../views/AboutMe.vue"
import Projects from "../views/Projects.vue"
import Contactme from "../views/ContactMe.vue"
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
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: NotFound,
    },
  ],
})

export default router;
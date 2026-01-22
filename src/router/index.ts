import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projets',
      name: 'projets',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/parcours',
      name: 'parcours',
      component: () => import('../views/ParcoursView.vue')
    }
  ]
})

export default router

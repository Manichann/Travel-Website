import { createRouter, createWebHistory } from 'vue-router'
import NavbarComponent from '@/components/NavbarComponent.vue'
import HomeComponent from '@/components/HomeComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'navbar',
      component: HomeComponent
    },
  ]
})

export default router

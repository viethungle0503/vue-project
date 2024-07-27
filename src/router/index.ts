import AboutVueView from '@/views/AboutVueView.vue'
import HomeVueView from '@/views/HomeVueView.vue'
import VueView from '@/views/VueView.vue'
import { createRouter, createWebHistory } from 'vue-router'

// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/vue',
      name: 'vue',
      component: VueView,
      children: [
        {
          path: 'home',
          name: 'vue-home',
          component: HomeVueView
        },
        {
          path: 'about',
          name: 'vue-about',
          component: AboutVueView
        }
      ]
    }
  ]
})

export default router

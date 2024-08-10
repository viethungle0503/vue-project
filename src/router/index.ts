import AboutVueView from '@/views/AboutVueView.vue'
import PracticeView from '@/views/PracticeView.vue'
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
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/practice',
      name: 'practice',
      component: PracticeView
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
    },
    {
      path: '/axios-example',
      name: 'axios-example',
      component: () => import('@/views/AxiosExampleView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const names = ['vue', 'vue-home', 'vue-about']
  if (!names.includes(to.name as string)) {
    document.querySelectorAll('style[type="text/css"]').forEach((el) => {
      if (!el.getAttribute('data-vite-dev-id')?.includes('bootstrap.min.css')) {
        el.remove()
      }
    })
  }
  next()
})

export default router

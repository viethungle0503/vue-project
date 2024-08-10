import { createRouter, createWebHistory } from 'vue-router'
import AboutVueView from '@/views/Vue/AboutVueView.vue'
import PracticeView from '@/views/Practice/PracticeView.vue'
import HomeVueView from '@/views/Vue/HomeVueView.vue'
import VueView from '@/views/Vue/VueView.vue'
import HomeView from '@/views/HomeView.vue'

// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      component: () => import('@/views/Practice/AxiosExampleView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const names = ['vue', 'vue-home', 'vue-about']
  if (names.includes(to.name as string)) {
    console.log('Hello from initial view of Vue')
  }
  next()
})

export default router

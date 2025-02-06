import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/TestView.vue'),
    },
    {
      path: '/home1/:cname',
      name: 'home1',
      props: true,
      component: () => import('@/views/Home1View.vue'),
    },
    {
      path: '/home2',
      name: 'home2',
      component: () => import('@/views/Home2View.vue'),
    },
    {
      path: '/home3',
      name: 'home3',
      component: () => import('@/views/Home3View.vue'),
    },
    {
      path: '/home4',
      name: 'home4',
      component: () => import('@/views/Home4View.vue'),
    },
    {
      path: '/home5',
      name: 'home5',
      component: () => import('@/views/Home5View.vue'),
    },
    {
      path: '/home6',
      name: 'home6',
      component: () => import('@/views/Home6View.vue'),
    },
    {
      path: '/home7',
      name: 'home7',
      component: () => import('@/views/Home7View.vue'),
    },
  ],
})

export default router

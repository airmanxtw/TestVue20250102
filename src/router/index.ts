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
    {
      path: '/home8',
      name: 'home8',
      component: () => import('@/views/Home8View.vue'),
    },
    {
      path: '/home9',
      name: 'home9',
      component: () => import('@/views/Home9View.vue'),
    },
    {
      path: '/home10',
      name: 'home10',
      component: () => import('@/views/Home10View.vue'),
    },
    {
      path: '/home11',
      name: 'home11',
      component: () => import('@/views/Home11View.vue'),
    },
    {
      path: '/home12',
      name: 'home12',
      component: () => import('@/views/Home12View.vue'),
    },
    {
      path: '/home13',
      name: 'home13',
      component: () => import('@/views/Home13View.vue'),
    },
    {
      path: '/home14',
      name: 'home14',
      component: () => import('@/views/Home14View.vue'),
    },
    {
      path: '/home15',
      name: 'home15',
      component: () => import('@/views/Home15View.vue'),
    },
    {
      path: '/home16',
      name: 'home16',
      component: () => import('@/views/Home16View.vue'),
    },
    {
      path: '/home17',
      name: 'home17',
      component: () => import('@/views/Home17View.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

export default router

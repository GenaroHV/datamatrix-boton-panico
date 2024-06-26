import { createRouter, createWebHistory } from '@ionic/vue-router';
import LoginPage from '@/views/auth/LoginPage.vue';
import PermissionPage from '@/views/auth/PermissionPage.vue';
import Tabs from '@/views/Tabs.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/permission',
    name: 'Permission',
    component: PermissionPage
  },
  {
    path: '/tabs',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/tabs/home/views/Index.vue')
      },
      {
        path: 'localizacion',
        component: () => import('@/views/tabs/localizacion/views/Index.vue')
      },
      {
        path: 'boton',
        component: () => import('@/views/tabs/boton/views/Index.vue')
      },
      {
        path: 'perfil',
        component: () => import('@/views/tabs/perfil/views/Index.vue')
      },
      {
        path: 'ajustes',
        component: () => import('@/views/tabs/ajustes/views/Index.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

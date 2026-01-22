import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/default/DefaultLayout.vue'
import OrderLayout from '@/layouts/order/OrderLayout.vue'

import HomePage from '@/pages/HomePage.vue'
import OrderPage from '@/pages/OrderPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [{ path: '', name: 'home', component: HomePage }],
    },
    {
      path: '/bestellen',
      component: OrderLayout,
      children: [{ path: '', name: 'order', component: OrderPage }],
    },
  ],
})

export default router

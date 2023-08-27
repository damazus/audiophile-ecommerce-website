import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
   mode: 'history',
   base: import.meta.env.BASE_URL,
   routes: [
      {
         path: '/',
         name: 'home',
         component: HomeView
      },
      {
         path: '/categories/:slug',
         name: 'categories',
         component: () => import('@/views/CategoryView.vue'),
      },
      {
         path: '/products/:slug',
         name: 'products',
         component: () => import('@/views/ProductView.vue')
      },
      {
         path: '/checkout',
         name: 'checkout',
         component: () => import('@/views/CheckoutView.vue')
      },
      {
         path: '*',
         name: 'notFound',
         component: NotFound,
      }
   ]
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/howitworks',
      name: 'howitworks',
      component: () => import(/* webpackChunkName: "howitworks" */ '@/views/HowItWorks.vue'),
      meta: {back: 'home', forward: 'dashboard'}
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      props: {back: 'howitworks', forward: 'about'},
      component: () => import(/*webpackChunkName: "dashboard"*/ '@/views/Dashboard'),
      meta: {back: 'howitworks', forward: 'about'}
    }
  ]
})

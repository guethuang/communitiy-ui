import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import ResetPassword from '../components/ResetPassword.vue'
import { component } from 'vue/types/umd'
Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
]
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/reset_password',
      component: ResetPassword
    }
  ]
})
export default router

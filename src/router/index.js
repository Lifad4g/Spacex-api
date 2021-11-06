import Vue from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import launch from '../views/Launch.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import notfound from '../views/notfound.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/launch/:id',
    component: launch
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/:catchAll(.*)',
    component: notfound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

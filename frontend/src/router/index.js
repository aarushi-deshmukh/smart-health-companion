import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../pages/SignIn.vue'
import SignUp from '../pages/SignUp.vue'

const routes = [
  { 
    path: '/sign-in', 
    component: SignIn 
  },
  { 
    path: '/sign-up', 
    component: SignUp 
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

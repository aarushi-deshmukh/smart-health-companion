import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Patients from '@/pages/Patients.vue'
import Reminders from '@/pages/Reminders.vue'
import Report from '@/pages/Report.vue'
import Schedule from '@/pages/Schedule.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeview',
      component: HomeView,
    },
    {
      path: '/patients',
      name: 'patients',
      component: Patients,
    },
    {
      path: '/reminders',
      name: 'reminders',
      component: Reminders,
    },
    {
      path: '/report',
      name: 'report',
      component: Report,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router

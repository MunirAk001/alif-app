import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue' // Import your views/components
import Details from '@/pages/details.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  }
  // Other route configurations go here
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

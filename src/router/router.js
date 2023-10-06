import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home"
import Car from "@/pages/Car"



const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/car/:name',
    component: Car
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

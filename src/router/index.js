import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import LoginPage from '@/views/LoginPage.vue'

const routes = [
  {
    path: '/MainPage',
    name: 'home',
    component: MainPage
  },
	{
		path: '/',
		name: 'login',
		component: LoginPage
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

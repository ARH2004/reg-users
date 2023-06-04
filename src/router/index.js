import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import Registerpage from '@/views/RegisterPage.vue'

const routes = [
	{
		path: '/',
		name: 'login',
		component: LoginPage
	},
	{
		path: '/register',
		name: 'register',
		component: Registerpage
	},
  {
    path: '/main',
    name: 'home',
    component: MainPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import { hasToken } from '../common/headerAuth'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresAuth: false },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const loggedIn = hasToken()

  if (to.meta.requiresAuth) {
    if (!loggedIn) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

// change html title
router.afterEach((to, from) => {
  document.title = `BarberShop | ${to.meta.title}`
})

import { createRouter, createWebHistory } from 'vue-router'
import { hasToken } from '../common/headerAuth'
// import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false, title: 'Login' },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresAuth: false, title: 'Register' },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    meta: { requiresAuth: true, title: 'Home' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const loggedIn = hasToken()

  // if (to.meta.requiresAuth && !loggedIn) {
  //   next('/login')
  // } else if (!to.meta.requiresAuth && loggedIn) {
  //   next('/')
  //   window.location.href = '/'
  // } else {
  //   next()
  // }

  if (to.meta.requiresAuth && !loggedIn) {
    next('/login')
  } else if (to.path === '/login' && loggedIn) {
    next('/')
  } else {
    next()
  }
})

// change html title
router.afterEach((to, from) => {
  document.title = `BarberShop | ${to.meta.title}`
})

export { router }

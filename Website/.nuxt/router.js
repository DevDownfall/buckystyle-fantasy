import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b6fe1598 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _725b18c6 = () => interopDefault(import('..\\pages\\leaderboard.vue' /* webpackChunkName: "pages/leaderboard" */))
const _499468ee = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _e3268974 = () => interopDefault(import('..\\pages\\summary.vue' /* webpackChunkName: "pages/summary" */))
const _118e2872 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _b6fe1598,
    name: "dashboard"
  }, {
    path: "/leaderboard",
    component: _725b18c6,
    name: "leaderboard"
  }, {
    path: "/login",
    component: _499468ee,
    name: "login"
  }, {
    path: "/summary",
    component: _e3268974,
    name: "summary"
  }, {
    path: "/",
    component: _118e2872,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

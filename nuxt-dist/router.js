import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _32fdd4e3 = () => interopDefault(import('..\\pages\\avisos.vue' /* webpackChunkName: "pages/avisos" */))
const _bb6f64e8 = () => interopDefault(import('..\\pages\\disciplina.vue' /* webpackChunkName: "pages/disciplina" */))
const _1fbf1a35 = () => interopDefault(import('..\\pages\\frequencia.vue' /* webpackChunkName: "pages/frequencia" */))
const _56d44a0e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _c1212856 = () => interopDefault(import('..\\pages\\notas.vue' /* webpackChunkName: "pages/notas" */))
const _2833f63e = () => interopDefault(import('..\\pages\\usuario.vue' /* webpackChunkName: "pages/usuario" */))
const _0aee37e2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/avisos",
    component: _32fdd4e3,
    name: "avisos"
  }, {
    path: "/disciplina",
    component: _bb6f64e8,
    name: "disciplina"
  }, {
    path: "/frequencia",
    component: _1fbf1a35,
    name: "frequencia"
  }, {
    path: "/login",
    component: _56d44a0e,
    name: "login"
  }, {
    path: "/notas",
    component: _c1212856,
    name: "notas"
  }, {
    path: "/usuario",
    component: _2833f63e,
    name: "usuario"
  }, {
    path: "/",
    component: _0aee37e2,
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

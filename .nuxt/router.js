import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _64bc610b = () => interopDefault(import('..\\pages\\test\\index.vue' /* webpackChunkName: "pages/test/index" */))
const _86b7b77c = () => interopDefault(import('..\\pages\\activity\\force-logout\\index.vue' /* webpackChunkName: "pages/activity/force-logout/index" */))
const _3327014c = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _14e12314 = () => interopDefault(import('..\\pages\\dashboard\\bank-data\\index.vue' /* webpackChunkName: "pages/dashboard/bank-data/index" */))
const _62600c22 = () => interopDefault(import('..\\pages\\dashboard\\campaigns-data\\index.vue' /* webpackChunkName: "pages/dashboard/campaigns-data/index" */))
const _48a66fef = () => interopDefault(import('..\\pages\\dashboard\\category-campaigns\\index.vue' /* webpackChunkName: "pages/dashboard/category-campaigns/index" */))
const _4365b57c = () => interopDefault(import('..\\pages\\dashboard\\transaction-donation\\index.vue' /* webpackChunkName: "pages/dashboard/transaction-donation/index" */))
const _46de1114 = () => interopDefault(import('..\\pages\\dashboard\\users-data\\index.vue' /* webpackChunkName: "pages/dashboard/users-data/index" */))
const _28a0ce2c = () => interopDefault(import('..\\pages\\dashboard\\users-donation\\index.vue' /* webpackChunkName: "pages/dashboard/users-donation/index" */))
const _35ad48c8 = () => interopDefault(import('..\\pages\\dashboard\\users-role\\index.vue' /* webpackChunkName: "pages/dashboard/users-role/index" */))
const _6c5495dc = () => interopDefault(import('..\\pages\\dashboard\\bank-data\\trash.vue' /* webpackChunkName: "pages/dashboard/bank-data/trash" */))
const _bc343104 = () => interopDefault(import('..\\pages\\dashboard\\campaigns-data\\add.vue' /* webpackChunkName: "pages/dashboard/campaigns-data/add" */))
const _45952155 = () => interopDefault(import('..\\pages\\dashboard\\campaigns-data\\trash.vue' /* webpackChunkName: "pages/dashboard/campaigns-data/trash" */))
const _6ae1dd7e = () => interopDefault(import('..\\pages\\dashboard\\category-campaigns\\add.vue' /* webpackChunkName: "pages/dashboard/category-campaigns/add" */))
const _8128d156 = () => interopDefault(import('..\\pages\\dashboard\\category-campaigns\\trash.vue' /* webpackChunkName: "pages/dashboard/category-campaigns/trash" */))
const _b2ce7408 = () => interopDefault(import('..\\pages\\dashboard\\settings\\change-password\\index.vue' /* webpackChunkName: "pages/dashboard/settings/change-password/index" */))
const _1c133c6a = () => interopDefault(import('..\\pages\\dashboard\\settings\\profile\\index.vue' /* webpackChunkName: "pages/dashboard/settings/profile/index" */))
const _734bcb91 = () => interopDefault(import('..\\pages\\dashboard\\transaction-donation\\add.vue' /* webpackChunkName: "pages/dashboard/transaction-donation/add" */))
const _55124ca8 = () => interopDefault(import('..\\pages\\dashboard\\transaction-donation\\trash.vue' /* webpackChunkName: "pages/dashboard/transaction-donation/trash" */))
const _a72cf83a = () => interopDefault(import('..\\pages\\dashboard\\users-data\\add.vue' /* webpackChunkName: "pages/dashboard/users-data/add" */))
const _84b98f0c = () => interopDefault(import('..\\pages\\dashboard\\users-data\\trash.vue' /* webpackChunkName: "pages/dashboard/users-data/trash" */))
const _5d2eb20a = () => interopDefault(import('..\\pages\\dashboard\\users-donation\\add.vue' /* webpackChunkName: "pages/dashboard/users-donation/add" */))
const _c13414dc = () => interopDefault(import('..\\pages\\dashboard\\users-donation\\trash.vue' /* webpackChunkName: "pages/dashboard/users-donation/trash" */))
const _4d4b1897 = () => interopDefault(import('..\\pages\\dashboard\\users-role\\add.vue' /* webpackChunkName: "pages/dashboard/users-role/add" */))
const _58812336 = () => interopDefault(import('..\\pages\\dashboard\\campaigns-data\\detail\\_slug.vue' /* webpackChunkName: "pages/dashboard/campaigns-data/detail/_slug" */))
const _25fe0d1d = () => interopDefault(import('..\\pages\\dashboard\\campaigns-data\\edit\\_slug.vue' /* webpackChunkName: "pages/dashboard/campaigns-data/edit/_slug" */))
const _c470930a = () => interopDefault(import('..\\pages\\dashboard\\users-data\\detail\\_user.vue' /* webpackChunkName: "pages/dashboard/users-data/detail/_user" */))
const _616ce4a6 = () => interopDefault(import('..\\pages\\dashboard\\users-data\\edit\\_username.vue' /* webpackChunkName: "pages/dashboard/users-data/edit/_username" */))
const _09e7db93 = () => interopDefault(import('..\\pages\\dashboard\\users-donation\\detail\\_user.vue' /* webpackChunkName: "pages/dashboard/users-donation/detail/_user" */))
const _98166676 = () => interopDefault(import('..\\pages\\dashboard\\users-donation\\edit\\_username.vue' /* webpackChunkName: "pages/dashboard/users-donation/edit/_username" */))
const _db32fe74 = () => interopDefault(import('..\\pages\\dashboard\\_role.vue' /* webpackChunkName: "pages/dashboard/_role" */))
const _64c2229d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/test",
    component: _64bc610b,
    name: "test"
  }, {
    path: "/activity/force-logout",
    component: _86b7b77c,
    name: "activity-force-logout"
  }, {
    path: "/auth/login",
    component: _3327014c,
    name: "auth-login"
  }, {
    path: "/dashboard/bank-data",
    component: _14e12314,
    name: "dashboard-bank-data"
  }, {
    path: "/dashboard/campaigns-data",
    component: _62600c22,
    name: "dashboard-campaigns-data"
  }, {
    path: "/dashboard/category-campaigns",
    component: _48a66fef,
    name: "dashboard-category-campaigns"
  }, {
    path: "/dashboard/transaction-donation",
    component: _4365b57c,
    name: "dashboard-transaction-donation"
  }, {
    path: "/dashboard/users-data",
    component: _46de1114,
    name: "dashboard-users-data"
  }, {
    path: "/dashboard/users-donation",
    component: _28a0ce2c,
    name: "dashboard-users-donation"
  }, {
    path: "/dashboard/users-role",
    component: _35ad48c8,
    name: "dashboard-users-role"
  }, {
    path: "/dashboard/bank-data/trash",
    component: _6c5495dc,
    name: "dashboard-bank-data-trash"
  }, {
    path: "/dashboard/campaigns-data/add",
    component: _bc343104,
    name: "dashboard-campaigns-data-add"
  }, {
    path: "/dashboard/campaigns-data/trash",
    component: _45952155,
    name: "dashboard-campaigns-data-trash"
  }, {
    path: "/dashboard/category-campaigns/add",
    component: _6ae1dd7e,
    name: "dashboard-category-campaigns-add"
  }, {
    path: "/dashboard/category-campaigns/trash",
    component: _8128d156,
    name: "dashboard-category-campaigns-trash"
  }, {
    path: "/dashboard/settings/change-password",
    component: _b2ce7408,
    name: "dashboard-settings-change-password"
  }, {
    path: "/dashboard/settings/profile",
    component: _1c133c6a,
    name: "dashboard-settings-profile"
  }, {
    path: "/dashboard/transaction-donation/add",
    component: _734bcb91,
    name: "dashboard-transaction-donation-add"
  }, {
    path: "/dashboard/transaction-donation/trash",
    component: _55124ca8,
    name: "dashboard-transaction-donation-trash"
  }, {
    path: "/dashboard/users-data/add",
    component: _a72cf83a,
    name: "dashboard-users-data-add"
  }, {
    path: "/dashboard/users-data/trash",
    component: _84b98f0c,
    name: "dashboard-users-data-trash"
  }, {
    path: "/dashboard/users-donation/add",
    component: _5d2eb20a,
    name: "dashboard-users-donation-add"
  }, {
    path: "/dashboard/users-donation/trash",
    component: _c13414dc,
    name: "dashboard-users-donation-trash"
  }, {
    path: "/dashboard/users-role/add",
    component: _4d4b1897,
    name: "dashboard-users-role-add"
  }, {
    path: "/dashboard/campaigns-data/detail/:slug",
    component: _58812336,
    name: "dashboard-campaigns-data-detail-slug"
  }, {
    path: "/dashboard/campaigns-data/edit/:slug",
    component: _25fe0d1d,
    name: "dashboard-campaigns-data-edit-slug"
  }, {
    path: "/dashboard/users-data/detail/:user",
    component: _c470930a,
    name: "dashboard-users-data-detail-user"
  }, {
    path: "/dashboard/users-data/edit/:username",
    component: _616ce4a6,
    name: "dashboard-users-data-edit-username"
  }, {
    path: "/dashboard/users-donation/detail/:user",
    component: _09e7db93,
    name: "dashboard-users-donation-detail-user"
  }, {
    path: "/dashboard/users-donation/edit/:username",
    component: _98166676,
    name: "dashboard-users-donation-edit-username"
  }, {
    path: "/dashboard/:role?",
    component: _db32fe74,
    name: "dashboard-role"
  }, {
    path: "/",
    component: _64c2229d,
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

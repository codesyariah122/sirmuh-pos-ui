import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3996ff52 = () => interopDefault(import('../pages/test/index.vue' /* webpackChunkName: "pages/test/index" */))
const _4e8cbb7c = () => interopDefault(import('../pages/activity/force-logout/index.vue' /* webpackChunkName: "pages/activity/force-logout/index" */))
const _34f257ff = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _325ad536 = () => interopDefault(import('../pages/dashboard/bank-data/index.vue' /* webpackChunkName: "pages/dashboard/bank-data/index" */))
const _18ace8af = () => interopDefault(import('../pages/dashboard/campaigns-data/index.vue' /* webpackChunkName: "pages/dashboard/campaigns-data/index" */))
const _029323a2 = () => interopDefault(import('../pages/dashboard/category-campaigns/index.vue' /* webpackChunkName: "pages/dashboard/category-campaigns/index" */))
const _2cb3f83c = () => interopDefault(import('../pages/dashboard/transaction-donation/index.vue' /* webpackChunkName: "pages/dashboard/transaction-donation/index" */))
const _f927452c = () => interopDefault(import('../pages/dashboard/users-data/index.vue' /* webpackChunkName: "pages/dashboard/users-data/index" */))
const _4cfbce5c = () => interopDefault(import('../pages/dashboard/users-donation/index.vue' /* webpackChunkName: "pages/dashboard/users-donation/index" */))
const _02854194 = () => interopDefault(import('../pages/dashboard/users-role/index.vue' /* webpackChunkName: "pages/dashboard/users-role/index" */))
const _adc006c8 = () => interopDefault(import('../pages/dashboard/bank-data/trash.vue' /* webpackChunkName: "pages/dashboard/bank-data/trash" */))
const _37af863e = () => interopDefault(import('../pages/dashboard/campaigns-data/add.vue' /* webpackChunkName: "pages/dashboard/campaigns-data/add" */))
const _e11bdfd6 = () => interopDefault(import('../pages/dashboard/campaigns-data/trash.vue' /* webpackChunkName: "pages/dashboard/campaigns-data/trash" */))
const _55472884 = () => interopDefault(import('../pages/dashboard/category-campaigns/add.vue' /* webpackChunkName: "pages/dashboard/category-campaigns/add" */))
const _757b9595 = () => interopDefault(import('../pages/dashboard/category-campaigns/trash.vue' /* webpackChunkName: "pages/dashboard/category-campaigns/trash" */))
const _31cf3707 = () => interopDefault(import('../pages/dashboard/settings/change-password/index.vue' /* webpackChunkName: "pages/dashboard/settings/change-password/index" */))
const _81a8f950 = () => interopDefault(import('../pages/dashboard/settings/profile/index.vue' /* webpackChunkName: "pages/dashboard/settings/profile/index" */))
const _0d41d5ea = () => interopDefault(import('../pages/dashboard/transaction-donation/add.vue' /* webpackChunkName: "pages/dashboard/transaction-donation/add" */))
const _b90dc0bc = () => interopDefault(import('../pages/dashboard/transaction-donation/trash.vue' /* webpackChunkName: "pages/dashboard/transaction-donation/trash" */))
const _98aa248e = () => interopDefault(import('../pages/dashboard/users-data/add.vue' /* webpackChunkName: "pages/dashboard/users-data/add" */))
const _0b9cf660 = () => interopDefault(import('../pages/dashboard/users-data/trash.vue' /* webpackChunkName: "pages/dashboard/users-data/trash" */))
const _7b486321 = () => interopDefault(import('../pages/dashboard/users-donation/add.vue' /* webpackChunkName: "pages/dashboard/users-donation/add" */))
const _50474038 = () => interopDefault(import('../pages/dashboard/users-donation/trash.vue' /* webpackChunkName: "pages/dashboard/users-donation/trash" */))
const _1aac1af6 = () => interopDefault(import('../pages/dashboard/users-role/add.vue' /* webpackChunkName: "pages/dashboard/users-role/add" */))
const _417d0202 = () => interopDefault(import('../pages/dashboard/campaigns-data/detail/_slug.vue' /* webpackChunkName: "pages/dashboard/campaigns-data/detail/_slug" */))
const _4e898c38 = () => interopDefault(import('../pages/dashboard/campaigns-data/edit/_slug.vue' /* webpackChunkName: "pages/dashboard/campaigns-data/edit/_slug" */))
const _7e6279f8 = () => interopDefault(import('../pages/dashboard/users-data/detail/_user.vue' /* webpackChunkName: "pages/dashboard/users-data/detail/_user" */))
const _5ed78808 = () => interopDefault(import('../pages/dashboard/users-data/edit/_username.vue' /* webpackChunkName: "pages/dashboard/users-data/edit/_username" */))
const _085ae29c = () => interopDefault(import('../pages/dashboard/users-donation/detail/_user.vue' /* webpackChunkName: "pages/dashboard/users-donation/detail/_user" */))
const _184bbcc0 = () => interopDefault(import('../pages/dashboard/users-donation/edit/_username.vue' /* webpackChunkName: "pages/dashboard/users-donation/edit/_username" */))
const _5d036cad = () => interopDefault(import('../pages/dashboard/_role.vue' /* webpackChunkName: "pages/dashboard/_role" */))
const _5f2e85b6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3996ff52,
    name: "test"
  }, {
    path: "/activity/force-logout",
    component: _4e8cbb7c,
    name: "activity-force-logout"
  }, {
    path: "/auth/login",
    component: _34f257ff,
    name: "auth-login"
  }, {
    path: "/dashboard/bank-data",
    component: _325ad536,
    name: "dashboard-bank-data"
  }, {
    path: "/dashboard/campaigns-data",
    component: _18ace8af,
    name: "dashboard-campaigns-data"
  }, {
    path: "/dashboard/category-campaigns",
    component: _029323a2,
    name: "dashboard-category-campaigns"
  }, {
    path: "/dashboard/transaction-donation",
    component: _2cb3f83c,
    name: "dashboard-transaction-donation"
  }, {
    path: "/dashboard/users-data",
    component: _f927452c,
    name: "dashboard-users-data"
  }, {
    path: "/dashboard/users-donation",
    component: _4cfbce5c,
    name: "dashboard-users-donation"
  }, {
    path: "/dashboard/users-role",
    component: _02854194,
    name: "dashboard-users-role"
  }, {
    path: "/dashboard/bank-data/trash",
    component: _adc006c8,
    name: "dashboard-bank-data-trash"
  }, {
    path: "/dashboard/campaigns-data/add",
    component: _37af863e,
    name: "dashboard-campaigns-data-add"
  }, {
    path: "/dashboard/campaigns-data/trash",
    component: _e11bdfd6,
    name: "dashboard-campaigns-data-trash"
  }, {
    path: "/dashboard/category-campaigns/add",
    component: _55472884,
    name: "dashboard-category-campaigns-add"
  }, {
    path: "/dashboard/category-campaigns/trash",
    component: _757b9595,
    name: "dashboard-category-campaigns-trash"
  }, {
    path: "/dashboard/settings/change-password",
    component: _31cf3707,
    name: "dashboard-settings-change-password"
  }, {
    path: "/dashboard/settings/profile",
    component: _81a8f950,
    name: "dashboard-settings-profile"
  }, {
    path: "/dashboard/transaction-donation/add",
    component: _0d41d5ea,
    name: "dashboard-transaction-donation-add"
  }, {
    path: "/dashboard/transaction-donation/trash",
    component: _b90dc0bc,
    name: "dashboard-transaction-donation-trash"
  }, {
    path: "/dashboard/users-data/add",
    component: _98aa248e,
    name: "dashboard-users-data-add"
  }, {
    path: "/dashboard/users-data/trash",
    component: _0b9cf660,
    name: "dashboard-users-data-trash"
  }, {
    path: "/dashboard/users-donation/add",
    component: _7b486321,
    name: "dashboard-users-donation-add"
  }, {
    path: "/dashboard/users-donation/trash",
    component: _50474038,
    name: "dashboard-users-donation-trash"
  }, {
    path: "/dashboard/users-role/add",
    component: _1aac1af6,
    name: "dashboard-users-role-add"
  }, {
    path: "/dashboard/campaigns-data/detail/:slug",
    component: _417d0202,
    name: "dashboard-campaigns-data-detail-slug"
  }, {
    path: "/dashboard/campaigns-data/edit/:slug",
    component: _4e898c38,
    name: "dashboard-campaigns-data-edit-slug"
  }, {
    path: "/dashboard/users-data/detail/:user",
    component: _7e6279f8,
    name: "dashboard-users-data-detail-user"
  }, {
    path: "/dashboard/users-data/edit/:username",
    component: _5ed78808,
    name: "dashboard-users-data-edit-username"
  }, {
    path: "/dashboard/users-donation/detail/:user",
    component: _085ae29c,
    name: "dashboard-users-donation-detail-user"
  }, {
    path: "/dashboard/users-donation/edit/:username",
    component: _184bbcc0,
    name: "dashboard-users-donation-edit-username"
  }, {
    path: "/dashboard/:role?",
    component: _5d036cad,
    name: "dashboard-role"
  }, {
    path: "/",
    component: _5f2e85b6,
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

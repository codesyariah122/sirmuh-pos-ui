import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_2144b22c from 'nuxt_plugin_plugin_2144b22c' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_toast_85ae1288 from 'nuxt_plugin_toast_85ae1288' // Source: .\\toast.js (mode: 'client')
import nuxt_plugin_workbox_1746cfe9 from 'nuxt_plugin_workbox_1746cfe9' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_463bcb69 from 'nuxt_plugin_metaplugin_463bcb69' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_axios_1e0eabe6 from 'nuxt_plugin_axios_1e0eabe6' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_moment_3cc8292b from 'nuxt_plugin_moment_3cc8292b' // Source: .\\moment.js (mode: 'all')
import nuxt_plugin_api_5e4622e4 from 'nuxt_plugin_api_5e4622e4' // Source: ..\\plugins\\api (mode: 'all')
import nuxt_plugin_vuesweetalert2_1def2d6e from 'nuxt_plugin_vuesweetalert2_1def2d6e' // Source: ..\\plugins\\vue-sweetalert2 (mode: 'all')
import nuxt_plugin_role_6a85f0ec from 'nuxt_plugin_role_6a85f0ec' // Source: ..\\plugins\\role (mode: 'all')
import nuxt_plugin_laravelecho_7e3c872f from 'nuxt_plugin_laravelecho_7e3c872f' // Source: ..\\plugins\\laravel-echo (mode: 'all')
import nuxt_plugin_vselect2component_7b65a1d9 from 'nuxt_plugin_vselect2component_7b65a1d9' // Source: ..\\plugins\\v-select2-component (mode: 'all')
import nuxt_plugin_size_6a865077 from 'nuxt_plugin_size_6a865077' // Source: ..\\plugins\\size (mode: 'all')
import nuxt_plugin_currency_15633587 from 'nuxt_plugin_currency_15633587' // Source: ..\\plugins\\currency (mode: 'all')
import nuxt_plugin_pagination_509610e0 from 'nuxt_plugin_pagination_509610e0' // Source: ..\\plugins\\pagination (mode: 'all')
import nuxt_plugin_vClickOutside_77337246 from 'nuxt_plugin_vClickOutside_77337246' // Source: ..\\plugins\\vClickOutside (mode: 'client')
import nuxt_plugin_lodash_52e6a2ea from 'nuxt_plugin_lodash_52e6a2ea' // Source: ..\\plugins\\lodash (mode: 'client')
import nuxt_plugin_truncatehtml_6c920008 from 'nuxt_plugin_truncatehtml_6c920008' // Source: ..\\plugins\\truncate-html (mode: 'client')
import nuxt_plugin_he_5d03ba1a from 'nuxt_plugin_he_5d03ba1a' // Source: ..\\plugins\\he (mode: 'client')
import nuxt_plugin_autoLogoutMixin_744ad1f6 from 'nuxt_plugin_autoLogoutMixin_744ad1f6' // Source: ..\\plugins\\autoLogoutMixin.js (mode: 'client')
import nuxt_plugin_telinput_3e90d4e2 from 'nuxt_plugin_telinput_3e90d4e2' // Source: ..\\plugins\\tel-input (mode: 'client')
import nuxt_plugin_vuetinymce_1a80cfc2 from 'nuxt_plugin_vuetinymce_1a80cfc2' // Source: ..\\plugins\\vue-tiny-mce (mode: 'client')
import nuxt_plugin_timestamp_731a9260 from 'nuxt_plugin_timestamp_731a9260' // Source: ..\\plugins\\timestamp (mode: 'all')
import nuxt_plugin_decode_6f4e8638 from 'nuxt_plugin_decode_6f4e8638' // Source: ..\\plugins\\decode (mode: 'client')
import nuxt_plugin_encode_6ae72de8 from 'nuxt_plugin_encode_6ae72de8' // Source: ..\\plugins\\encode (mode: 'client')
import nuxt_plugin_vuewysiwyg_35b20b90 from 'nuxt_plugin_vuewysiwyg_35b20b90' // Source: ..\\plugins\\vue-wysiwyg (mode: 'all')
import nuxt_plugin_vue2datepicker_04943087 from 'nuxt_plugin_vue2datepicker_04943087' // Source: ..\\plugins\\vue2-datepicker (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"SIROJUL MUHTADIN","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Sirojul Muhtadin"},{"name":"format-detection","content":"telephone=no"},{"name":"keyword","content":"Sirojul Muhtadin"},{"name":"description","content":"Sirojul Muhtadin"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002Fsirojulmuhtadin.com\u002F"},{"hid":"og:site_name","property":"og:site_name","content":"Sirojul Muhtadin"},{"hid":"og:title","property":"og:title","content":"Sirojul Muhtadin"},{"hid":"og:description","property":"og:description","content":"Sirojul Muhtadin"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:image:type","property":"og:image:type","content":"image\u002Fpng"},{"hid":"og:image","property":"og:image","content":"https:\u002F\u002Fapi.sirojulmuhtadin.com\u002Fassets\u002Fimg\u002Flogo-dku.png"},{"hid":"og:image:width","property":"og:image:width","content":"600"},{"hid":"og:image:height","property":"og:image:height","content":"600"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F6.4.0\u002Fcss\u002Fall.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fassets\u002Fflowbite.min.css"}],"script":[{"src":"\u002Fassets\u002Fflowbite.min.js","body":true,"async":true,"defer":true,"ssr":false},{"src":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Falpinejs@3.x.x\u002Fdist\u002Fcdn.min.js","defer":true}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_2144b22c === 'function') {
    await nuxt_plugin_plugin_2144b22c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_toast_85ae1288 === 'function') {
    await nuxt_plugin_toast_85ae1288(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_1746cfe9 === 'function') {
    await nuxt_plugin_workbox_1746cfe9(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_463bcb69 === 'function') {
    await nuxt_plugin_metaplugin_463bcb69(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_1e0eabe6 === 'function') {
    await nuxt_plugin_axios_1e0eabe6(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_3cc8292b === 'function') {
    await nuxt_plugin_moment_3cc8292b(app.context, inject)
  }

  if (typeof nuxt_plugin_api_5e4622e4 === 'function') {
    await nuxt_plugin_api_5e4622e4(app.context, inject)
  }

  if (typeof nuxt_plugin_vuesweetalert2_1def2d6e === 'function') {
    await nuxt_plugin_vuesweetalert2_1def2d6e(app.context, inject)
  }

  if (typeof nuxt_plugin_role_6a85f0ec === 'function') {
    await nuxt_plugin_role_6a85f0ec(app.context, inject)
  }

  if (typeof nuxt_plugin_laravelecho_7e3c872f === 'function') {
    await nuxt_plugin_laravelecho_7e3c872f(app.context, inject)
  }

  if (typeof nuxt_plugin_vselect2component_7b65a1d9 === 'function') {
    await nuxt_plugin_vselect2component_7b65a1d9(app.context, inject)
  }

  if (typeof nuxt_plugin_size_6a865077 === 'function') {
    await nuxt_plugin_size_6a865077(app.context, inject)
  }

  if (typeof nuxt_plugin_currency_15633587 === 'function') {
    await nuxt_plugin_currency_15633587(app.context, inject)
  }

  if (typeof nuxt_plugin_pagination_509610e0 === 'function') {
    await nuxt_plugin_pagination_509610e0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vClickOutside_77337246 === 'function') {
    await nuxt_plugin_vClickOutside_77337246(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_lodash_52e6a2ea === 'function') {
    await nuxt_plugin_lodash_52e6a2ea(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_truncatehtml_6c920008 === 'function') {
    await nuxt_plugin_truncatehtml_6c920008(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_he_5d03ba1a === 'function') {
    await nuxt_plugin_he_5d03ba1a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_autoLogoutMixin_744ad1f6 === 'function') {
    await nuxt_plugin_autoLogoutMixin_744ad1f6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_telinput_3e90d4e2 === 'function') {
    await nuxt_plugin_telinput_3e90d4e2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuetinymce_1a80cfc2 === 'function') {
    await nuxt_plugin_vuetinymce_1a80cfc2(app.context, inject)
  }

  if (typeof nuxt_plugin_timestamp_731a9260 === 'function') {
    await nuxt_plugin_timestamp_731a9260(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_decode_6f4e8638 === 'function') {
    await nuxt_plugin_decode_6f4e8638(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_encode_6ae72de8 === 'function') {
    await nuxt_plugin_encode_6ae72de8(app.context, inject)
  }

  if (typeof nuxt_plugin_vuewysiwyg_35b20b90 === 'function') {
    await nuxt_plugin_vuewysiwyg_35b20b90(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vue2datepicker_04943087 === 'function') {
    await nuxt_plugin_vue2datepicker_04943087(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }

import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from '@/App'
import { routes } from '@/routes'
import store from '@/stores/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

sync(store, router);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

import 'babel-polyfill'

import Vue from 'vue'
import iView from 'iview'
import App from './App.vue'
import router from './router'
import 'iview/dist/styles/iview.css'
import store from './states/store.js'

Vue.use(iView)

const app = new Vue({
  render: h => h(App),
  store,
  router
})

app.$mount('#app')

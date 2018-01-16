import Vue from 'vue'
import VueRouter from 'vue-router'


// router settings
Vue.use(VueRouter)

const index = (resolve:any) => require(['./modules/index.vue'], resolve)

const routes = [
  {
    path: '/',
    redirect: '/index'
  }, {
    name: 'index',
    path: '/index',
    component: index,
    meta: { auth: false }
  }, {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

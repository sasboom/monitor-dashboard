import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import App from './App.vue'
import RegisterPage from './components/RegisterPage.vue'
import LoginPage from './components/LoginPage.vue'
import StatusPage from './components/StatusPage.vue'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$http = axios

const routes = [
  {path: '/', component: LandingPage},
  {path: '/register', name: "Register", component: RegisterPage},
  {path: '/login', name: "Login", component: LoginPage},
  {path: '/status', name: "Status", component: StatusPage, meta: {requiresAuth: true}}
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('token') == null) {
        next({
            path: '/login'
        })
      } else {
        next()
      }
    }
    next();
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

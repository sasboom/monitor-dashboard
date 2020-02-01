import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import App from './App.vue'
import RegisterPage from './components/RegisterPage.vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$http = axios

const routes = [
  {path: '/', component: LandingPage},
  {path: '/register', name: "Register", component: RegisterPage}
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/reset.css'
import './assets/css/style.css'
import './assets/css/query/query768.css'
import './assets/css/query/query1087.css'
import './assets/css/query/query1279.css'
import './assets/css/query/query1472.css'
import './assets/third-party/iconfont.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8081/users'
Vue.prototype.$http = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

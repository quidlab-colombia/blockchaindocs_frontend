import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueClipboard from 'vue-clipboard2'
import {sync} from 'vuex-router-sync'

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

let remote

try {
  remote = $VUE_REMOTE
} catch(e) {
  remote = false
}

//Vue.axios.defaults.baseURL = remote ? '/api/' : 'http://localhost:10010'
Vue.axios.defaults.baseURL = remote ? '/api/' : 'http://104.197.233.170:10010'

sync(store,router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

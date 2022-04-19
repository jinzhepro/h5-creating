import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App.vue'
import router from './router/index'
import request from './utils/request'
import bus from './utils/bus'
import store from './store/index'
import './components/public/index'
import './components/custom/index'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(request)
Vue.use(bus)
Vue.use(ElementUI, { size: 'mini' })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

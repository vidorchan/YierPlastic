import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import App from './App.vue'
import i18n from './i18n/i18n';
import router from './router';
import VueResource from 'vue-resource'
import AMap from 'vue-amap'
import VueLazyload from 'vue-lazyload'

// import api from './api/api'
// import common from './utils/common'

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(AMap)

Vue.use(VueLazyload, {
    loading: './static/images/loading.gif'
})
// Vue.prototype.api = api
// Vue.prototype.common = common
AMap.initAMapApiLoader({
    key: 'ef8df73a54355f68e1b32ed840c03b5d',
    plugin: ['AMap.Scale']
})

new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
})

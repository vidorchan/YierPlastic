import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import i18n from './i18n/i18n';

new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})

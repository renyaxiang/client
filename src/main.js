// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import filters from './filters'
import store from './vuex/index'
import infiniteScroll from 'vue-infinite-scroll'
import VeeValidate from 'vee-validate'
import config from './config/index'
import alert from './libs/alert'
import App from './App.vue'
Vue.use(infiniteScroll)
Vue.use(VeeValidate, config.veeConfig)
Vue.use(alert)
// 注册全局的过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})

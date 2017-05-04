// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import filters from './filters'
import store from './vuex/index'
import axios from 'axios'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
// axios.defaults.baseURL = 'http://127.0.0.1:3000/api/'
axios.defaults.baseURL = 'https://cnodejs.org/api/v1/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

// 注册全局的过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router
})

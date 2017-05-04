import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  token: '',
  page: 1
}
const getters = {
  getToken(state) {
    return state.token
  },
  getPage(state) {
    return state.page
  }
}
const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setPage(state, page) {
    state.page = page
  }
}
const actions = {
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  setPage({ commit }, page) {
    commit('setPage', page)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

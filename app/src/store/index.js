import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: "",
    userAva: ""
  },
  getters: {
    getUserName(state) {
      return state.userName
    },
    getUserAva(state) {
      return state.userAva
    }
  },
  mutations: {
    saveUserName(state, name) {
      state.userName = name
    },
    saveUserAva(state, ava) {
      state.userAva = ava
    }
  },
  actions: {
  },
  modules: {
  }
})
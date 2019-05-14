import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import { asyncRequest } from '../api/table'

Vue.use(Vuex)

const store = new Vuex.Store({
  mutations: {
    dosomething({ state }, val) {
      console.log('val:==== ', val)
    }
  },
  actions: {
    async test({ commit }, data) {
      const res = await asyncRequest()
      commit('dosomething', res)
      return res
    }
  },
  modules: {
    app,
    settings,
    user
  },
  getters
})

export default store

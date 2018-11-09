import Vue from 'vue'

import Vuex from 'vuex'

import actions from './actions'

import mutations from './mutations'

import getters from './getter'

Vue.use(Vuex)

const state = {

  data: 'dataTest'

}

export default new Vuex.Store({

  state,

  actions,

  mutations,

  getters

})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],

  },
  mutations: {
    changeCountry (state, results){
      state.countries = results;

    }
  },
  actions: {

  }
})

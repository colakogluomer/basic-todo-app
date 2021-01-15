import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    people: []
  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount
    },
    SET_PEOPLE(state, data) {
      state.people = data
    },
  },
  actions: {
    incrementCounter({commit, state }) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount)
    },
    async fetchPeople({ commit }) {
      const result = await axios.get('http://localhost:3001/person/all')
      commit('SET_PEOPLE', result.data)
    },
    async addPerson ({commit, state}) {
      await axios.post('http://localhost:3001/person', { name: 'ayse', surname: 'mehmet', age: '28'});
      const newCount = state.counter +1
      commit('SET_COUNTER', newCount)
    }
  },

  modules: {
  }
})

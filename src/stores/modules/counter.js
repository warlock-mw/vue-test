import Vue from 'vue'
import axios from 'axios'

const state = {
  count: 0,
  count_list: [0],
}

const mutations = {
  'INCREMENT' (state) {
    state.count += 1
    state.count_list = [...Array(state.count + 1).keys()]
  },
  'DECREMENT' (state) {
     if (state.count > 0) {
       state.count -= 1
       state.count_list = [...Array(state.count + 1).keys()]
     }
  },
}

const actions = {
  async plusCount({commit}) {
    const url = "https://qiita.com/api/v2/items"
    const q   = await axios.get(url)

    console.log(q)
    commit('INCREMENT')
  },
  minusCount({commit}) {
    commit('DECREMENT')
  },
}

const getters = {
  nowCount: state => {
    return state.count
  },
  nowCountList: state => {
    return state.count_list
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}

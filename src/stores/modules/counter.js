const state = {
  count: 0,
  count_list: [0],
}

const mutations = {
  increment(state) {
    state.count += 1
    state.count_list = [...Array(state.count + 1).keys()]
  },
  decrement(state) {
     if (state.count > 0) {
       state.count -= 1
       state.count_list = [...Array(state.count + 1).keys()]
     }
  },
}

const actions = {
  plusCount({commit}) {
    commit('increment')
  },
  minusCount({commit}) {
    commit('decrement')
  },
}

const getters = {
  nowCount(state) {
    return state.count
  },
  nowCountList(state) {
    return state.count_list
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

import Qiita from '@/api/Qiita'

const state = {
  postList: [],
}

const mutations = {
  updateList(state, payload) {
    state.postList = payload
  },
}

const actions = {
  async getData({commit}) {
    try {
      const qiita = new Qiita()
      const data  = await qiita.get()

      commit('updateList', data)

      return true
    } catch (error) {
      return false
    }
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

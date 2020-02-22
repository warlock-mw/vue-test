import Vue from 'vue'
import Vuex from 'vuex'

import counter from '@/stores/modules/counter'
import qiita from '@/stores/modules/qiita'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter,
    qiita
  }
})

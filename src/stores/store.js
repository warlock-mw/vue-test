import Vue from 'vue'
import Vuex from 'vuex'

import counter from '@/stores/modules/counter'
import qiita from '@/stores/modules/qiita'
import graph from '@/stores/modules/graph'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter,
    qiita,
    graph
  }
})

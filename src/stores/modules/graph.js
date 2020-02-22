const state = {
  nodes: [
    { id: 1, name: 'my node 1' },
    { id: 2, name: 'my node 2' },
    { id: 3, _color:'orange' },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10, name: 'my node 10' },
    { id: 11, name: 'my node 11' },
    { id: 12, name: 'my node 12' },
    { id: 13, _color:'orange' },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 }
  ],
  links: [
    { sid: 1, tid: 2, _color:'red' },
    { sid: 2, tid: 8, _color:'f0f' },
    { sid: 3, tid: 4, _color:'rebeccapurple' },
    { sid: 4, tid: 5 },
    { sid: 5, tid: 6 },
    { sid: 7, tid: 8 },
    { sid: 5, tid: 8 },
    { sid: 3, tid: 8 },
    { sid: 7, tid: 9 },
    { sid: 10, tid: 12, _color:'red' },
    { sid: 12, tid: 18, _color:'f0f' },
    { sid: 13, tid: 14, _color:'rebeccapurple' },
    { sid: 14, tid: 15 },
    { sid: 15, tid: 16 },
    { sid: 17, tid: 8 },
    { sid: 15, tid: 8 },
    { sid: 13, tid: 8 },
    { sid: 17, tid: 9 },
    { sid: 17, tid: 11 },
    { sid: 12, tid: 8 },
    { sid: 19, tid: 13 }
  ],
  options:
  {
    force: 3000,
    nodeSize: 15,
    nodeLabels: true,
    linkWidth:5
  }
}

const mutations = {}

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

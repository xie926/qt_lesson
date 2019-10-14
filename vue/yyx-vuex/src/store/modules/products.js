import shop from '../../api/shop'
const state = {
  all:[
  
  ]
}

const getters = {}
// vuex 给actions的， commit mutations
const actions = {
  getAllProducts( {commit}) {
    // api
    shop.getProducts((products) => {
      console.log('前端到api，callback 回来了', products);
      commit('setProducts',products)
    })
    // mutations

  }
}

const mutations = {
  setProducts(state,products) {
    state.all = productse
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
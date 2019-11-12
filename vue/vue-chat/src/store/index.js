import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import  mutations from './mutations'


const state = {
    currentThreadID:null,
    threads:{
        
    },
    messages:{

    }
}
Vue.use(Vuex)
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
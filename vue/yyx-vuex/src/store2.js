// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex, { mapGetters, mapActions } from 'vuex'

// Vue prototype vuex 功能？
// 借 mapActions mapGetters 
// this.$store

Vue.use(Vuex);


const state = {
  count: 0 //状态树
}
const mutations = {
  //修改状态


}
const actions= {

}
const getters ={}
// 四大家族
// mapGetters mapActions this.$store
export default new Vuex.Store({
  state, mutations,actions,getters
})

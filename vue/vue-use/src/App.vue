<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <HelloWorld/>
    <elButton type="primary"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AVue from '@/AVue.js'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    this.$message('有风险')
    // const av = new AVue({
    //   methods:{
    //     say(){
    //       this.$alert();
    //     }
    //   }
    // });
    // av.say();
    console.log(this.$alert())
  },
  created(){
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

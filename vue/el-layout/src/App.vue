<template>
  <div id="app">
    <!-- <ElRow/> -->
    <el-row>
      <!-- <slot>hh</slot> -->
    </el-row>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ElRow from './components/el-row'

export default {
  name: 'App',
  components: {
    HelloWorld,
    'el-row':ElRow
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

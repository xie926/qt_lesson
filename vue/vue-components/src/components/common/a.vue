<template>
  <div class="components-A">组件A---{{app.user}}
    <comB :send="test"></comB>
  </div>
</template>

<script>
import comB from './b.vue'
export default {
  inject: ['app'],
  components: {
    comB
  },
  data () {
    return {
      test: '我是aaa'
    }
  },
  provide: {
    name: 'wn'
  }
}
</script>

<style>

</style>
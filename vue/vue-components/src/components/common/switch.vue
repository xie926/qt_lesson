<template>
  <div class="switch">
    <!-- <button>开关</button> -->
    <!-- <button>点击</button> -->
    <child></child>
  </div>
</template>

<script>
import child from '@/components/common/child'
export default {
  data () {
    return {
      switch:false
    }
  },
  mounted() {
    this.$on('test',(text) => {
      console.log(text)
    })
  },
  methods: {
    // open() {
    //   this.$emit('test','666')
    // },
  },
  components:{
    child
  }
}
</script>

<style>

</style>
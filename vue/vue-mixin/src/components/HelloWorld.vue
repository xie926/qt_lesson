<template>
  <div>
    <my-dialog>
    </my-dialog>
    <my-loading></my-loading>
  </div>
</template>

<script>
import MyDialog from './MyDialog'
import MyLoading from './MyLoading'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components:{
    'my-dialog': MyDialog,
    'my-loading':MyLoading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

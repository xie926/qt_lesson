<script>
export default {
  data(){
    return {

    }
  },
  render(h){
    let obj = h(
      'div',
      {

      },
      'render 函数'
    )
    // return 'render 函数';
    console.log(obj)
  }
}
</script>
<style scoped>
/**
24
 */
.el-row{
  width:100%;
}
</style>
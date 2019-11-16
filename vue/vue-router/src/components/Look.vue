<template>
  <div>
    {{msg}}
    <span>{{$route.params.id}}</span>
  </div>
</template>

<script>
export default {
  name: "Look",
  data() {
    return {
      msg: "看一看页面"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<template>
  <div>
    <h2 :style="{color:theme}">一段有颜色的话</h2>
  </div>
</template>

<script>
export default {
  inject:['theme']
}
</script>

<style>

</style>
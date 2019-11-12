<template>
  <div class="chatapp">
      <thread-section></thread-section>
      <message-section></message-section>
  </div>
</template>

<script>
import ThreadSection from '@/components/ThreadSection.vue'
import MessageSection from '@/components/MessageSection.vue'
export default {
  name: 'App',
  components: {
    ThreadSection,
    MessageSection
  },
  mounted(){
    this.$store.dispatch('getAllMessages')
  }
}
</script>

<style src="./css/chat.css">

</style>

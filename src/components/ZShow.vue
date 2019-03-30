<template>
  <div class="container">
    <p>ZShow:{{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  },
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">

</style>

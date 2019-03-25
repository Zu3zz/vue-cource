<template>
  <div class="container">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '3zz'
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to,name, from.name)
  }
}
</script>

<style scoped lang="scss">

</style>

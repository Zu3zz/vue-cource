<template>
  <div class="email">
    <button @click="handleClick">press me</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  },
  mounted () {
    console.log(this.$bus)
  },
  components: {

  }
}
</script>

<style scoped>
.email{
  border: 1px solid green;
}
</style>

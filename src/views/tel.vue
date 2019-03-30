<template>
  <div class="tel">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {
      console.log('hello')
    })
  },
  components: {

  }
}
</script>

<style scoped>
.tel{
  border: 1px solid red;
}
</style>

<template>
  <div class="container">
    <son :name="myname" :head="myhead"/>
  </div>
</template>

<script>
import Son from './son.vue'
export default {
  components: {
    Son
  },
  data () {
    return {
      myname: '3zz',
      myhead: ['1', '2', '3']
    }
  }
}
</script>

<style scoped lang="scss">

</style>

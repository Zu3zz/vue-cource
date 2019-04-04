<template>
  <div class="container">
    <ul>
      <li v-for="(item, idx) in list" :key="idx">{{ item.name }}</li>
      {{head}}
      {{name}}
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      list: [{
        title: '1',
        name: '3z'
      }, {
        title: '2',
        name: '2y'
      }]
    }
  },
  props: {
    name: Number,
    head: []
  }
}
</script>

<style scoped lang="scss">

</style>

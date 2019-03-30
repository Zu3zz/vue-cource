<template>
  <div class="container" >
    <z-input @input="handleInput"/>
    <z-show :content="inputValue"/>
    <!-- <p>{{inputValue}}</p> -->
  </div>
</template>

<script>
import ZInput from '_c/ZInput.vue'
import ZShow from '_c/ZShow.vue'
export default {
  name: 'store',
  components: {
    ZInput,
    ZShow
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>

<style scoped lang="scss">
</style>

<template>
  <div class="container">
    <input type="text" @input="handleInput1" />
    <button @click="handleInput"></button>
    <div v-for="(item, idx) in inputText" :key="idx">{{ item }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      text: '',
      inputText: ['1', '2']
    }
  },
  methods: {
    handleInput1 (e) {
      this.text = e.target.value
    },
    handleInput () {
      this.inputText.push(this.text)
      console.log(this.text)
      this.text = ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>

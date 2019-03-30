<template>
  <input @input="handleInput" :value="value"/>
</template>

<script>
export default {
  name: 'ZInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.$emit('input', value)
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">

</style>

<template>
  <div class="container" >
    <z-input @input="handleInput"/>
    <!-- <z-show :content="inputValue"/> -->
    <p>{{userName}}, appNameWithVersion : {{appNameWithVersion}} </p>
    <p>{{inputValue}} -> lastLetter is {{ inputValueLastLetter }} firstLetter is {{ firstLetter }}</p>
  </div>
</template>

<script>
import ZInput from '_c/ZInput.vue'
import ZShow from '_c/ZShow.vue'
import { mapState, mapGetters } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')
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
  computed: {
    ...mapState({
      userName: state => state.userName
    }),
    ...mapGetters('user', [
      'firstLetter'
    ]),
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    },
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.users.userName
    // })
    // ...mapState([
    //   'appName'
    // ])
    appName () {
      return this.$store.state.appName
    }
    // userName () {
    //   return this.$store.state.users.userName
    // }
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

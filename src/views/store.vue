<template>
  <div class="container">
    <z-input @input="handleInput" />
    <!-- <z-show :content="inputValue"/> -->
    <p>appName: {{appName}}, userName: {{userName}}</p>
    <p>{{inputValue}} -> lastLetter is {{ inputValueLastLetter }} firstLetter is {{ firstLetter }}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <p>{{ appVersion }}</p>
    <button @click="changeUserName">修改用户名</button>
  </div>
</template>

<script>
import ZInput from '_c/ZInput.vue'
// import ZShow from '_c/ZShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')
export default {
  name: 'store',
  components: {
    ZInput
    // ZShow
  },
  data() {
    return {
      inputValue: ''
    }
  },
  computed: {
    ...mapState({
      userName: state => state.user.userName,
      appVersion: state => state.appVersion
    }),
    ...mapGetters('user', ['firstLetter']),
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1)
    },
    ...mapActions(
      ['updateAppName']
    ),
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
    appName() {
      return this.$store.state.appName
    }
    // userName () {
    //   return this.$store.state.users.userName
    // }
  },
  methods: {
    ...mapMutations(['SET_USER_NAME', 'SET_APP_NAME']),
    handleInput(val) {
      this.inputValue = val
    },
    handleChangeAppName() {
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName'
      // })
      // 有了...mapMutations之后就不要上面这样操作了
      // 直接按照下面的方法操作即可
      this.SET_APP_NAME('newAppName')
      this.updateAppName()
      this.$store.commit('SET_APP_VERSION')
    },
    changeUserName() {
      this.SET_USER_NAME('vue-cource')
      // this.$store.dispatch('SET_APP_NAME', {'123})
    }
  }
}
</script>

<style scoped lang="scss">
</style>

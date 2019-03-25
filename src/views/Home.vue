<template>
  <div class="home">
    <b> {{ food }}</b>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">跳转到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to.name)
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    // const leave = confirm('Do you want to leave')
    // if (leave) next()
    // else next(false)
  },
  methods: {
    handleClick (type) {
    if(type==='back') this.$router.back()
    // this.$router.go(-1)
    else if (type==='push'){
      const name = '3zzz'
      // this.$router.push('/parent')
      this.$router.push({
        path: `/argu/${name}`
        /*
        name: 'argu',
        params: {
          name: '3zz'
        }
        */
        // query: {
        //   name: '3zz'
        // }
      })
    } else if (type==='replace'){
        this.$router.replace({
          name: 'parent'
        })
      }
    }
  }
}
</script>

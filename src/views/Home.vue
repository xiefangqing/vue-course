<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <button @click="getInfo">请求数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import axios from 'axios'
import { getUserInfo } from '@/api/user'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  methods: {
    handleClick (type) {
      // this.$router.go(-1)
      if (type === 'back') this.$router.back()
      // else if (type === 'push') this.$router.push('/parent')
      else if (type === 'push') {
        const name = 'hahaha'
        this.$router.push({
          path: `/argu/${name}`
          // name: 'argu',
          // params: {
          //   name: 'hahaha'
          // }
          // query: {
          //   name: 'xiaoxie'
          // }
        })
      } else if (type === 'replace') {
        this.$router.replace({
          name: 'parent'
        })
      }
    },
    getInfo () {
      // axios.post('/getUserInfo', { userId: 28 }).then(res => {
      //   console.log(res)
      // })
      getUserInfo({ userId: 28 }).then(res => {
        console.log(res)
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    // console.log(to.name, from.name)
    next(vm => {
      // console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    // const leave = confirm('您确定要离开吗？')
    // if (leave) next()
    // else next(false)
    next()
  }
}
</script>

<template>
  <div>
    <!--<xie-input :value="stateValue" @input="handleInputValueChange"></xie-input>-->
    <xie-input v-model="stateValue"></xie-input>
    <p>{{ stateValue }}</p>
    <!--<xie-input :value="inputValue" @input="handleInput"></xie-input>-->
    <!--<xie-input @input="handleInput"></xie-input>-->
    <!--<p>{{ inputValue }} -> last letter: {{ inputValueLastLetter }}</p>-->
    <!--<xie-show :content="inputValue"/>-->
    <p>appName: {{ appName }}</p>
    <p>{{ appNameWithVersion }}</p>
    <p>userName: {{ userName }} -> first letter: {{ firstLetter }}</p>
    <button @click="changeAppName">修改appName</button>
    <p>{{ appVersion }}</p>
    <button @click="changeUserName">修改userName</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(item, index) in todoList" :key="index">{{ item }}</p>
  </div>
</template>

<script>
import XieInput from '_c/XieInput.vue'
import XieShow from '_c/XieShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// ‘user’是命名空间名
// const { mapGetters } = createNamespacedHelpers('user')
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    XieInput,
    XieShow
  },
  computed: {
    // firstLetter () {
    //   return this.userName.slice(0, 1)
    // },
    // 这里的'user'是命名空间名，不是模块名
    // 如果没有开启命令空间，可以直接获取所有getters
    ...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ]),
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    inputValueLastLetter () {
      return this.inputValue.slice(-1)
    },
    // ...mapState('user', {
    //   userName: state => state.userName
    // }),
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => state.user.todo ? state.user.todo.todoList : []
    }),
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (newValue) {
        this.SET_STATE_VALUE(newValue)
      }
    }
    // ...mapState([
    //   'appName'
    // ]),
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // },
  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_APP_VERSION',
      'SET_USER_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput (val) {
      this.inputValue = val
    },
    changeAppName () {
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName'
      // })
      // this.SET_APP_NAME('newAppName')
      // this.SET_APP_NAME({
      //   appName: 'newAppName'
      // })
      // this.$store.dispatch('updateAppName')
      this.updateAppName()
      // this.$store.commit('SET_APP_VERSION')
      this.SET_APP_VERSION()
    },
    changeUserName () {
      // 即使在严格模式下，userName的值依旧会被修改为'haha'，只是会提示警告错误
      // 但这是错误的方式，不要使用
      // this.$store.state.user.userName = 'haha'
      this.SET_USER_NAME('newUserName')
    },
    registerModule () {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '叼毛',
            '加油'
          ]
        }
        // ...
      })
    },
    handleInputValueChange (val) {
      // val是输入框的内容，不是事件对象
      this.SET_STATE_VALUE(val)
    }
  }
}
</script>

<style scoped>

</style>

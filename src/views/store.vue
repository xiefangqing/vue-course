<template>
  <div>
    <!--<xie-input v-model="inputValue"></xie-input>-->
    <!--<xie-input :value="inputValue" @input="handleInput"></xie-input>-->
    <xie-input @input="handleInput"></xie-input>
    <p>{{ inputValue }} -> last letter: {{ inputValueLastLetter }}</p>
    <!--<xie-show :content="inputValue"/>-->
    <p>{{ appName }}</p>
    <p>{{ appNameWithVersion }}</p>
    <p>{{ userName }}</p>
    <p>{{ firstLetter }}</p>
  </div>
</template>

<script>
import XieInput from '_c/XieInput.vue'
import XieShow from '_c/XieShow.vue'
import { mapState, mapGetters } from 'vuex'
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
      userName: state => state.user.userName
    })
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
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>

<style scoped>

</style>

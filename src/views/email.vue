<template>
  <div class="email">
    <button @click="handleClick">按我</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      // this.$emit('a', 'hello')
      this.$bus.$emit('on-click', 'hello')
    }
  },
  mounted () {
    // console.log(this.$bus)
    // this.$on('a', mes => {
    //   console.log(mes)
    // })
  }
}
</script>

<style scoped>
.email {
  border: 1px solid green;
}
</style>

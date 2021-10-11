<template>
  <input @input="handleInput" :value="value"/>
</template>

<script>
export default {
  name: 'XieInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (e) {
      const val = e.target.value
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped>

</style>

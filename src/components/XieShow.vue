<template>
  <div>
    <p>XieShow: {{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'XieShow',
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style scoped>

</style>

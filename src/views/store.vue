<template>
  <div>
    <!--<xie-input v-model="inputValue"></xie-input>-->
    <!--<xie-input :value="inputValue" @input="handleInput"></xie-input>-->
    <xie-input @input="handleInput"></xie-input>
    <!--<p>{{ inputValue }}</p>-->
    <xie-show :content="inputValue"/>
  </div>
</template>

<script>
import XieInput from '_c/XieInput.vue'
import XieShow from '_c/XieShow.vue'
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
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>

<style scoped>

</style>

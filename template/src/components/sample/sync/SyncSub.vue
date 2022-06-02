<template>
  <div id='main'>
    子：<input
      type="text"
      name="text"
      id=""
      :value='SyncTextSub'
      @input='updateValue'
    >
    <input v-model.lazy="SyncTextSub">
    {{SyncTextSub}}
  </div>
</template>
<script>
export default {
  // name: 'SubSub',
  props: {
    SyncTextSub: {
      type: String,
      defalut: '',
      required: false
    }
  },
  data () {
    return {
      onlyPropEmitText: 'SyncTextSubのテキストです。',
      text: 'SyncTextSub.vueを読み込んでいます。'
    }
  },
  methods: {
    updateValue (event) {
      this.$emit('update:SyncTextSub', event.target.value)
    }
  },
  watch: {
    SyncTextSub () {
      this.$emit('update:SyncTextSub', event.target.value)
    }
  }
}
</script>
<style scoped>
#main {
  padding: 25px;
  border: 2px dashed grey;
  margin-bottom: 25px;
  background-color: beige;
}

</style>

<template>
  <div id='main'>
    <h1 id="sub1">{{ text }}</h1>
    <ul>
      <li>propされた値：{{ PropFromSampleSub }}</li>
      <li>propしないで取得値：{{ NoPropFromSampleSub }}</li>
    </ul>
    <button @click="testLog">log</button>
    <button @click="$emit('printLog1','GO')">log</button>
  </div>
</template>
<script>

export default {
  // name: 'SubSub',
  components: {
    // SubSub
  },
  props: {
    PropFromSampleSub: {
      type: String,
      defalut: '-',
      required: false
    }
  },
  data () {
    return {
      subText: 'hoge',
      onlyPropEmitSubText: 'PropEmitSubのテキストです。',
      text: 'PropEmitSub.vueを読み込んでいます。',
      NoPropFromSampleSub: this.$parent.NoPropFromSample
    }
  },
  methods: {
    testLog () {
      console.log('log1')
      this.$emit('printLog1', this.text)
    }
  }
}
</script>
<style scoped>
#sub1 {
  font-size: 24px;
  color:blue
}

#main {
  padding: 25px;
  border: 2px dashed grey;
  margin-bottom: 25px;
  background-color: lightgray;
}

</style>

<template>
  <div id='main'>
    <h1 id="sub1">{{ text }}</h1>
    <ul>
      <li>propされた値：{{ PropFromSample }}</li>
      <li>propしないで取得値：{{ NoPropFromSample }}</li>
    </ul>
    <button @click="testLog">log</button>
    <button @click="$emit('printLog1','GO')">log</button>
    <PropEmitSub :PropFromSampleSub='PropFromSample' />
    refSubText={{refSubText}}
  </div>
</template>
<script>
import PropEmitSub from '@/components/sample/PropEmitON/PropEmitSub'
export default {
  // name: 'SubSub',
  components: {
    PropEmitSub
  },
  props: {
    PropFromSample: {
      type: String,
      defalut: '',
      required: false
    }
  },
  data () {
    return {
      onlyPropEmitText: 'PropEmitのテキストです。',
      text: 'PropEmit.vueを読み込んでいます。',
      NoPropFromSample: this.$parent.NoPropToPropEmitON,
      refSubText: this.$ref.subText
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
  background-color: beige;
}

</style>

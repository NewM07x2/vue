<template>
  <div id="main">
  </div>
</template>
<script>
import _ from 'lodash'

export default {
  name: 'main',
  components: {
  },
  data () {
    return {
      msg: 'Hello World!',
    }
  },
  computed: {
    // 変数によって動的に変化させたい時に使用。返却値がある。
    // double () {
    //   return this.result * 2
    // }
  },
  created () {},
  methods: {
    printLog (text) {
      // this.$refs.child.testLog()
      console.log(text + 'を押下しました。')
    },
    },
  watch: {
    msg () {
      console.log('変化あり')
  }
}
</script>

<style></style>

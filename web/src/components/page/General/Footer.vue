<template>
  <div id="main">
    <h1>main</h1>
  </div>
</template>
<script>
// import _ from 'lodash'
export default {
  name: 'App',
  components: {},
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  computed: {
    // 変数によって動的に変化させたい時に使用。返却値がある。
    double () {
      return this.result * 2
    }
  },
  created () {},
  methods: {},
  watch: {
    msg () {
      console.log('変化あり')
    }
  }
}
</script>

<style></style>

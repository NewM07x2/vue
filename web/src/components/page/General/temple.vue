<template>
  <div id='main'>
    <h1>main</h1>
    <p><v-icon icon='fab fa-apple'/></p>
    <button @click='twitter'><i class='p10'><v-icon icon='fab fa-twitter'/></i></button>
    <p><v-icon icon='fab fa-google'/></p>
    <p><v-icon icon='fab fa-facebook-square'/></p>
  </div>
</template>
<script>
// import _ from 'lodash'
export default {
  name: 'App',
  components: {
  },
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
  methods: {
    twitter () {
      console.log('twiter')
    }
  },
  watch: {
    msg () {
      console.log('変化あり')
    }
  }
}
</script>

<style></style>

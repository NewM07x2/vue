<template>
  <footer class='footer'>
    <div class='container'>
      <nav class='float-left'>
        <ul>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
        </ul>
      </nav>
      <div class='copyright float-right'>
        Presented by Copyright - masato nitta, 2022- All Rights Reserved.
      </div>
    </div>
  </footer>
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

<style scoped>

</style>

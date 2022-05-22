<template>
  <div id="main">
    <h1>store</h1>
    {{ this.cnt }}
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      msg: 'Hello World!',
      cnt: this.$store.state.count
    }
  },
  computed: {
    double () {
      return this.result * 2
    }
  },
  created () {
  },
  methods: {
  },
  watch: {
    msg () {
      console.log('変化あり')
    }
  }
}
</script>

<style>
</style>

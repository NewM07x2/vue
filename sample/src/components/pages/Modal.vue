<template>
  <div>
    <h1>Modal</h1>
    <p>{{msg}}</p>
    <p><button @click='windowClose'> close </button></p>
  </div>
</template>

<script>
export default {
  components: {
  },

  data () {
    return {
      msg: 'window'
    }
  },
  computed: {
  },
  methods: {
    windowClose () {
      window.close()
    }
  }
}

</script>
<style scoped>
#store{
  margin: 10px 0;
  height: 100px;
  border-bottom: 1px lightgray dashed;
  border-top: 1px lightgray dashed;
}
li {
  list-style: none;
}
.map {
  width: 100vw;
  height: 100vh;
}
</style>

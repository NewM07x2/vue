<template>
  <div id="api">
    <h1>API</h1>
    <b-container fluid class="container-original">
      <h2>REST API でJSON取得</h2>
      <b-row align-h="center">
        <b-col cols="12">
          <b-button variant="primary" @click="getApi">Get</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import api from '@/api'
// import axios from '@/api/axios'
export default {
  name: 'Bootstrap',
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    async getApi () {
      console.log('Get')
      const response = await api.getSample()
      // const test = axios.get('/api/location/1118108')
      console.log(response)
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeCreate')
  },
  updated () {
    console.log('created')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>
<style scoped>
</style>

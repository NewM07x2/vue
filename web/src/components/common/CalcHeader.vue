<template>
  <div v-if="user && user.userName && $route.name !== 'siteSearch'">
    <b-navbar id="calc-header" toggleable="md">
      <b-collapse is-nav id="sub_nav_collapse">
        <div class="d-inline-flex ml-auto text-left align-middle">
          <b-navbar-brand>
            更新者：{{user.userName}}
            <span v-if="!user.innnerUser && user.vendorName">({{user.vendorName}})</span>
          </b-navbar-brand>
          <b-navbar-brand>更新日時：{{user.updateDate}}</b-navbar-brand>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'CalcHeader',
  props: [],
  computed: {
  },
  data () {
    return {
      user: {},
      watcher: null
    }
  },
  mounted () {
    this.watcher = () => {
      store.watch(() => this.$store.state.user, user => {
        this.user = user
      })
    }
    this.watcher()
  },
  methods: {

  },
  beforeDestroy () {
    this.watcher()
  }
}
</script>

<style scoped>
#calc-header {
  height: 55px;
  text-align: center;
  background-color: #e3e9eb;
}
</style>

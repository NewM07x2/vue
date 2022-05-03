<template>
  <nav
    class='navbar navbar-color-on-scroll fixed-top navbar-expand-lg navbar-transparent'
    color-on-scroll='100'
    id='sectionsNav'
  >
    <div class='container'>
      <div class='navbar-translate'>
        <a class='navbar-brand' href=''>NewM Library <font-awesome-icon icon='fas fa-address-book' /></a>
        <button class='navbar-toggler' type='button' data-toggle='collapse' aria-expanded='false' aria-label='Toggle navigation'>
          <span class='sr-only'>Toggle navigation</span>
          <span class='navbar-toggler-icon'></span>
          <span class='navbar-toggler-icon'></span>
          <span class='navbar-toggler-icon'></span>
        </button>
      </div>
      <div class='collapse navbar-collapse'>
        <ul class='navbar-nav ml-auto'>
          <li class='dropdown nav-item'>
            <button to="/" class='dropdown-toggle nav-link nav-original' data-toggle='dropdown' @click="openDropDown">Components</button>
            <div class='dropdown-menu dropdown-with-icons display-none'>
              <router-link to="/" class='dropdown-item' data-toggle='dropdown'>Presentation</router-link>
              <router-link to="/" class='dropdown-item' data-toggle='dropdown'>All Components</router-link>
              <router-link to="/" class='dropdown-item' data-toggle='dropdown'>Documentation</router-link>
            </div>
          </li>
          <li class='dropdown nav-item'>
            <button to="/" class='dropdown-toggle nav-link nav-original' data-toggle='dropdown' @click="openDropDown">Sections</button>
            <div class='dropdown-menu dropdown-with-icons display-none'>
              <router-link to="/" class='dropdown-item' data-toggle='dropdown'>Headers</router-link>
              <router-link to="/" class='dropdown-item' data-toggle='dropdown'>Features</router-link>
              <router-link to="/" class='dropdown-item' data-toggle='dropdown'>Blogs</router-link>
              <router-link to="/" class='dropdown-item' data-toggle='dropdown'>Teams</router-link>
            </div>
          </li>
          <li class='dropdown nav-item'>
            <button to="/" class='dropdown-toggle nav-link nav-original' data-toggle='dropdown' @click="openDropDown">Examples</button>
            <div class='dropdown-menu dropdown-with-icons display-none'>
              <router-link to="/" class='dropdown-item' data-toggle='dropdown'>Headers</router-link>
              <router-link to="/" class='dropdown-item' data-toggle='dropdown'>Features</router-link>
              <router-link to="/" class='dropdown-item' data-toggle='dropdown'>Blogs</router-link>
              <router-link to="/" class='dropdown-item' data-toggle='dropdown'>Teams</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>
<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      dropdown1: false,
      dropdown2: false,
      dropdown3: false,
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
    openDropDownInit () {
      console.log('openDropDownInit')
      this.dropdown1 = false
      this.dropdown2 = false
      this.dropdown3 = false
    },
    openDropDown () {
      console.log('openDropDown')
      this.openDropDownInit()
    }
  },
  watch: {
    msg () {
      console.log('変化あり')
    }
  }
}
</script>

<style scoped>

</style>

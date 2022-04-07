<!-- Copyright (C) 2018 SOFTBANK Corp. All rights reserved. -->
<template>
  <b-navbar id="duke-sc-header" toggleable="md" type="dark">
    <!-- レスポンシブ対応 -->
    <b-dropdown class="navbar-toggler nav-dropdown" no-caret variant="link">
      <template slot="button-content">
        <i class="mdi mdi-menu mdi-36px toggle-list"></i>
      </template>
    </b-dropdown>

    <!-- 通常表示 -->
    <b-collapse is-nav id="sub_nav_collapse">
      <div v-if="isEdit" class="ml-auto">
        <b-button class="duke-btn long-btn">諸元取込</b-button>
      </div>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: 'duke-sc-header',
  computed: {
    isEdit: {
      get () {
        return (this.$route.name === 'strengthComputationEdit')
      },
      set () {}
    }
  }
}
</script>
<style scoped>
#duke-sc-header {
  height: 55px;
  background-color: #e3e9eb;
}

#sub-menu {
  display: block;
  text-align: center;
  font-size: 0.8em;
  padding: 3px 0;
  height: 55px;
  border-bottom: 1px solid #a3a3a3;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 1;
}

#sub-menu > li {
  display: inline-block;
  width: 10%;
  min-width: 140px;
  list-style: none;
}
#sub-menu > li > a {
  background: none;
  display: inline-block;
  text-decoration: none;
  line-height: normal;
  color: #222;
}
.nav-link {
  padding: 0.3rem 1rem;
}

.nav-link:hover > .link-name {
  color: #0070c9;
}

.select {
  color: #0070c9;
}

/* navbarのレスポンシブ対応部分*/
.nav-dropdown {
  border: 0px;
}

.toggle-list {
  color: #222;
}

.toggle-list:hover {
  color: #0070c9;
}
</style>
